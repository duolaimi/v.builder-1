# 公共头部相关的js

define ['vmcore','_base/class','_tpl/header'],(vmcore,Class,hdTpl)->
    TplInit = Class.create
        initialize: ->
            # 定义初始化的容器
            $body = $('body')
            $hd_user = $('#hd_user')
            $cartBtn = $('.header_icon_wrap')

            # 载入模板
            @tpl_cartbtn = $(hdTpl.cartbtn)
            @tpl_user = $(hdTpl.userinfo)
            @tpl_cartlist = $(hdTpl._cartlist)

            # 将模板注入到容器中
            @tpl_user.appendTo($hd_user)
            @tpl_cartbtn.appendTo($cartBtn)
            @tpl_cartlist.appendTo($body)

    ###模板实例化###
    new TplInit()

    _timer = null;
    ###header_user的vm模型###
    _VM_.header_user = vmcore.define({
        $id:"header_user"
        tpl_tips:"tpl_ggmod_userinfo"
        userInfo:{}
        isLogin:false
        render:->
            this.innerHTML
    })

    ###header_cart按钮的vm模型###
    _VM_.header_cart = vmcore.define({
        $id:"header_cart"
        tpl_cart:""
        cartInfo: {}
        isOn:false
        render:->
            this.innerHTML
        movein:->
            clearTimeout _timer if _timer
            _VM_.header_cart.tpl_cart = "tpl_header_cartlist"
            _VM_.header_cart.isOn = true
            $('.cart_content_all').slideDown()
        moveout:->
            _timer = setTimeout ->
                _VM_.header_cart.tpl_cart = ""
                _VM_.header_cart.isOn = false
                $('.cart_content_all').slideUp()
            ,1500
    })

    return _VM_