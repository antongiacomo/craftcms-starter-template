let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix
    .setPublicPath('../')
    .react('assets/js/app.js', '../js')
    .postCss('assets/css/app.css', '../css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-nested'),
        require('autoprefixer'),
    ])
    .version()

if (process.env.NODE_ENV == "development") {
    mix.browserSync({
        proxy: process.env.DEFAULT_SITE_URL,
        files: [
            "assets/**/*.css",
            "assets/**/*.js",
            "templates/**/*.twig"
        ]
    });
}