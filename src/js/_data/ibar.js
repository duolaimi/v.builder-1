
/*
 * 侧边栏的数据接口
 */
define(['../_utils/doajax'], function(doAjax) {
  var cachetime, exports;
  cachetime = new Date().getTime();
  exports = {
    userInfo: function(cb) {
      var url;
      url = "/json/login.json?_" + cachetime;
      return doAjax.get(url, {}, function(data) {
        return cb(data);
      });
    },
    asset: function(cb) {
      var url;
      url = "/json/asset.json?_" + cachetime;
      return doAjax.get(url, {}, function(data) {
        return cb(data);
      });
    },
    cartList: function(cb) {
      var url;
      url = "/json/cart_6.json?_" + cachetime;
      return doAjax.get(url, {}, function(data) {
        return cb(data);
      });
    },
    favorite: function(cb) {
      var url;
      url = "/json/favorite.json?_" + cachetime;
      return doAjax.get(url, {}, function(data) {
        return cb(data);
      });
    },
    history: function(cb) {
      var url;
      url = "/json/history.json?_" + cachetime;
      return doAjax.get(url, {}, function(data) {
        return cb(data);
      });
    }
  };
  return exports;
});
