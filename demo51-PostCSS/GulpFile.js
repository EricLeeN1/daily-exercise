// gulp.js配置
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var stylelint = require('stylelint');
var doiuse = require('doiuse');
var autoprefixer = require('autoprefixer');
var immutableCss = require('immutable-css');
var mqpacker = require('css-mqpacker');
var cssnano = require('cssnano');

// 应用PostCss插件

gulp.task('css', function () {
    return gulp.src('src/main.css')
        .pipe(postcss([
            reporter(),
            stylelint(),
            immutableCss({
                strict: true
            }),
            mqpacker({
                map:{
                    inline:false
                }
            }),
            autoprefixer({
                browsers: ['last 2 versions', '> 2%']
            }),
            doiuse({
                browsers: ['ie >= 9', 'last 2 versions'],
            }),
            cssnano()
        ]))
        .pipe(gulp.dest('dist/main.css'));
});
