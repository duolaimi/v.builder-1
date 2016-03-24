###初始化ibar模板###

define ['_base/class','_tpl/ibar'],(Class,Tpl)->
      tplInit = Class.create
            initialize: ->
                  $body = $("body")
                  ###
                  # 注入主模块，注入依赖
                  ###
                  # @ibarMain = ibarMain

                  ### 载入主模板 ###
                  @tpl_main = $(Tpl.main)

                  ### 载入子模板 - 用户信息 ###
                  @tpl_login = $(Tpl._login)

                  ### 载入子模板 - 购物车信息 ###
                  @tpl_cart = $(Tpl._cart)

                  ### 载入子模板 - 我的财产 ###
                  @tpl_asset = $(Tpl._asset)

                  ### 载入子模板 - 我的心愿单 ###
                  @tpl_favorite= $(Tpl._favorite)

                  ### 载入子模板 - 我的浏览记录 ###
                  @tpl_history= $(Tpl._history)

                  ### 载入子模板 - 附属信息 ###
                  @tpl_recharge= $(Tpl._recharge)

                  ### 将模板注入到页面中 ###
                  @tpl_main.appendTo($body)
                  @tpl_login.appendTo($body)
                  @tpl_cart.appendTo($body)
                  @tpl_asset.appendTo($body)
                  @tpl_favorite.appendTo($body)
                  @tpl_history.appendTo($body)
                  @tpl_recharge.appendTo($body)

                  

