
/**
 * gulp任务入口
 * @author  pjg 2015-09-29 23:24:22
 * @version $ID
 */
var build, cfgFile, fs, gulp, gutil, path;

gulp = require('gulp');

gutil = require('gulp-util');

build = require('vbuilder');

path = require('path');

fs = require('fs');

cfgFile = path.join(__dirname, 'config.json');

if (!fs.existsSync(cfgFile)) {
  gutil.log(gutil.colors.red("" + cfgFile + " 文件不存在"));
  return false;
}

build.setConfig(cfgFile);

gulp.task('init', function() {
  return build.init();
});

gulp.task('sprite', function() {
  return build.sprite();
});

gulp.task('img', function() {
  return build.img();
});

gulp.task('css', function() {
  return build.css();
});

gulp.task('js', function() {
  return build.js();
});

gulp.task('tpl', function() {
  return build.tpl();
});

gulp.task('watch', function() {
  return build.watch();
});

gulp.task('server', function() {
  build.watch();
  return build.server();
});

gulp.task('default', function() {
  var sTime;
  sTime = new Date().getTime();
  return build.dev(function() {
    var eTime;
    eTime = new Date().getTime();
    return gutil.log("构建时间: ", gutil.colors.magenta((eTime - sTime) / 1000), "秒");
  });
});
