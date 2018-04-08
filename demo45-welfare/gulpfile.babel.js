import gulp from 'gulp'; //引入gulp
import rev from 'gulp-rev-append';
import stripCssComments from 'gulp-strip-css-comments';
import gulpLoadPlugins from 'gulp-load-plugins'; //自动加载插件 省去一个一个require进来
import browserSync from 'browser-sync'; //浏览器同步
import {
    stream as wiredep
} from 'wiredep'; //把bower 下载的文件引入到html文件中
const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('clean', function () {
    return gulp.src([
        'dist', //删除dist整个文件夹
        'dist/test/**/*', //删除dist下的test写任意子文件夹里的文件
        '!package.json' //不删除package.json文件
    ]).pipe($.clean());
});

//css管理 -> 预编译Sass
gulp.task('styles', () => {
    return gulp.src('src/styles/*.scss') //指明源文件路径 读取其数据流
        .pipe($.plumber()) //替换错误的pipe方法  使数据流正常运行
        .pipe($.sourcemaps.init()) //压缩环境出现错误能找到未压缩的错误来源
        .pipe($.sass.sync({ //预编译sass
            outputStyle: 'expanded', //CSS编译后的方式
            precision: 10, //保留小数点后几位
            includePaths: ['.']
        }).on('error', $.sass.logError))
        // nested:嵌套(默认)；compact:紧凑;expanded:扩展;compressed:压缩
        .pipe(stripCssComments()) // 清除注释
        // .pipe(rename({
        //     suffix: '.min'
        // }))
        .pipe($.autoprefixer({
            browsers: ['> 1%', 'last 20 versions', 'Firefox ESR'],
            cascade: false
        })) //自动匹配浏览器支持的后缀
        .pipe($.cssnano())
        .pipe($.rename({suffix: '.min'}))
        .pipe($.sourcemaps.write('.', {
            addComment: true
        })) //map文件命名
        .pipe(gulp.dest('dist/styles')) //指定输出路径
        .pipe(browserSync.reload({
            stream: true
        }));
});
// .. / dist / styles目录下会生成 对应的 * .css 和 * .css.map

//js管理

gulp.task('scripts', () => {
    return gulp.src('src/scripts/**/*.js')
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.babel()) //靠这个插件编译
        .pipe($.uglify())
        .pipe($.sourcemaps.write('.'))
        .pipe($.rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/scripts'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// ../dist/scripts目录下会生成 对应的 *.js 和 *.js.map

gulp.task('images', () => {
    return gulp.src('src/images/**/*')
        .pipe(($.cache($.imagemin({
            //使用cache只压缩改变的图片
            optimizationLevel: 5, //压缩级别
            progressive: true,
            interlaced: true
        })))).pipe(gulp.dest('dist/images'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
// 通过对比图片大小，可以看出压缩了多少

// gulp.task('fonts', () => {
//     return gulp.src(require('main-bower-files')('**/*.   {eot,svg,ttf,woff,woff2}', function (err) {})  //main-bower-files会从bower.json文件里寻找定义好的主要文件路径
//         .concat('src/fonts/**/*'))  //将bootstrap-sass的fonts和src下我们自己选用的fonts合并起来
// .pipe(gulp.dest('dist/fonts')); });
// // ../dist/fonts目录下会生成 对应的文件

gulp.task('html', () => { //先执行styles scripts任务
    var options = {
        removeComments: false, //清除HTML注释
        // collapseWhitespace: true, //压缩HTML
        collapseBooleanAttributes: false, //省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: false, //删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: false, //删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: false, //删除<style>和<link>的type="text/css"
        minifyJS: false, //压缩页面里的JS
        minifyCSS: false //压缩页面里的CSS
    };
    return gulp.src('src/*.html')
        .pipe($.plumber())
        .pipe($.useref({
            searchPath: ['src', '.']
        })) //将页面上 <!--endbuild--> 根据上下顺序合并
        .pipe($.if('*.js', $.uglify()))
        .pipe($.if('*.css', $.cssnano()))
        .pipe(rev())       //为引用添加版本号 
        .pipe($.if('*.html', $.htmlmin(options)))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
});


// gulp.task('serve', ['styles', 'scripts', 'fonts'], () => {
gulp.task('serve', ['styles', 'scripts'], () => {
    browserSync({
        notify: true,
        port: 3000, //端口号
        server: {
            baseDir: ['dist'], //确定根目录
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    }, function (err, bs) {
        console.log(bs.options.getIn(["urls", "local"]));
    });

    gulp.watch([ //监测文件变化 实行重新加载
        'src/*.html',
        'src/images/**/*'
    ]).on('change', reload);

    gulp.watch(['src/styles/**/*.scss','src/styles/*.scss'], ['styles']); //监测变化 执行styles任务
    gulp.watch('src/images/**/*', ['images']); //监测变化 执行styles任务
    gulp.watch('src/*.html', ['html']); //监测变化 执行html任务
    gulp.watch('src/scripts/**/*.js', ['scripts']);
    gulp.watch('src/fonts/**/*', ['fonts']);
    gulp.watch('bower.json', ['wiredep', 'fonts']);
});

gulp.task('wiredep_test', function () {
    gulp.src('./src/index_test.html')
        .pipe(wiredep({
            optional: 'configuration',
            goes: 'here',
            ignorePath: /^(\.\.\/)+/ //生成的路径忽略../   
        }))
        .pipe(gulp.dest('./src')) //输出到原路径
});

// gulp.task('build' , ['html' , 'images' , 'fonts'],()=>{
gulp.task('build', ['html', 'images'], () => {
    return gulp.src('dist/**/*')
        .pipe($.size({
            title: 'build',
            gzip: true
        }));
});

gulp.task('default', ['clean'], () => {
    gulp.start('build');
});