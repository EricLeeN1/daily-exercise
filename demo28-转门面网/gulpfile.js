/**
 * Created by Eric on 2017/4/8.
 */
// 1.less 编译 压缩 合并
// 2.js 合并 压缩 混淆
// 3.img 复制
// 4.html 压缩

//在gulpfile中先载入gulp的包，因为这个包提供了一些API
var gulp = require('gulp');
var rename = require('gulp-rename');
var rev = require('gulp-rev'); //对文件名加MD5后缀
var revCollector = require('gulp-rev-collector'); //路径替换
var clean = require('gulp-clean'); //- 用于删除文件


// /*清理文件*/
gulp.task('clean',
    function () {
        //删除dist目录下的所有文件
        gulp.src('dist/*', {
            read: false
        }).pipe(clean);
    });

// 1.less 编译 压缩 合并  --合并没有必要，一般预处理css都可以导包

var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
var autoprefiexer = require('gulp-autoprefixer');

gulp.task('style', function () {
    // 这里实在执行style任务时自动执行的
    gulp.src('src/styles/*.less')
        .pipe(rename({suffix: '.min'}))
        .pipe(less())
        .pipe(autoprefiexer({
            browsers: ['last 200 versions'],
            cascade: false
        }))
        // .pipe(rev())    //- 文件名加MD5后缀
        // .pipe(cssnano())
        .pipe(gulp.dest('dist/styles'))
        // .pipe(rev.manifest())                     //- 生成一个rev-manifest.json
        // .pipe(gulp.dest('./rev'))                  //- 将 rev-manifest.json 保存到 rev
        .pipe(browserSync.reload({
            stream: true
        }));
});

// 2.js 合并 压缩 混淆

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('scripts', function () {
    gulp.src('src/scripts/*.js')
    //.pipe(concat('all.js'))拼接
    //     .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/scripts'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// 3.img 复制
gulp.task('images', function () {
    gulp.src(['src/images/*.*', 'src/images/*/*.*'])
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// 4.html 压缩
var htmlmin = require('gulp-htmlmin');
gulp.task('html', function () {
    gulp.src(['./rev/*.json', 'src/*.html'])
        .pipe(htmlmin({
            // collapseWhitespace:true,                //清除空格
            removeComments: true,                    //清除注释
            // removeAttributeQuotes:true,             //清除引号
            removeStyleLinkTypeAttributes: true,     //清除link的type
            removeScriptTypeAttributes: true,        //清除script的type
            useShortDoctype: true                    //替换为html5文档类型
        }))
        //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件

        // .pipe(revCollector())
        //- 执行文件内css名的替换
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
    gulp.watch('src/styles/*.less', ['style']);
    gulp.watch('src/scripts/*.js', ['scripts']);
    gulp.watch(['src/images/*.*', 'src/images/*/*.*'], ['images']);
    gulp.watch('src/*.html', ['html']);
});
