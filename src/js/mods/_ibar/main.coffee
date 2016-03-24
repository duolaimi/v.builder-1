define ['vmcore','./tplinit','_data/ibar'],(vmcore,ibarTpl,getData)->

    # 模板实例化
    new ibarTpl()
    timer = null
    _timer = null
    ###全局的ibar购物车模型###
    _VM_.ibar = vmcore.define({
        $id:"global_ibar"
        userInfo:{}
        cartInfo: {}
        myAsset:{}
        myFavorite:{}
        myHistory:{}
        tpl_login:""
        tpl_panel:""
        tpl_tips:""
        isLogin:false
        iscurrent:false
        render:->
            console.log(this)
            this.innerHTML
        openLogin:->
            clearTimeout timer if timer
            _top = $('.mpbtn_login').offsetTop
            _VM_.ibar.tpl_login = 'tpl_ibar_login'
            $('.ibar_login_box').css({top:_top, visibility:'visible'}).fadeIn()
            $('.ibar_sub_panel').fadeOut().css({left:0,visibility: 'hidden'})
        hideLogin: ->
            
        openPanel:(type)->
            _this = $(this)
            _this.next('div')
                 .stop().animate({opacity:0},'fast')
                 .css({left:-92,visibility:'hidden'})

            clearTimeout timer if timer
            _type = type or 1
            switch _type
                when 1
                    _VM_.ibar.tpl_panel = 'tpl_ibar_cart'
                when 2
                    _VM_.ibar.tpl_panel = 'tpl_ibar_favorite'
                    getData.favorite (data)->
                        _VM_.ibar.myFavorite = data
                when 3
                    _VM_.ibar.tpl_panel = 'tpl_ibar_history'
                    getData.history (data)->
                        _VM_.ibar.myHistory = data
                when 4
                    _VM_.ibar.tpl_panel = 'tpl_ibar_asset'
                    getData.asset (data)->
                        _VM_.ibar.myAsset = data
                when 5
                    _VM_.ibar.tpl_panel = 'tpl_ibar_recharge'
                    
            $('.ibar_login_box').fadeOut().css({visibility: 'hidden'})
            $('.ibar_sub_panel').css({visibility: 'visible'}).fadeIn()
                                .animate({left:-287},250)

        hidePanel:(t)->
            clearTimeout timer if timer
            _t = t or 1500
            timer = setTimeout ->
                _VM_.ibar.tpl_panel = ''
                _VM_.ibar.tpl_login = ''
                $('.ibar_login_box').fadeOut().css({visibility: 'hidden'})
                $('.ibar_sub_panel').fadeOut().css({left:0,visibility: 'hidden'})
            ,_t
            return
        showTips:(start,end)->
            _this = $(this)
            _this.addClass('current')
            _this.next('div')
                 .css({left:start,opacity:0,visibility:'visible'})
                 .stop().animate({left:end,opacity:1},400)
        hideTips:(end)->
            _this = $(this)
            _this.next('div')
                 .stop().animate({opacity:0},'fast')
                 .css({left:end,visibility:'hidden'})
            _this.removeClass('current')
        goTop:->
            $("body,html").animate({scrollTop: 0},400)
    })
    
    return _VM_