define ['../../_lib/lazyload','./slider','./vmctrl'], (lazyload,Slider,vmctrl)->
    init = ->
        Slider.init()
        $('img').lazyload({
            placeholder: STATIC_PATH + "/img/dot.png"
        })
        vmctrl.run ->
            $(window).resize ->
                $("#iBar").css({'height':$(window).height()})

    init()
