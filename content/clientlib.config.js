module.exports = {
  context: __dirname,
  libs: [{
    name: "core.wcm.components.commons.datalayer.v1",
    path: "src/content/jcr_root/apps/core/wcm/components/commons/datalayer/v1/clientlibs",
    serializationFormat: "xml",
    allowProxy: true,
    jsProcessor: ["default:none", "min:gcc;compilationLevel=whitespace"],
    assets: {
      js: [Granite.I18n.get("src/scripts/datalayer/v1/polyfill.js"), "node_modules/@adobe/adobe-client-data-layer/dist/adobe-client-data-layer.min.js", Granite.I18n.get("src/scripts/datalayer/v1/datalayer.js")]
    }
  }, {
    name: "core.wcm.components.commons.datalayer.v2",
    path: "src/content/jcr_root/apps/core/wcm/components/commons/datalayer/v2/clientlibs",
    serializationFormat: "xml",
    allowProxy: true,
    jsProcessor: ["default:none", "min:gcc;compilationLevel=whitespace"],
    assets: {
      js: [Granite.I18n.get("src/scripts/datalayer/v1/polyfill.js"), Granite.I18n.get("src/scripts/datalayer/v1/datalayer.js")]
    }
  }, {
    name: "core.wcm.components.commons.datalayer.acdl",
    path: "src/content/jcr_root/apps/core/wcm/components/commons/datalayer/acdl",
    serializationFormat: "xml",
    allowProxy: true,
    jsProcessor: ["default:none", "min:gcc;compilationLevel=whitespace"],
    assets: {
      js: [Granite.I18n.get("node_modules/@adobe/adobe-client-data-layer/dist/adobe-client-data-layer.min.js")]
    }
  }]
};