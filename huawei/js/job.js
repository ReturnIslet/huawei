//搜索框弹窗
$(function() {
    $('.sousuo').click(function() {

        $('.search_history').css({
            display: "block"
        })
        return false;
    })
    $(document).click(function() {
        //console.log(1)
        $('.search_history').css({
            display: "none"
        })
    })

});

// 二级菜单
$(function() {
    $(".xnav>.xnav_lis>ul").on('mouseenter', 'li', function() {
        var index = $(this).index();
        $('.naver-sub>div').eq(index).show().siblings().hide();
        $('.naver-sub').slideDown().css({
            borderTop: '1px solid #ebebeb'
        });
    });
    $(".xnav").on('mouseleave', function() {
        $('.naver-sub').slideUp();
        return false;
    });
    $('.naver-sub>div').css({
        display: 'none'
    })
})


// 放大镜吸顶效果
$(function() {
    $(window).scroll(function() {
        // console.log($(document).scrollTop())
        if ($(document).scrollTop() < 150) {
            $('.p_data_fdj').removeClass('fdj_fixed')
            $('.p_data_fdj').removeClass('fdj_abs')
        }
        if ($(document).scrollTop() > 150 && $(document).scrollTop() < 400) {
            $('.p_data_fdj').addClass('fdj_fixed').removeClass('fdj_abs')
        }
        if ($(document).scrollTop() > 400) {
            $('.p_data_fdj').removeClass('fdj_fixed').addClass('fdj_abs')
        }
    })
})

// 商品参数选择点击边框变色
$(function() {
    // console.log($('.data_get>li').eq(2))
    //     // $('.add_bor_color>li').eq(2).addClass('bor_color')
    $('.add_bor_color').on('mouseenter', 'li', function() {
        $(this).css({
            borderColor: '#717171'
        })
        $(this).click(function() {
            $(this).addClass('bor_color').siblings().removeClass('bor_color').off('mouseleave');
        })
    })
    $('.add_bor_color').on('mouseleave', 'li', function() {
        // $('.add_bor_color>li').mouseleave(function() {
        $(this).css({
            borderColor: '#a4a4a4'
        })
    })
})

// 保障服务二级框
$(function() {
        var $a1 = $('.pv_teshu>li');
        $a1.hover(function() {
            // console.log($(this).index())
            _index = $(this).index();
            if (_index == 0) {
                $('.pv_ul3_li_a').css({ display: 'block' });
                $('.p_v_ul3_li_a').css({ display: 'block' });
                $('.p_v_ul3_li_a_3').css({ display: 'none' });
                $('.p_v_ul3_li_a>p').hover(function() {
                    $('.p_v_ul3_li_a_3').css({ display: 'inline-block' });
                    $('.p_v_ul3_li_a_2').css({
                        color: '#ca151d'
                    })
                }, function() {
                    $('.p_v_ul3_li_a_3').css({ display: 'none' });
                    $('.p_v_ul3_li_a_2').css({
                        color: '#3a3a3a'
                    })
                })
                return false;
            }
            if (_index == 1) {
                $('.pv_ul3_li_a1').css({ display: 'block' });
                $('.p_v_ul3_li_a1').css({ display: 'block' });
                $('.p_v_span3').css({ display: 'none' });
                $('.p_v_ul3_li_a1>p').hover(function() {
                    $('.p_v_span3').css({ display: 'inline-block' });
                    $('.p_v_span2').css({
                        color: '#ca151d'
                    })
                }, function() {
                    $('.p_v_span3').css({ display: 'none' });
                    $('.p_v_span2').css({
                        color: '#3a3a3a'
                    })
                })
            }
            if (_index == 2) {
                $('.pv_ul3_li_a2').css({ display: 'block' });
                $('.p_v_ul3_li_a2').css({ display: 'block' });
                $('.p_v_span6').css({ display: 'none' });
                $('.p_v_span8').css({ display: 'none' });
                $('.p_v_ul3_li_a2>p:eq(0)').hover(function() {
                    $('.p_v_span6').css({ display: 'inline-block' });
                    $('.p_v_span5').css({
                        color: '#ca151d'
                    })
                }, function() {
                    $('.p_v_span6').css({ display: 'none' });
                    $('.p_v_span5').css({
                        color: '#3a3a3a'
                    })
                })
                $('.p_v_ul3_li_a2>p:eq(1)').hover(function() {
                    $('.p_v_span8').css({ display: 'inline-block' });
                    $('.p_v_span7').css({
                        color: '#ca151d'
                    })
                }, function() {
                    $('.p_v_span8').css({ display: 'none' });
                    $('.p_v_span7').css({
                        color: '#3a3a3a'
                    })
                })
            }
            // return false;
        }, function() {
            if (_index == 0) {
                $('.pv_ul3_li_a').css({ display: 'none' });
                $('.p_v_ul3_li_a').css({ display: 'none' });
                return false;
            }
            if (_index == 1) {
                $('.pv_ul3_li_a1').css({ display: 'none' });
                $('.p_v_ul3_li_a1').css({ display: 'none' });
            }
            if (_index == 2) {
                $('.pv_ul3_li_a2').css({ display: 'none' });
                $('.p_v_ul3_li_a2').css({ display: 'none' });
            }
            // return false;
        })
    })
    // 保障服务二级框效果结束

