###
# 侧边栏的数据接口
###

define ['../_utils/doajax'],(doAjax)->
    cachetime = new Date().getTime()
    exports = {
        # 用户信息
        userInfo:(cb)->
            url = "/json/login.json?_" + cachetime
            doAjax.get url,{},(data)->
                cb(data)
        # 我的财产数据API
        asset:(cb)->
            url = "/json/asset.json?_" + cachetime
            doAjax.get url,{},(data)->
                cb(data)
        # 购物车数据API
        cartList:(cb)->
            url = "/json/cart_6.json?_" + cachetime
            doAjax.get url,{},(data)->
                cb(data)
        # 我的心愿数据API
        favorite:(cb)->
            url = "/json/favorite.json?_" + cachetime
            doAjax.get url,{},(data)->
                cb(data)
        # 历史浏览记录数据API
        history:(cb)->
            url = "/json/history.json?_" + cachetime
            doAjax.get url,{},(data)->
                cb(data)
    }

    return exports
