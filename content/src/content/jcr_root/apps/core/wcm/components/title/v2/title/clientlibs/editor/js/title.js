[1]  <script>
[2]      (function($, ns, window, undefined) {
[3]          $(window).adaptTo("foundation-registry").register("foundation.form.field.validation", {
[4]              selector: ".link-field-validator",
[5]              validate: function(el) {
[6]                  var $field = $(el);
[7]                  var isValid = false;
[8]
[9]                  if ($field.data("foundation-validation.internal.state") !== undefined) {
[10]                      return;
[11]                  }
[12]
[13]                  var $linkUrl = $field.find(".link-url");
[14]                  var $linkLabel = $field.find(".link-label");
[15]                  var $linkTitle = $field.find(".link-title");
[16]
[17]                  if ($linkUrl.length === 0 || $linkLabel.length === 0 || $linkTitle.length === 0) {
[18]                      return;
[19]                  }
[20]
[21]                  var linkUrlValue = $linkUrl.val();
[22]                  var linkLabelValue = $linkLabel.val();
[23]                  var linkTitleValue = $linkTitle.val();
[24]
[25]                  if (linkUrlValue.trim() !== "" && linkLabelValue.trim() !== "") {
[26]                      isValid = true;
[27]                  } else {
[28]                      $field.find(".link-url, .link-label").parent().addClass("is-invalid");
[29]                      if (linkTitleValue.trim() === "") {
[30]                          isValid = false;
[31]                      } else {
[32]                          $field.find(".link-title").parent().addClass("is-valid");
[33]                      }
[34]                  }
[35]
[36]                  if (isValid) {
[37]                      $field.find(".coral-Form-fieldset").removeClass("is-invalid");
[38]                      $field.data("foundation-validation.internal.state", true);
[39]                  } else {
[40]                      $field.find(".coral-Form-fieldset").addClass("is-invalid");
[41]                      $field.data("foundation-validation.internal.state", false);
[42]                  }
[43]              },
[44]          });
[45]      })(jQuery, Granite, window);
[46]  </script>