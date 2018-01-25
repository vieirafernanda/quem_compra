let mix = require('laravel-mix');
let path = require('path');
let tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/assets/js')
    },
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  }
})

mix
// .js('resources/assets/js/app.js', 'public/js')
  .js('resources/assets/js/domains/account/account.js', 'public/js')
  .sass('resources/assets/sass/main.scss', 'public/css')
  .options({
    processCssUrls: false,
    postCss: [
      tailwindcss('tailwind.js')
    ]
  })
