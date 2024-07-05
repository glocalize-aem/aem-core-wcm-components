/*******************************************************************************
 * Copyright 2017 Adobe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
/**
 * Design dialog:
 * - The options of the select field to define the default value are added/removed based on the status
 * of the size checkboxes
 * - Validation: if no size checkboxes are checked, the dialog cannot be saved
 *
 * Edit dialog:
 * - displays all the sizes if no sizes have been defined in the policy
 * - hides all the sizes if only one size has been defined in the policy
 * - displays all the sizes defined in the policy if there are at least two
 */
(function($, Granite, ns, $document) {
    "use strict";
    var DEFAULT_SIZE_SELECTOR = "coral-select.core-title-size-default";
    var DEFAULT_SIZES_SELECTOR = "coral-select.core-title-sizes-default";
    var ALLOWED_SIZES_SELECTOR = ".core-title-sizes-allowed coral-checkbox";
    var DATA_ATTR_VALIDATION_STATE = "checkboxes.validation.state";
    var SIZES_SELECTOR = "coral-select.core-title-sizes";
    var LINK_URL_SELECTOR = ".cmp-title-link-url";
    var LINK_LABEL_SELECTOR = ".cmp-title-link-label";
    var LINK_TITLE_SELECTOR = ".cmp-title-link-title";

    function updateDefaultSizeSelect(checkboxToggled) {
        var select = $(DEFAULT_SIZE_SELECTOR).get(0);
        var $checkboxes = $(ALLOWED_SIZES_SELECTOR);
        var checkedTotal = 0;
        var selectValue = "";

        if (select === null || select === undefined) {
            return;
        }

        select.items.clear();

        $checkboxes.each(function(i, checkbox) {
            if (checkbox.checked) {
                var newItem = new Coral.Select.Item();
                newItem.content.textContent = checkbox.label.innerHTML;
                newItem.value = checkbox.value;
                select.items.add(newItem);
                checkedTotal++;
            }
        });

        if (checkboxToggled) {
            selectValue = getAppropriateCheckedBoxValue($checkboxes, select.value);
        }
        else {
            selectValue = select.value;
        }

        Coral.commons.nextFrame(function() {
            select.value = selectValue;

            if (checkedTotal === 0 || checkedTotal === 1) {
                $(select).parent().hide();
            }
            else {
                $(select).parent().show();
            }
        });
    }

    function getAppropriateCheckedBoxValue(checkboxes, currentDefaultTypeValue) {
        var isCurrentDefaultTypeValueValidOption = false;

        checkboxes.each(function(i, checkbox) {
            if (checkbox.checked && checkbox.value === currentDefaultTypeValue) {
                isCurrentDefaultTypeValueValidOption = true;
                return false;
            }
        });

        if (isCurrentDefaultTypeValueValidOption) {
            return currentDefaultTypeValue;
        }
        else {
            var firstCheckedValue = "";

            checkboxes.each(function(i, checkbox) {
                if (checkbox.checked) {
                    firstCheckedValue = checkbox.value;
                    return false;
                }
            });

            return firstCheckedValue;
        }
    }

    function toggleDisableAttributeOnLinkLabelAndTitleInputs() {
        $(LINK_LABEL_SELECTOR).prop("disabled", !$(LINK_URL_SELECTOR).val());
        $(LINK_TITLE_SELECTOR).prop("disabled", !$(LINK_URL_SELECTOR).val());
    }

    $document.on("coral-select:showitems", DEFAULT_SIZE_SELECTOR, function(e) {
        var select = e.currentTarget;
        var buttonHeight = $(select).find("button").outerHeight(true);
        var count = select.items.length;
        var totalHeight = count * (buttonHeight + 5);
        var maxHeight = parseInt($(select).find("coral-selectlist").css("max-height"), 10);
        var marginBottom = Math.min(totalHeight, maxHeight);

        $(select).css("margin-bottom", marginBottom);
    });

    $document.on("coral-select:hideitems", DEFAULT_SIZE_SELECTOR, function(e) {
        var select = e.currentTarget;

        $(select).css("margin-bottom", 0);
    });

    $document.on("change", ALLOWED_SIZES_SELECTOR, function(e) {
        updateDefaultSizeSelect(true);
    });

    $document.on("foundation-contentloaded", function(e) {
        Coral.commons.ready($(ALLOWED_SIZES_SELECTOR), function(component) {
            updateDefaultSizeSelect(false);
        });

        Coral.commons.ready($(SIZES_SELECTOR, DEFAULT_SIZES_SELECTOR), function(component) {
            var select = $(SIZES_SELECTOR).get(0);
            var defaultSelect = $(DEFAULT_SIZES_SELECTOR).get(0);

            if (select === null || select === undefined || defaultSelect === null || defaultSelect === undefined) {
                return;
            }

            var itemsCount = select.items.getAll().length;

            if (itemsCount === 0) {
                $(select).parent().remove();
            }
            else if (itemsCount === 1) {
                $(select).parent().remove();
                $(defaultSelect).parent().remove();
            }
            else {
                $(defaultSelect).parent().remove();
            }
        });

        Coral.commons.ready($(LINK_URL_SELECTOR, LINK_LABEL_SELECTOR, LINK_TITLE_SELECTOR), function(component) {
            toggleDisableAttributeOnLinkLabelAndTitleInputs();
        });
    });

    $(document).on("input", LINK_URL_SELECTOR, function(input) {
        $(LINK_URL_SELECTOR).val(input.target.value);
        toggleDisableAttributeOnLinkLabelAndTitleInputs();
    });

    $(document).on("change", LINK_URL_SELECTOR, function(input) {
        toggleDisableAttributeOnLinkLabelAndTitleInputs();
    });

    $(window).adaptTo("foundation-registry").register("foundation.validation.validator", {
        selector: ALLOWED_SIZES_SELECTOR,
        validate: function(el) {
            var $checkboxes = $(el).parent().children(ALLOWED_SIZES_SELECTOR);
            var firstEl = $checkboxes.get(0);
            var isValid = $(firstEl).data(DATA_ATTR_VALIDATION_STATE);
            var validationDone = isValid !== undefined;

            if (validationDone) {
                $(firstEl).removeData(DATA_ATTR_VALIDATION_STATE);

                if (!isValid) {
                    return Granite.I18n.get("Select at least one size option.");
                }
                else {
                    return;
                }
            }

            isValid = false;

            $checkboxes.each(function(i, checkbox) {
                if (checkbox.checked) {
                    isValid = true;
                    return false;
                }
            });

            $(firstEl).data(DATA_ATTR_VALIDATION_STATE, isValid);

            var api = $(firstEl).adaptTo("foundation-validation");
            api.checkValidity();
            api.updateUI();
        },
        show: function(el, message) {
            var $el = $(el);
            var fieldAPI = $el.adaptTo("foundation-field");

            if (fieldAPI && fieldAPI.setInvalid) {
                fieldAPI.setInvalid(true);
            }

            var error = $el.data("foundation-validation.internal.error");

            if (error) {
                error.content.innerHTML = message;

                if (!error.parentNode) {
                    $el.after(error);
                    error.show();
                }
            }
            else {
                error = new Coral.Tooltip();
                error.variant = "error";
                error.interaction = "off";
                error.placement = "bottom";
                error.target = el;
                error.content.innerHTML = message;
                error.open = true;
                error.id = Coral.commons.getUID();

                $el.data("foundation-validation.internal.error", error);
                $el.after(error);
            }
        }
    });
}(jQuery, Granite, Granite.author, jQuery(document)));