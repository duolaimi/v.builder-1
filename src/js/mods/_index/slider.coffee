###
# 首页幻灯片效果
###

define ['_lib/slide'],(slide)->
    exports = {}
    #首页大图轮播
    exports.init = ->
        $sliderBox = $('.slider_box')
        $fullSlide = $('.slider_index')
        imgs = $fullSlide.find('.bd .preload')
        now_img = $fullSlide.find('.bd img').eq(0)
        # console.log(imgs)
        # console.log(imgs)

        $sliderBox.hide()
        $fullSlide.find('.pnBtn').hide()
        $fullSlide.find('.hd').hide()

        ###
        # 判断图片加载的函数
        # 参数说明：
        # arr：可以是存放图片路径的一个数组，也可以是选取到的img的jquery对象；
        # funLoading：每一个单独的图片加载完成后执行的操作；
        # funOnLoad：全部图片都加载完成后的操作；
        # funOnError：单个图片加载出错时的操作。
        ###
        _imgLoadimg = (arr, funLoading, funOnLoad, funOnError)->
            numLoaded = 0
            numError = 0
            isObject = `Object.prototype.toString.call(arr) == "[object Object]" ? true : false`
            arr = `isObject ? arr.get() : arr`
            preload = (src, obj)->
                img = new Image()
                img.onload = ->
                    numLoaded++
                    funLoading and funLoading(numLoaded, arr.length, src, obj)
                    funOnLoad and numLoaded == arr.length and funOnLoad(numError)
                img.onerror = ->
                    numLoaded++
                    numError++
                    funOnError and funOnError(numLoaded, arr.length, src, obj)
                img.src = src
            for a of arr 
                src = `isObject ? $(arr[a]).attr("data-src") : arr[a]`
                console.log src
                preload(src, arr[a])

        #显示幻灯片的容器
        _showBox = ->
            #console.log('加载第1张图片')
            $sliderBox.show().animate({height: '272px'}, 500)
            $fullSlide.find('.bd ul').css({'margin-left':'-402px'})
            $fullSlide.fadeIn()

        #播放幻灯片
        _loaded = ->
            #_showBox()
            #console.log('加载完成，开始轮播')
            $fullSlide.hover(
                ->
                    $fullSlide.find('.pnBtn').stop().fadeIn()
                    return
                ,->
                    $fullSlide.find('.pnBtn').fadeOut()
                    return
            )
            $fullSlide.slide({
                titCell: ".hd ul",
                mainCell: ".bd ul",
                switchLoad: "data-src",
                effect: "leftLoop",
                autoPlay: true,
                vis: 1,
                autoPage: true,
                delayTime: 500,
                interTime: 5000,
                trigger: "click",
                startFun: ->
                    $fullSlide.find('.hd').fadeIn()
            })
   

        _loading = (n, total, src, obj)->
            #console.log(n + "of" + total + " pic loaded.", src)
            $(obj).attr("src", src).fadeIn()


        _LoadError = (n)->
            console.log("the " + n + "st img loaded Error!")

        _imgLoadimg(now_img, _loading, _showBox, null)
        _imgLoadimg(imgs, _loading, _loaded, _LoadError)
    
    return exports