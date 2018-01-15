#gulp 常用的插件(npm上关键字查找)
##2017/11/15 15:21:12 

    1. 编译Jade：gulp-jade
    2. 创建本地服务器：gulp-connect
    3. 合并文件：gulp-concat
    4. 最小化js文件：gulp-uglify
    5. 重命名文件：gulp-rename
    6. 最小化css文件：gulp-minify-css
    7. 压缩html文件：gulp-minify-html
    8. 最小化图像：gulp-imagemin 
    9. 压缩css：gulp-cssnano
    10. 补全css前缀：gulp-autoprefixer
    11. 浏览器同步：browsersync
    12. gulp-strip-css-comments  去除css注释
    13. gulp-autoprefixer  前缀补足，向下兼容
    14. gulp-sourcemaps  sourcemaps记录了生成文件中的每一条语句在源文件中的对应位置。
    15. gulp 使用gulp
    16. gulp-clean 清理文件
    17. gulp-rename 重命名
    18. gulp-sass 支持sass
    19. gulp-cssnano 压缩css
    20. gulp-htmlmin 压缩html
    21. gulp-uglify 混淆js
    22. gulp-concat 链接文件
    23. browser-sync 与浏览器同步


# Babel
  
  的配置文件是.babelrc，存放在项目的根目录下。使用Babel的第一步，就是配置这个文件。

  presets字段设定转码规则，官方提供以下的规则集，你可以根据需要安装。
    {
      "presets": [],
      "plugins": []
    }
