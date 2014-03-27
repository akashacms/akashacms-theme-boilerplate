var path     = require('path');

module.exports.config = function(akasha, config) {
    // config.root_partials.push(path.join(__dirname, 'partials'));
    config.root_layouts.push(path.join(__dirname, 'layout'));
    config.root_assets.unshift(path.join(__dirname, 'assets'));
    // config.root_assets.push(path.join(__dirname, 'assets'));
    
    if (config.data.headerScripts) {
        if (!config.data.headerScripts.stylesheets) config.data.headerScripts.stylesheets = [];
        config.data.headerScripts.stylesheets.unshift({ href: "/boilerplate/css/normalize.css", media: "screen" });
        config.data.headerScripts.stylesheets.unshift({ href: "/boilerplate/css/main.css", media: "screen" });
        
        if (!config.data.headerScripts.javaScriptTop)  config.data.headerScripts.javaScriptTop = [];
        config.data.headerScripts.javaScriptTop.push({ href: "/boilerplate/js/vendor/modernizr-2.6.2.min.js" });
        
        if (!config.data.headerScripts.javaScriptBottom)  config.data.headerScripts.javaScriptBottom = [];
        config.data.headerScripts.javaScriptBottom.push({ href: "http://code.jquery.com/jquery.js" });
        config.data.headerScripts.javaScriptBottom.push({ href: "/boilerplate/js/plugins.js" });
        config.data.headerScripts.javaScriptBottom.push({ href: "/boilerplate/js/main.js" });
    }
}
