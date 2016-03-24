###
# ajax接口封装
###
define "_utils/doajax",[],->
    exports = {}
    # get方法
    exports.get = (url,datas,cb)->
        _cb = cb or ->
        $.ajax({
            url: url
            dataType: "json"
            data: datas or {}
            type: 'GET'
            success: (ajaxobj)->
                _cb(ajaxobj)
            error: (ajaxobj)->
                _cb(ajaxobj)
        })
    # post方法
    exports.post = (url,datas,cb)->
        _cb = cb or ->
        $.ajax({
            url: url
            dataType: "json"
            data: datas or {}
            type: 'POST'
            success: (ajaxobj)->
                _cb(ajaxobj)
            error: (ajaxobj)->
                _cb(ajaxobj)
        })
        
    return exports