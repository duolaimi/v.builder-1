###*
 * gulp任务入口
 * @author  pjg 2015-09-29 23:24:22
 * @version $ID
###

gulp  = require 'gulp'
gutil = require 'gulp-util'
build = require 'vbuilder'
path  = require 'path'
fs    = require 'fs'

# 设置配置
# 判断配置文件
cfgFile = path.join(__dirname,'config.json')
if not fs.existsSync(cfgFile)
    gutil.log gutil.colors.red("#{cfgFile} 文件不存在")
    return false
build.setConfig cfgFile

# 任务
gulp.task 'init', ->
    # #设置配置
    build.init()

gulp.task 'sprite', ->
    build.sprite()

gulp.task 'img', ->
    build.img()

gulp.task 'css', ->
    build.css()

gulp.task 'js', ->
    build.js()

gulp.task 'tpl', ->
    build.tpl()

gulp.task 'watch', ->
    build.watch()

gulp.task 'server', ->
    build.watch()
    build.server()

gulp.task 'default', ->

    sTime = new Date().getTime()
    build.dev ->
        # console.log global.Cache
        eTime = new Date().getTime()
        gutil.log "构建时间: ", gutil.colors.magenta((eTime - sTime) / 1000),"秒"