// 分期免息二级框
$(function() {
    var flag = false;
    $('.z_installment_li>ul>li').mouseenter(function() {
        $(this).css({
            borderColor: 'rgb(113, 113, 113)'
        })
    })
    $('.z_installment_li>ul>li').click(function() {
        $(this).toggleClass('z_installment_li_red').siblings().removeClass('z_installment_li_red');
        // console.log($(this).attr('class') == 'z_installment_li_red')
        if (!flag || $(this).attr('class') == 'z_installment_li_red') {
            $('.z_installment_shoping>span').addClass('z_installment_shoping_span_op');
            flag = true;
        } else if (flag) {
            $('.z_installment_shoping>span').removeClass('z_installment_shoping_span_op');
            flag = false;
        }
        $(this).off('mouseenter').siblings().css({ borderColor: '#a4a4a4' });
        $(this).off('mouseleave').siblings().mouseenter(function() {
            $(this).css({
                borderColor: 'rgb(113, 113, 113)'
            })
        })
    })
    $('.z_installment_li>ul>li').mouseleave(function() {
        $(this).css({
            borderColor: '#a4a4a4'
        })
    })
})
$(function() {
        var flag = false;
        $('.h_installment_li>ul>li').mouseenter(function() {
            $(this).css({
                borderColor: 'rgb(113, 113, 113)'
            })
            $(this).click(function() {
                $(this).toggleClass('z_installment_li_red').siblings().removeClass('z_installment_li_red');
                if (!flag || $(this).attr('class') == 'z_installment_li_red') {
                    $('.h_installment_shoping>span').addClass('z_installment_shoping_span_op');
                    flag = true;
                } else if (flag) {
                    $('.h_installment_shoping>span').removeClass('z_installment_shoping_span_op');
                    flag = false;
                }
                // $('.h_installment_shoping>span').toggleClass('z_installment_shoping_span_op');
                $(this).off('mouseenter').siblings().css({ borderColor: '#a4a4a4' });
                $(this).off('mouseleave').siblings().mouseenter(function() {
                    $(this).css({
                        borderColor: 'rgb(113, 113, 113)'
                    })
                })
            })
        })
        $('.h_installment_li>ul>li').mouseleave(function() {
            $(this).css({
                borderColor: '#a4a4a4'
            })
        })
    })
    // 结束

// 商品数量加减
$(function() {
    var $num = $('.commodity_num input').val();
    $('.commodity_num input').on('input', function() {
        var $num_kong = $('.commodity_num input').val();
        if ($num_kong == "") {
            $('.commodity_num input').val(1);
        } else if ($num_kong > 999) {
            $('.commodity_num input').val(999);
            $num_kong = 999;
            console.log($num_kong)
        } else if ($num_kong > 1) {
            $('.commodity_num .num_minus').removeClass('disabled')
        }
        $num = $num_kong;
    });
    $('.commodity_num .num_plus').click(function() {
        $num++;
        $('.commodity_num input').val($num);
        $('.commodity_num .num_minus').removeClass('disabled')
    })
    $('.commodity_num .num_minus').click(function() {
        if ($num == 2 || $num == 1) {
            $('.commodity_num input').val(1);
            $('.commodity_num .num_minus').addClass('disabled')
            return;
        } else {
            $num--;
        }

        $('.commodity_num input').val($num);
    })
})

