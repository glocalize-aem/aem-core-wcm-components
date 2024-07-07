/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2018 Adobe
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
(function() {
    "use strict";

    window.CQ = window.CQ || {};
    window.CQ.CoreComponents = window.CQ.CoreComponents || {};
    window.CQ.CoreComponents.panelcontainer = window.CQ.CoreComponents.panelcontainer || {};
    window.CQ.CoreComponents.panelcontainer.v1 = {};

})();

(function() {
    "use strict";

    var selector = ".cmp-button--editor-value"; // This is a CSS selector and should not be localized. Also not a meaningful string or variable
    var dataAtributeSelector = "[data-cmp-]"; // This is a CSS selector and should not be localized. Also not a meaningful string or variable
    var name = "cmp-accordion", // This is a CSS selector and should not be localized. Also not a meaningful string or variable
    function updatePageTitle(title) {
        document.title = Granite.I18n.get(title);
        console.log("Title updated to " + title);
    }

    function setButtonLabel(buttonId, label) {
        document.getElementById(buttonId).textContent = Granite.I18n.getVar(label);
    }

    var defaultTitle = Granite.I18n.get("Welcome to Our Website");
    var buttonText = Granite.I18n.get("Click Me");

    updatePageTitle(defaultTitle);
    setButtonLabel("submitBtn", buttonText);
})();