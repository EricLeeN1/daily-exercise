// gulp.js配置
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var stylelint = require('stylelint');
var reporter = require('postcss-reporter');
// var doiuse = require('doiuse');
// var immutableCss = require('immutable-css');
// var mqpacker = require('css-mqpacker');
var cssnano = require('cssnano');

// 应用PostCss插件

gulp.task('styles', function () {
    return gulp.src('src/styles/*.css')
        .pipe(postcss([
            reporter({
                clearMessages: true
            }),
            stylelint({
                'rules': {
                    'color-no-invalid-hex': true,
                    'declaration-colon-space-before': [2, 'never'],
                    'indentation': [2, 2],
                    'number-leading-zero': [2, 'always']
                }
            }),
            // immutableCss({
            //     strict: true
            // }),
            // mqpacker({
            //     map:{
            //         inline:false
            //     }
            // }),
            autoprefixer({
                browsers: ['last 2 versions', '> 2%']
            }),
            // doiuse({
            //     browsers: ['ie >= 9', 'last 2 versions'],
            // }),
            cssnano()
        ]))
        .pipe(
            rename({
                suffix: '.min'
            })
        )
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('map/'))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('default', ['styles']);

var watcher = gulp.watch('src/styles/*.css', ['default']);

watcher.on('change', function (event) {
    console.log('File' + event.path + ' was ' + event.type + ',running task...');
})