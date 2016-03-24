# 顶部的优惠劵提示
define ['_base/class','_tpl/ggmod'],(Class,Tpl)->
    return Class.create
        initialize: ->
            # 定义初始化的容器
            $body = $('body')

            # 载入模板
            @tpl_poptips = $(Tpl._poptips)

            # 将模板注入到容器中
            @tpl_poptips.appendTo($body)