// 商品搭配板块切换
$(function() {
        $('.product_match_top a').click(function() {
            $(this).addClass('product_match_top_a').siblings().removeClass('product_match_top_a')
        })
    })
    // 商品详情板块切换
$(function() {
    $('.product_content_top a').click(function() {
        $(this).addClass('product_match_top_a').siblings().removeClass('product_match_top_a')
    })
})


// 页面详情跳转吸顶
$(function() {
    $('.p_c_t_h_con>p>a').click(function() {
        $(this).addClass('product_match_top_a').siblings().removeClass('product_match_top_a')
    })
    $(window).scroll(function() {
        if ($(document).scrollTop() > 1280) {
            $('.product_content_title_hide').css({ display: 'block' })
        } else {
            $('.product_content_title_hide').css({ display: 'none' })
        }
    })
})

// 页面底部导航左切换
$(function() {
    var $size = $('.liebiaoqiehuan li').length;
    var $kuang = $('.liebiaoqiehuan li').width();
    var $zongkuang = $('.liebiaoqiehuan').width();
    var index = 0;
    $('.btn-fqright').click(function() {
        $('.btn-fqleft').removeClass('xiaoshou')
        if (index == 9) {
            index = 9
            $('.btn-fqright').addClass('xiaoshou')
        } else {
            index++;
        }
        $('.liebiaoqiehuan').animate({
            left: -index * $kuang
        })
    })

    // 页面底部导航右切换
    $('.btn-fqleft').click(function() {
        if (index == 0 || index == 1) {
            index = 0
            $('.btn-fqleft').addClass('xiaoshou')
        } else {
            index--;
        }
        $('.liebiaoqiehuan').animate({
            left: -index * $kuang
        })
    })
})

// 底部微信图标显示
$(function() {

    $('.weixindiva').hover(function() {
        $('.weixingtu').css({
            display: 'block'
        })
    })
    $('.weixindiva').mouseleave(function() {
        $('.weixingtu').css({
            display: 'none'
        })
    })
})


// 右边悬浮工具栏

$(function() {
    $(".fh_top").hide();
    $(window).scroll(function() {
        if ($(window).scrollTop() > 1100) {
            $(".fh_top").fadeIn(200);
        } else {
            $(".fh_top").fadeOut(200);
        }
    })
    $(".fh_top").click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 1000)
        return false;
    })
})

// 点击加载更多
$(function() {
        $('.product_contant_botYin p a').click(function() {
            $('.product_contant_imgs').css({
                height: 'auto'
            })
            $('.product_contant_botYin').css({
                display: 'none'
            })
            $('#shouqi').css({
                display: 'block'
            })
        })
        $('#shouqi p a').click(function() {
            $('.product_contant_imgs').css({
                height: 2004
            })
            $('.product_contant_botYin').css({
                display: 'block'
            })
            $('#shouqi').css({
                display: 'none'
            })
        })

    })
    //放大镜一系列操作
