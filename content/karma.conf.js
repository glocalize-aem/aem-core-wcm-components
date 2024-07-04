module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'fixture'],
        files: ['src/content/jcr_root/apps/core/wcm/components/commons/site/clientlibs/**/js/*.js', 'src/content/jcr_root/apps/core/wcm/components/image/v3/image/clientlibs/site/**/js/*.js', 'test/**/*Test.js', 'test/**/*Test.html', 'spec/**/*Test.html'],
        exclude: [],
        preprocessors: {
            '**/*.html': ['html2js'],
            'src/content/jcr_root/apps/core/wcm/components/commons/site/clientlibs/**/js/*.js': ['coverage']
        },
        reporters: ['progress', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome', 'ChromeHeadless', 'ChromeHeadlessCI'],
        customLaunchers: {
            ChromeHeadlessCI: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox']
            }
        },
        singleRun: false,
        concurrency: Infinity,
        coverageReporter: {
            includeAllSources: true,
            type: 'lcov',
            dir: './coverage/'
        }
    });
};

// Granite.I18n library usage for internationalization
const i18n = new Granite.I18n();

i18n.addBundle('commons/site/clientlibs/**/js/*.js', {
    'en': 'src/content/jcr_root/apps/core/wcm/components/commons/site/clientlibs/**/js/en.js',
    'fr': 'src/content/jcr_root/apps/core/wcm/components/commons/site/clientlibs/**/js/fr.js'
});

i18n.addBundle('image/v3/image/clientlibs/site/**/js/*.js', {
    'en': 'src/content/jcr_root/apps/core/wcm/components/image/v3/image/clientlibs/site/**/js/en.js',
    'fr': 'src/content/jcr_root/apps/core/wcm/components/image/v3/image/clientlibs/site/**/js/fr.js'
});