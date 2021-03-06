/**
 * Created by Eric on 2017/4/8.
 */
// 1.less/sass 编译 压缩 合并
// 2.js 合并 压缩 混淆
// 3.img 复制
// 4.html 压缩

//在gulpfile中先载入gulp的包，因为这个包提供了一些API
var gulp = require('gulp');
var rename = require('gulp-rename');// 重命名
var clean = require('gulp-clean'); // 用于删除文件

// 1.less 编译 压缩 合并  --合并没有必要，一般预处理css都可以导包
// 1.sass 编译 压缩 合并  --合并没有必要，一般预处理css都可以导包

// var less = require('gulp-less');// 识别less
var stripCssComments = require('gulp-strip-css-comments'); // 去除注释
var cssnano = require('gulp-cssnano');// 压缩css
var autoprefiexer = require('gulp-autoprefixer');// 自动补足前缀
var sass = require('gulp-sass'); //识别sass
var sourcemaps = require('gulp-sourcemaps');// 生成map资源确保纠错查看位置

// 2.js 合并 压缩 混淆

var concat = require('gulp-concat');// 合并
var uglify = require('gulp-uglify');// 压缩 混淆


// /*清理文件*/
gulp.task('clean',
    function () {
        //删除dist目录下的所有文件
        gulp.src('dist/*', {
            read: false
        }).pipe($.clean());
    });



// less版本
// gulp.task('style', function () {
//     // 这里实在执行style任务时自动执行的
//     gulp.src('src/styles/*.less')
//         .pipe(rename({suffix: '.min'}))
//         .pipe(less())
//         .pipe(autoprefiexer({
//             browsers: ['last 500 versions'],
//             cascade: false
//         }))
//         // .pipe(cssnano())
//         .pipe(gulp.dest('dist/styles'))
//         .pipe(browserSync.reload({
//             stream: true
//         }));
// });



//sass版本
gulp.task('style', function () {
    // 这里实在执行style任务时自动执行的
    gulp.src('src/styles/*.scss')
        .pipe(sourcemaps.init())
        //重命名
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sass({
            outputStyle: 'expanded'
            // nested:嵌套(默认)；compact:紧凑;expanded:扩展;compressed:压缩
        }).on('error', sass.logError))
        .pipe(stripCssComments())
        .pipe(autoprefiexer({
            browsers: ['last 50 versions'],
            cascade: false
        }))
        // .pipe(cssnano())
        .pipe(sourcemaps.write('../maps', {
            addComment: true
        }))
        .pipe(gulp.dest('dist/styles'))
        .pipe(browserSync.reload({
            stream: true
        }));
});



gulp.task('scripts', function () {
    gulp.src('src/scripts/*.js')
        //.pipe(concat('all.js'))拼接
        // .pipe(uglify())
        // .pipe(rename({
        //     suffix: '.min'
        // }))
        .pipe(gulp.dest('dist/scripts'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// 3.img 复制
gulp.task('images', function () {
    gulp.src('src/images/*.*')
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// 4.html 压缩
var htmlmin = require('gulp-htmlmin');
gulp.task('html', function () {
    gulp.src('src/*.html')
        .pipe(htmlmin({
            // collapseWhitespace:true,                //清除空格
            removeComments: true, //清除注释
            // removeAttributeQuotes:true,             //清除引号
            removeStyleLinkTypeAttributes: true, //清除link的type
            removeScriptTypeAttributes: true, //清除script的type
            useShortDoctype: true //替换为html5文档类型
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

var browserSync = require("browser-sync");
gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: ['dist']
        }
    }, function (err, bs) {
        console.log(bs.options.getIn(["urls", "local"]));
    });
    gulp.watch('src/styles/*.scss', ['style']);
    gulp.watch('src/scripts/*.js', ['scripts']);
    gulp.watch('src/images/*.*', ['images']);
    gulp.watch('src/*.html', ['html']);
});

// // 监听任务时先执行一次编译  
// gulp.task('default', function() {  
//     gulp.start('images', 'watch');  
// });