define(['vmcore', '../../_data/ibar', '../_common/header', '../_ibar/main'], function(vmcore, getData, header, iBar) {
  var exports;
  exports = {};
  exports.run = function(cb) {
    var timer;
    vmcore.scan();
    timer = null;
    getData.cartList(function(data) {
      return _VM_.ibar.cartInfo = _VM_.header_cart.cartInfo = data;
    });
    getData.userInfo(function(data) {
      _VM_.ibar.userInfo = _VM_.header_user.userInfo = data;
      if (data.status === 1) {
        return _VM_.ibar.isLogin = _VM_.header_user.isLogin = true;
      }
    });
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      return $("#iBar").css({
        'height': $(window).height()
      }).slideDown(500);
    }, 400);
    return cb();
  };
  return exports;
});