$(function() {
    init();
    // 放大镜小图区按钮
    function btn() {
        var index = 0;
        var $w = $(".img_s_list>ul>li").width() + 2;
        var $list = $(".img_s_list>ul>li").length - 5;
        $('.data_img_s>.data_img_s_s_l').click(function() {
            if (index == 0) {
                index = 0;
            } else {
                index--;
            }
            $('.img_s_list>ul').animate({
                left: -index * $w
            })
        })
        $('.data_img_s>.data_img_s_s_r').click(function() {
            if (index == 3) {
                index = 3;
            } else {
                index++;
            }
            // console.log(index)
            $('.img_s_list>ul').animate({
                left: -index * $w
            })
        })
    }

    function getdata(data) {
        var ide = 0;
        var idex = 2;
        //版本选择
        $('#data_click').on('click', 'li', function() {
                ide = $(this).index();
                var aaa = $(this).children().text();
                $('.peizi_banben').text(aaa);
                $('.price_get').html(`<span>￥${data.versions[ide][2]}</span>`);

            })
            //颜色选择
        $('.data_get').on('click', 'li', function() {
                idex = $(this).index();
                var nnn = $(this).children().text();
                var simgstr = "";
                for (var i = 0; i < data.spic[idex].length; i++) {
                    simgstr += `<li style="width:70px,hegith:70px">
                    <a href=""><img src="${data.spic[idex][i]}" alt=""></a>
                </li>`
                }
                $('.product_t_name').replaceWith(`<span class="product_t_name">${data.title[idex]}</span>`);
                $('.price_get').html(`<span>￥${data.versions[ide][idex]}</span>`);
                $('.me_h').html(`<h3>${data.title[idex]}</h3>`);
                $('.img_s_list ul').html(simgstr);
                $('.img_s_list ul li').eq(0).addClass('img_s_list_red');
                $('.peizi_color').text(nnn);
                $('.fdj_xiaotu').html(`<img src="${data.zhongtu[idex][0]}" alt="">`)
                $('.fdj_img_xxl').html(`<img src="${data.datu[idex][0]}" alt="">`)
                $('.product-id').html(`<i>${data.id[idex]}</i>`)
            })
            // 中图区域和大图图片切换
        $(".img_s_list>ul").on('mouseenter', 'li', function() {
            var imgi = $(this).index();
            // console.log($(this).index())
            $(this).addClass('img_s_list_red').siblings().removeClass('img_s_list_red');
            $('.fdj_xiaotu').html(`<img src="${data.zhongtu[idex][imgi]}" alt="">`)
                // console.log(idex, imgi)
            $('.fdj_img_xxl').html(`<img src="${data.datu[idex][imgi]}" alt="">`);
        })
    }
    //初始页面加载
    function firstinit(res) {
        var clArr = "";
        var simgArr = "";
        $.each(res.color, function(i, n) {
            clArr += `<li>
                    <a href="javascript:;">
                        <img src="${n[1]}" alt="">${n[0]}</a>
                </li>`
        })
        var name = res.title[2];
        str = `<span class="product_t_name">${name}</span>`;
        str2 = `<h3>${name}</h3>`;
        str3 = `<span>${res.versions[0][2]}</span>`;
        // str4 = `<p class="fdj_xiaotu"><img src="${res.zhongtu[2][0]}" alt=""></p>`;
        for (var i = 0; i < res.spic[2].length; i++) {
            simgArr += `<li>
                    <a href=""><img src="${res.spic[2][i]}" alt=""></a>
                </li>`
        }
        $('.p_data_top').append(str);
        $('.me_h').append(str2);
        $('.price_get').append(str3);
        $('.data_get').append(clArr);
        $('.data_get>li').eq(2).addClass('bor_color');
        $('.img_s_list ul').append(simgArr);
        $('.img_s_list ul li').eq(0).addClass('img_s_list_red');
        $('.data_img_m').append(`<p class="fdj_xiaotu"><img src="${res.zhongtu[2][0]}" alt=""></p>`);
        $('.fdj_img_xxl').append(`<img src="${res.datu[2][0]}" alt="">`);
        $('.me_serve .p_id').append(`<span class="product-id"><i>${res.id[2]}</i></span>`)
    }
    // 时间戳
    function jtime() {
        var data_w = new Date();
        var time_w = data_w.getTime();
        var num_w = Math.random() * 10;
        var data_time = `${time_w}%${num_w}`
        return data_time;
    }

    function init() {
        $.ajax({
            type: "get",
            url: "./json/p30pro_con.json?" + jtime(),
            dataType: "json",
            success: function(res) {
                firstinit(res);
                getdata(res);
                btn();
                fdj();
                jionCar();
            }
        });
    }
    // 放大镜操作
    function fdj() {
        var shadeW = $('.data_img_m>.shade').width();
        var shadeH = $('.data_img_m>.shade').height();
        var bimgW = $('.data_img_m>.fdj_img_xxl>img').width();
        var mimgW = $('.data_img_m>p>img').width();
        $('.p_d_b_left>.data_img_m').mousemove(function(e) {
            $('.data_img_m>.fdj_img_xxl').css({ display: "block" });
            $('.data_img_m>.shade').css({ display: "block" });
            var l = e.pageX - $(this).offset().left - shadeW / 2;
            var t = e.pageY - $(this).offset().top - shadeH / 2;
            var maxl = $(this).width() - shadeW;
            var maxt = $(this).height() - shadeH;
            l = l < 0 ? 0 : (l > maxl ? maxl : l);
            t = t < 0 ? 0 : (t > maxt ? maxt : t);
            $('.data_img_m>.shade').css({
                top: t,
                left: l
            })
            $('.data_img_m>.fdj_img_xxl>img').css({
                top: -t * (bimgW / mimgW),
                left: -l * (bimgW / mimgW)
            })
        })
        $('.p_d_b_left>.data_img_m').mouseout(function() {
            $('.data_img_m>.fdj_img_xxl').css({ display: "none" });
            $('.data_img_m>.shade').css({ display: "none" });
        })
    }



    // 加入购物车和渲染顶部小购物车
    function jionCar() {
        //设置本地存储
        var util = {
            getStorage: function() {
                return JSON.parse(localStorage.getItem('car') || '[]');
            },
            setStorage: function(json) {
                //json是数组类型
                localStorage.setItem('car', JSON.stringify(json))
            }
        }
        rednum();
        firsti();

        function firsti() {
            if (util.getStorage().length > 0) {
                //首先根据本地存储信息渲染购物车
                $(".s_car_li").css("display", "none");
                $(".s_car_goods").css("display", "block");
                renderTable($('.goodsList'));
                sumpirce();
            } else {
                $(".s_car_goods").css("display", "none");
                $(".s_car_li").css("display", "block");
            }
        }

        function sumpirce() {
            var productList = util.getStorage();
            var sum = 0;
            productList.forEach(function(product) {
                sum += product.price * product.num;
            })
            $('#totalprice').html(`<i>¥&nbsp;${sum}.00</i>`)
        }
        $(".p30pro_place_r").on('click', '.join_car', function() {
            var product = {
                id: $('.product-id').text(),
                img: $('.img_s_list ul li:eq(0) a img').attr('src'),
                name: $('.product_t_name').text(),
                price: $('.price_get span').text(),
                num: $('.commodity_num input').val()
            }
            addProduct(product);
            firsti();
            rednum();
            sumpirce();
            renderTable($('.goodsList'));
            // alert("加入购物车成功");
        })

        function addProduct(product) {
            //商品列表数组
            var productList = util.getStorage();
            if (productList.length) {
                //如果该商品在购物车已经存在,数量加+1
                for (var i = 0; i < productList.length; i++) {
                    if (productList[i].id == product.id) {
                        //如果商品id在商品列表中有重复的,重复的商品数量加1
                        if ($('.commodity_num input').val() > 1) {
                            productList[i].num = (productList[i].num * 1) + ($('.commodity_num input').val() * 1)
                            util.setStorage(productList);
                            return;
                        } else {
                            productList[i].num++;
                            util.setStorage(productList);
                            return;
                        }
                    }
                }
                //如果for循环完了都没有退出函数,说明没有一个id相同的,就把该商品加入新数组
                productList.push({...product, num: 1 });
                util.setStorage(productList);
            } else if($('.commodity_num input').val() > 1){
                productList.push({...product, num: Number($('.commodity_num input').val()) });
                util.setStorage(productList);
            }else{
                productList.push({...product, num:1});
                util.setStorage(productList);
            }

        }

        function renderTable(dom) {
            //获取购物车最新数据
            var productList = util.getStorage();
            //在购物车显示最新的购物车信息
            var str = "";
            productList.forEach(function(product) {
                str += `<li class="goodsList_item">
                <div class="pro-info clearfix">
                    <div class="p-choose">
                        <input type="checkbox" class="checkbox" checked="checked">
                    </div>
                    <div class="p-img">
                        <a href=""><img src="${product.img}" alt=""></a>
                    </div>
                    <div class="p-name">
                        <a href="">${product.name}</a>
                    </div>
                    <div class="p-dec"></div>
                    <div class="p-tat">
                        <div class="p-price">
                            <b>￥&nbsp;${product.price}</b>
                            <strong>
                                <em>x</em>
                                <span>${product.num}</span>
                            </strong>
                        </div>
                    </div>
                </div>
            </li>`;
            })
            dom.html(str);
        };

        function rednum() {
            var productList = util.getStorage();
            var num = 0;
            if (productList.length == 0) {
                $('.hongse').css({
                    display: 'none'
                })
                return;
            }
            productList.forEach(function(product) {
                num += product.num;
            })
            $('.hongse').css({
                display: 'block'
            })
            $('.hongse').html(`<em>${num}</em>`);
        }
    }
})