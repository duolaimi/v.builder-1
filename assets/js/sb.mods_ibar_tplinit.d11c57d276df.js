!function(){var a,i,t;a=function(){function a(a){var i,t;for(i in a)t=a[i],e.Mutators.hasOwnProperty(i)?e.Mutators[i].call(this,t):this.prototype[i]=t}function i(i){return i.extend=e.extend,i.implement=a,i}function t(){}function s(a,i,t){for(var s in i)if(i.hasOwnProperty(s)){if(t&&-1===p(t,s))continue;"prototype"!==s&&(a[s]=i[s])}}var e=function(a){return this instanceof e||!c(a)?void 0:i(a)},r=Object.prototype.toString,l=Array.isArray||function(a){return"[object Array]"===r.call(a)},c=function(a){return"[object Function]"===r.call(a)},p=Array.prototype.indexOf?function(a,i){return a.indexOf(i)}:function(a,i){for(var t=0,s=a.length;s>t;t++)if(a[t]===i)return t;return-1};e.create=function(t,r){function l(){t.apply(this,arguments),this.constructor===l&&this.initialize&&this.initialize.apply(this,arguments)}return c(t)||(r=t,t=null),r||(r={}),t||(t=r.Extends||e),r.Extends=t,t!==e&&s(l,t,t.StaticsWhiteList),a.call(l,r),i(l)},e.extend=function(a){return a||(a={}),a.Extends=this,e.create(a)},e.Mutators={Extends:function(a){var i=this.prototype,t=n(a.prototype);s(t,i),t.constructor=this,this.prototype=t,this.superclass=a.prototype},Implements:function(a){l(a)||(a=[a]);for(var i,t=this.prototype;i=a.shift();)s(t,i.prototype||i)},Statics:function(a){s(this,a)}};var n=Object.__proto__?function(a){return{__proto__:a}}:function(a){return t.prototype=a,new t};return e}(),i={_asset:'<script id="tpl_ibar_asset" type="smcore"><a title="关闭" class="ibar_closebtn" href="javascript:;" vm-click="hidePanel(20)"></a><span class="ibar_loading_text">正在为您努力加载数据！</span><div class="ibar-Asset-wrap ibar-moudle-wrap ibar_plugin" id="iBarAsset" style="display: block;"><h2 class="ibar_plugin_title"><span class="ibar_plugin_name">我的财产</span></h2><div class="ibar_plugin_content" style="height: 720px; overflow-y: auto;"><div class="ia-head-list clearfix"><a href="http://www.jumei.com/i/membership/show_promocards?from=ibar_property_xianjinquan" target="_blank" class="ihl-quan fl"><div class="num">0</div><div class="text">现金券</div></a><a href="http://www.jumei.com/i/membership/show_red_envelope?from=ibar_property_hongbao" target="_blank" class="ihl-hg fl"><div class="num">0</div><div class="text">红包</div></a><a href="http://www.jumei.com/i/account/balance?from=ibar_property_yue" target="_blank" class="ihl-money fl"><div class="num">¥0</div><div class="text">余额</div></a></div><div class="ga-expiredsoon"><div class="es-head">即将过期现金券</div><div class="ia-none">您还没有可用的现金券哦！</div></div><div class="ga-expiredsoon"><div class="es-head">即将过期红包</div><div class="ia-none">您还没有可用的红包哦！</div></div></div></div></script>',_cart:'<script id="tpl_ibar_cart" type="smcore"><a title="关闭" class="ibar_closebtn" href="javascript:;" vm-click="hidePanel(20)"></a><span class="ibar_loading_text">正在为您努力加载数据！</span><div class="ibar_plugin ibar_cart_content" id="iBarCart"><div class="ibar_plugin_title"><span class="ibar_plugin_name">购物车<span class="ibar_cart_timer" style="display: inline;">已超时，请尽快结算</span></span></div><div class="ibar_plugin_content ibar_cart_content"><div class="ibar_cart_group_container" style="position: absolute;"><div class="ibar_cart_group ibar_cart_product"><div class="ibar_cart_group_header clearfix"><span class="ibar_cart_group_title">聚美优品</span><span class="ibar_cart_group_shop ibar_text_ellipsis"></span><span class="ibar_cart_group_baoyou ibar_pink">新用户首单满<i>39</i>元包邮</span></div><ul class="ibar_cart_group_items"><li class="ibar_cart_item clearfix" vm-repeat="cartInfo.product.items"><div class="ibar_cart_item_pic"><a target="_blank" vm-attr-title="el.short_name" vm-href="el.url + \'?from=ibar_cart\'"><img vm-attr-alt="el.short_name" vm-src="el.image_100"><span class="ibar_cart_item_tag png" vm-class="ibar_cart_item_tag_active ibar_cart_item_tag_soldout:el.sale_status != \'\'"></span></a></div><div class="ibar_cart_item_desc"><span class="ibar_cart_item_name_wrapper"><span class="ibar_cart_item_global">[极速免税店]</span><a target="_blank" class="ibar_cart_item_name" vm-attr-title="el.short_name" vm-href="el.url + \'?from=ibar_cart\'">{{el.short_name}}</a></span><div class="ibar_cart_item_sku ibar_text_ellipsis"><span>{{el.attribute}}</span></div><div class="ibar_cart_item_price ibar_pink"><span class="unit_price">￥{{el.item_price}}</span><span class="unit_plus"> x </span><span class="ibar_cart_item_count">{{el.quantity}}</span></div></div></li></ul></div><p class="ibar_cart_loading_text">正在为您努力地加载数据！</p></div><div class="ibar_cart_handler ibar_cart_handler_attached" style="display: block; bottom: 45px"><div class="ibar_cart_handler_header clearfix"><span class="ibar_cart_handler_header_left">共 <span class="ibar_cart_total_quantity ibar_pink">{{cartInfo.quantity}}</span> 件商品</span><span class="ibar_cart_total_price ibar_pink">￥{{cartInfo.total_amount}}</span></div><a target="_blank" href="http://cart.jumei.com/i/cart/show?from=ibar_cart_button" class="ibar_cart_go_btn">去购物车结算</a></div></div></div></script>',_favorite:'<script id="tpl_ibar_favorite" type="smcore"><a href="javascript:;" class="ibar_closebtn" title="关闭" vm-click="hidePanel(20)"></a><span class="ibar_loading_text">正在为您努力加载数据！</span><div class="ibar-moudle-wrap ibar_plugin" id="iBarFavorite" style="display: block;"><h2 class="ibar_plugin_title"><span class="ibar_plugin_name">今日疯抢</span></h2><div class="ibar_plugin_content" style="height: 700px; overflow-y: auto;"><div class="ibar-nothing"><div class="txt">您没有在售中的 <br><span>心愿商品喔！</span></div></div><div class="ibar-moudle-product soon"><h2>即将开抢</h2><div class="imp_item"><div class="imp-starttime">03月25日10:00:00开抢</div><a href="http://gz.jumei.com/i/deal/d150325p21839zc.html?from=ibar_mywish_willsale" title="15ml欧莱雅复颜抗皱紧致滋润眼霜" target="_blank" class="pic"><img src="http://p4.jmstatic.com/product/000/021/21839_std/21839_100_100.jpg" width="100" height="100"></a><p class="tit"><a href="http://gz.jumei.com/i/deal/d150325p21839zc.html?from=ibar_mywish_willsale" title="15ml欧莱雅复颜抗皱紧致滋润眼霜" target="_blank">15ml欧莱雅复颜抗皱紧致滋润眼霜</a></p><p class="wish-num">已有318人许愿</p><p></p><p class="price"><em>¥</em>189 <del>¥210</del></p></div><div class="imp_item"><div class="imp-starttime">03月25日10:00:00开抢</div><a href="http://gz.jumei.com/i/deal/d150325p817644zc.html?from=ibar_mywish_willsale" title="套欧莱雅限量清润保湿护肤礼盒套装" target="_blank" class="pic"><img src="http://p4.jmstatic.com/product/000/817/817644_std/817644_100_100.jpg" width="100" height="100"></a><p class="tit"><a href="http://gz.jumei.com/i/deal/d150325p817644zc.html?from=ibar_mywish_willsale" title="套欧莱雅限量清润保湿护肤礼盒套装" target="_blank">套欧莱雅限量清润保湿护肤礼盒套装</a></p><p class="wish-num">已有1139人许愿</p><p></p><p class="price"><em>¥</em>330 <del>¥509</del></p></div></div></div></div><div class="ibar-Asset-wrap ibar-moudle-wrap ibar_plugin" id="iBarAsset" style="display: none;"><h2 class="ibar_plugin_title"><span class="ibar_plugin_name">我的财产</span></h2><div class="ibar_plugin_content" style="height: 700px; overflow-y: auto;"><div class="ia-head-list clearfix"><a href="http://www.jumei.com/i/membership/show_promocards?from=ibar_property_xianjinquan" target="_blank" class="ihl-quan fl"><div class="num">0</div><div class="text">现金券</div></a><a href="http://www.jumei.com/i/membership/show_red_envelope?from=ibar_property_hongbao" target="_blank" class="ihl-hg fl"><div class="num">0</div><div class="text">红包</div></a><a href="http://www.jumei.com/i/account/balance?from=ibar_property_yue" target="_blank" class="ihl-money fl"><div class="num">¥0</div><div class="text">余额</div></a></div><div class="ga-expiredsoon"><div class="es-head">即将过期现金券</div><div class="ia-none">您还没有可用的现金券哦！</div></div><div class="ga-expiredsoon"><div class="es-head">即将过期红包</div><div class="ia-none">您还没有可用的红包哦！</div></div></div></div></script>',_history:'<script id="tpl_ibar_history" type="smcore"><a title="关闭" class="ibar_closebtn" href="javascript:;" vm-click="hidePanel(20)"></a><span class="ibar_loading_text">正在为您努力加载数据！</span><div id="iBarHistroy" class="ibar-moudle-wrap ibar_plugin"><h2 class="ibar_plugin_title"><span class="ibar_plugin_name">最近查看</span></h2><div class="ibar_plugin_content"><div class="ibar-history-head">共5件商品<a id="ibar-btn-clearhistory" href="javascript:;">清空</a></div><div class="ibar-moudle-product"><div class="imp_item"><a class="pic" target="_blank" title="小美盒碧欧泉主题盒七件套1" href="http://item.jumei.com/gz150318p1309926.html?from=ibar_view_recent_product"><img width="100" height="100" src="http://p1.jmstatic.com/product/001/309/1309926_std/1309926_100_100.jpg"></a><p class="tit"><a target="_blank" title="小美盒碧欧泉主题盒七件套1" href="http://item.jumei.com/gz150318p1309926.html?from=ibar_view_recent_product">小美盒碧欧泉主题盒七件套1</a></p><p class="price"><em>¥</em>200</p><a img="http://p1.jmstatic.com/product/001/309/1309926_std/1309926_100_100.jpg" type="deal" key="gz150318p1309926" class="imp-addCart" target="_blnak" href="javascript:;">加入购物车</a><div class="sku_box"><select class="sku_select"><option value="0">型号选择</option></select></div></div><div class="imp_item"><a class="pic" target="_blank" title="兰蔻奇迹香氛30ml" href="http://item.jumei.com/d150318p1150zc.html?from=ibar_view_recent_product"><img width="100" height="100" src="http://p0.jmstatic.com/product/000/001/1150_std/1150_100_100.jpg"></a><p class="tit"><a target="_blank" title="兰蔻奇迹香氛30ml" href="http://item.jumei.com/d150318p1150zc.html?from=ibar_view_recent_product">兰蔻奇迹香氛30ml</a></p><p class="price"><em>¥</em>389</p><a img="http://p0.jmstatic.com/product/000/001/1150_std/1150_100_100.jpg" type="deal" key="d150318p1150zc" class="imp-addCart" target="_blnak" href="javascript:;">加入购物车</a><div class="sku_box"><select class="sku_select"><option value="0">型号选择</option></select></div></div><div class="imp_item"><a class="pic" target="_blank" title="珀莱雅新柔皙美白补水套装" href="http://item.jumei.com/gz150105p230856bk.html?from=ibar_view_recent_product"><img width="100" height="100" src="http://p1.jmstatic.com/product/000/230/230856_std/230856_100_100.jpg"></a><p class="tit"><a target="_blank" title="珀莱雅新柔皙美白补水套装" href="http://item.jumei.com/gz150105p230856bk.html?from=ibar_view_recent_product">珀莱雅新柔皙美白补水套装</a></p><p class="price"><em>¥</em>99</p><a img="http://p1.jmstatic.com/product/000/230/230856_std/230856_100_100.jpg" type="deal" key="gz150105p230856bk" class="imp-addCart" target="_blnak" href="javascript:;">加入购物车</a><div class="sku_box"><select class="sku_select"><option value="0">型号选择</option></select></div></div><div class="imp_item"><a class="pic" target="_blank" title="完美芦荟胶一对40g*2" href="http://item.jumei.com/gz150105p34bk.html?from=ibar_view_recent_product"><img width="100" height="100" src="http://p4.jmstatic.com/product/000/000/34_std/34_100_100.jpg"></a><p class="tit"><a target="_blank" title="完美芦荟胶一对40g*2" href="http://item.jumei.com/gz150105p34bk.html?from=ibar_view_recent_product">完美芦荟胶一对40g*2</a></p><p class="price"><em>¥</em>59.9</p><a img="http://p4.jmstatic.com/product/000/000/34_std/34_100_100.jpg" type="deal" key="gz150105p34bk" class="imp-addCart" target="_blnak" href="javascript:;">加入购物车</a><div class="sku_box"><select class="sku_select"><option value="0">型号选择</option></select></div></div><div class="imp_item"><a class="pic" target="_blank" title="兰蔻清滢柔肤水400ml" href="http://item.jumei.com/d150318p646884zc.html?from=ibar_view_recent_product"><img width="100" height="100" src="http://p4.jmstatic.com/product/000/646/646884_std/646884_100_100.jpg"></a><p class="tit"><a target="_blank" title="兰蔻清滢柔肤水400ml" href="http://item.jumei.com/d150318p646884zc.html?from=ibar_view_recent_product">兰蔻清滢柔肤水400ml</a></p><p class="price"><em>¥</em>299</p><a img="http://p4.jmstatic.com/product/000/646/646884_std/646884_100_100.jpg" type="deal" key="d150318p646884zc" class="imp-addCart" target="_blnak" href="javascript:;">加入购物车</a><div class="sku_box"><select class="sku_select"><option value="0">型号选择</option></select></div></div></div></div></div></script>',_login:'<script id="tpl_ibar_login" type="smcore"><div class="avatar_box" vm-mouseenter="openLogin" vm-mouseleave="hideLogin"><p class="avatar_imgbox"><img src="http://p0.jmstatic.com/product_report/default/avatar/avatar_small.png" alt="头像" width="62" height="62"></p><ul class="user_info"><li>用户名：JM135ACCE2090</li><li>级 别：普通会员</li></ul></div><div class="login_btnbox" vm-mouseenter="openLogin" vm-mouseleave="hideLogin"><a href="http://www.jumei.com/i/order/list" class="login_order" target="_blank">我的订单</a><a href="http://www.jumei.com/i/product/fav_products" class="login_favorite" target="_blank">我的收藏</a></div><s class="icon_arrow_white"></s><a href="javascript:;" class="ibar_closebtn" title="关闭" vm-click="hidePanel(20)"></a></script>',_recharge:'<script id="tpl_ibar_recharge" type="smcore"><a title="关闭" class="ibar_closebtn" href="javascript:;" vm-click="hidePanel(20)"></a><span class="ibar_loading_text">正在为您努力加载数据！</span><div class="ibar_plugin ibar_recharge_content" id="iBarRecharge"><div class="ibar_plugin_title"><span class="ibar_plugin_name">手机充话费</span></div><div class="ibar_plugin_content"><form class="ibar_recharge_form " method="get" target="_blank" action="//cart.jumei.com/m/forward/"><div style="*z-index: 3; *position: relative" class="ibar_recharge-field ibar_recharge-num"><label>号码</label><div class="ibar_recharge-input ibar_recharge-fl"><div class="ibar_recharge-iwrapper"><input type="text" autocomplete="off" placeholder="手机号码" name="hp" maxlength="13"></div><i title="查看充值历史" class="ibar_recharge-contact"></i><div class="ibar_recharge-tooltip" style="display: none;"><p class="no-phone ibar_pink">请填写您的手机号码</p><p class="phone-error ibar_pink">请填写正确的手机号码</p><p class="zoom-in ibar_pink"></p><ul class="phone-list"></ul><p class="no-history ibar_pink">您还没有充值记录</p></div></div></div><div style="*z-index: 2" class="ibar_recharge-field"><label>面值</label><div class="ibar_recharge-fl ibar_recharge-vwrapper"><p class="ibar_recharge-mod"><span class="ibar_recharge-val">100</span> 元</p><i class="ibar_recharge-arrow"></i><div class="ibar_recharge-vbox clearfix" style="display: none;"><ul><li class="selected"><span>100</span>元</li><li><span>200</span>元</li><li><span>300</span>元</li><li><span>500</span>元</li></ul><ul class="last-ul"><li><span>10</span>元</li><li><span>20</span>元</li><li><span>30</span>元</li><li><span>50</span>元</li></ul></div></div></div><div class="ibar_recharge-field ibar_recharge-pwrapper"><label>售价</label><div class="ibar_recharge-fl"><p><span class="ibar_pink sell-status"><span class="on-sell"><span class="ibar_recharge-price">98.70 ~ 99.80</span> 元</span><span class="sold-out">暂时缺货</span></span><span class="ibar_recharge-operator"></span></p><input type="hidden" value="" name="sku_no"><input type="hidden" value="" name="customers_price"><input type="hidden" value="" name="market_price"><input type="hidden" value="ibar_mobile_recharge" name="from"><input type="hidden" value="" name="province"><input type="hidden" value="" name="mall_id"></div></div><div class="ibar_recharge-btn"><input type="submit" value="立即充值"></div></form></div></div></script>',main:'<div id="iBar" class="ibar" vm-controller="global_ibar"><div class="ibar_main_panel" style="left: 0px;"><ul class="ibar_mp_center"><li class="mpbtn_login"><a href="javascript:;" vm-click="openLogin" vm-mouseleave="hidePanel(2000)"><s></s><span>登录</span></a></li><li class="mpbtn_cart"><a href="javascript:;" vm-click="openPanel(1)" vm-mouseleave="hidePanel(2000)"><s></s><span class="text">购物车</span><span class="cart_num">{{cartInfo.quantity}}</span></a></li><li class="mpbtn_asset"><a href="javascript:;" vm-mouseenter="showTips(-122,-92)" vm-mouseleave="hideTips(-122)" vm-click="openPanel(4)" vm-mouseleave="hidePanel(2000)"><s></s><span>我的财产</span></a><div class="mp_tooltip">我的财产 <s class="icon_arrow_right_black"></s></div></li><li class="mpbtn_favorite"><a href="javascript:;" vm-mouseenter="showTips(-122,-92)" vm-mouseleave="hideTips(-122)" vm-click="openPanel(2)" vm-mouseleave="hidePanel(2000)"><s></s><span>我的心愿单</span></a><div class="mp_tooltip">我的心愿单 <s class="icon_arrow_right_black"></s></div></li><li class="mpbtn_histroy"><a href="javascript:;" vm-mouseenter="showTips(-122,-92)" vm-mouseleave="hideTips(-122)" vm-click="openPanel(3)" vm-mouseleave="hidePanel(2000)"><s></s><span>我看过的</span></a><div class="mp_tooltip">我看过的 <s class="icon_arrow_right_black"></s></div></li><li class="mpbtn_recharge"><a href="javascript:;" vm-mouseenter="showTips(-122,-92)" vm-mouseleave="hideTips(-122)" vm-click="openPanel(5)" vm-mouseleave="hidePanel(2000)"><s></s><span class="text">充</span></a><div class="mp_tooltip">我要充值 <s class="icon_arrow_right_black"></s></div></li></ul><ul class="ibar_mp_bottom"><li class="mpbtn_qrcode"><a href="javascript:;" vm-mouseenter="showTips(-188,-168)" vm-mouseleave="hideTips(-188)" vm-click="hidePanel(20)"><s></s>手机聚美</a><div class="mp_qrcode"><img width="148" height="175" src="http://s0.jmstatic.com/templates/jumei/images/ibar/qrcode.png?v=0"><s class="icon_arrow_white"></s></div></li><li class="mpbtn_support"><a href="javascript:;" vm-mouseenter="showTips(-122,-92)" vm-mouseleave="hideTips(-122)" vm-click="hidePanel(20)"><s></s>客服中心</a><div class="mp_tooltip">客服中心 <s class="icon_arrow_right_black"></s></div></li><li id="gotop" class="mpbtn_gotop"><a href="javascript:;" class="btn_gotop" vm-mouseenter="showTips(-122,-92)" vm-mouseleave="hideTips(-122)" vm-click="goTop" vm-click-1="hidePanel(20)" style="visibility: visible;"><s></s>返回顶部</a><div class="mp_tooltip">返回顶部 <s class="icon_arrow_right_black"></s></div></li></ul></div><div class="ibar_tips_box" vm-include="tpl_tips" data-include-rendered="render" vm-mouseleave="hidePanel(2000)"></div><div class="ibar_login_box status_login" vm-include="tpl_login" data-include-rendered="render" vm-mouseleave="hidePanel(2000)"></div><div class="ibar_sub_panel" vm-include="tpl_panel" data-include-rendered="render" vm-mouseenter="openPanel()" vm-mouseleave="hidePanel(2000)"></div></div>'},t=function(a,i){var t;return t=a.create({initialize:function(){var a;return a=$("body"),this.tpl_main=$(i.main),this.tpl_login=$(i._login),this.tpl_cart=$(i._cart),this.tpl_asset=$(i._asset),this.tpl_favorite=$(i._favorite),this.tpl_history=$(i._history),this.tpl_recharge=$(i._recharge),this.tpl_main.appendTo(a),this.tpl_login.appendTo(a),this.tpl_cart.appendTo(a),this.tpl_asset.appendTo(a),this.tpl_favorite.appendTo(a),this.tpl_history.appendTo(a),this.tpl_recharge.appendTo(a)}})}(a,i)}();