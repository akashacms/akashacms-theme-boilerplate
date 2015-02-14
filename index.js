/**
 *
 * Copyright 2013-2015 David Herron
 * 
 * This file is part of AkashaCMS-tagged-content (http://akashacms.com/).
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

var path     = require('path');

module.exports.config = function(akasha, config) {
    // config.root_partials.push(path.join(__dirname, 'partials'));
    config.root_layouts.push(path.join(__dirname, 'layout'));
    config.root_assets.unshift(path.join(__dirname, 'assets'));
    // config.root_assets.push(path.join(__dirname, 'assets'));
    
    if (config.headerScripts) {
        if (!config.themeBoilerplate) config.themeBoilerplate = {};
        if (!config.headerScripts.stylesheets) config.headerScripts.stylesheets = [];
        config.headerScripts.stylesheets.unshift({
            href: config.themeBoilerplate.normalizeUrl
                ? config.themeBoilerplate.normalizeUrl
                : "/boilerplate/css/normalize.css",
            media: "screen"
        });
        config.headerScripts.stylesheets.unshift({
            href: "/boilerplate/css/main.css",
            media: "screen"
        });
        
        if (!config.headerScripts.javaScriptTop)  config.headerScripts.javaScriptTop = [];
        config.headerScripts.javaScriptTop.push({
            href: config.themeBoilerplate.modernizrUrl
                ? config.themeBoilerplate.modernizrUrl
                : "/boilerplate/js/vendor/modernizr-2.8.3.min.js"
        });
        
        if (!config.headerScripts.javaScriptBottom)  config.headerScripts.javaScriptBottom = [];
        if (!config.themeBoilerplate.skipJQuery) {
            config.headerScripts.javaScriptBottom.push({
                href: config.themeBoilerplate.jQueryUrl
                    ? config.themeBoilerplate.jQueryUrl
                    : "//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"
            });
            config.headerScripts.javaScriptBottom.push({
                script: config.themeBoilerplate.jQueryFallback
                      ? config.themeBoilerplate.jQueryFallback
                      : "window.jQuery || document.write('<script src=\"/boilerplate/js/vendor/jquery-1.11.2.min.js\"><\/script>')"
            });
        }
        config.headerScripts.javaScriptBottom.push({ href: "/boilerplate/js/plugins.js" });
        config.headerScripts.javaScriptBottom.push({ href: "/boilerplate/js/main.js" });
    }
	return module.exports;
}
