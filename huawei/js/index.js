//搜索框弹窗
$(function() {
    $('.sousuo').click(function() {

        $('.search_history').css({
            display: "block"
        })
        $(".sWord").css({
            display: "none"
        })
        return false;
    })
    $(document).click(function() {
        $('.search_history').css({
            display: "none"
        })
        $(".sWord").css({
            display: "block"
        })
    })


});
//轮播图1
$(function() {
        var t;
        var index = 0;
        t = setInterval(auto, 3000)
            //自动轮播
        function auto() {
            index++;
            if (index > 5) {
                index = 0
            }
            $(".box02 .nav-list li").eq(index).addClass("active").siblings().removeClass("active");
            $(".box a").eq(index).fadeIn(1000).siblings().fadeOut(1000);

        }
        //移入 左右按钮显示 轮播停止 移出隐藏轮播开启
        $("#banner").mouseover(function() {
            $(".but-prev").show();
            $(".but-next").show();
            clearInterval(t);
        })
        $("#banner").mouseout(function() {
                t = setInterval(auto, 3000)
                $(".but-prev").hide();
                $(".but-next").hide();

            })
            //移入小圆点显示对于图片
        $(".box02 .nav-list li").mouseover(function() {
                $(this).addClass("active").siblings().removeClass("active");
                index = $(this).index();
                $(".box a").eq(index).fadeIn(1000).siblings().fadeOut(1000);

            })
            //点击左右按钮
        $(".but-next").click(function() {
            index++;
            if (index > 5) {
                index = 0;
            }
            $(".box02 .nav-list li").eq(index).addClass("active").siblings().removeClass("active");
            $(".box a").eq(index).fadeIn(1000).siblings().fadeOut(1000);
            return false;
        })
        $(".but-prev").click(function() {
            index--;
            if (index < 0) {
                index = 5;
            }
            $(".box02 .nav-list li").eq(index).addClass("active").siblings().removeClass("active");
            $(".box a").eq(index).fadeIn(1000).siblings().fadeOut(1000);
            return false;

        })

    })
    //二级菜单
$(function() {
        $(".s_item").mouseover(function() {
            $(this).parent().addClass("act");
            $(this).addClass("act").siblings().removeClass("act");
            $(this).children(".panels").show();
            $(this).find("a").css({
                color: "#5e5e5e"
            })

        })
        $(".s_item").mouseout(function() {
            $(this).removeClass("act").siblings().removeClass("act");
            $(this).parent().removeClass("act");
            $(this).children(".panels").hide();
            $(this).find("a").css({
                color: ""
            })

        })


    })
    //公告小自动轮播
$(function() {
        var $li = $(".notice_list").children("li");
        var $timer = setInterval(play, 300);

        function play() {
            $(".notice_list").animate({
                marginTop: -215
            }, 8500, function() {
                $(".notice_list").css({
                    marginTop: 0
                })
            })
        }

        $(".t_right").mouseover(function() {
            clearInterval($timer)
        })
        $(".t_right").mouseout(function() {
            $timer = setInterval(play, 300);
        })


    })
    //手动轮播精品推荐
$(function() {



        $(".btn-right").click(function() {

            $(".btn-left").show();
            $(".ul_sj").css({
                transform: "translate3d(-1215px, 0px, 0px)"
            })
            $(".btn-right").hide()
        })
        $(".btn-left").click(function() {

            $(".btn-left").hide();
            $(".btn-right").show();
            $(".ul_sj").css({
                transform: "translate3d(0px, 0px, 0px)"
            })
        })


    })
    //精品推荐轮播
$(function() {
        var t;
        var index = 0;
        t = setInterval(auto, 3000)

        function auto() {
            index++;
            if (index > 6) {
                index = 0
            }
            $(".xiaoyuandian .nav-list li").eq(index).addClass("active").siblings().removeClass("active");
            $(".s_banner a").eq(index).fadeIn(1000).siblings().fadeOut(1000);
        }
        $(".s_banner").mouseover(function() {
            clearInterval(t);
        })
        $(".s_banner").mouseout(function() {
            t = setInterval(auto, 3000)

        })
        $(".xiaoyuandian .nav-list li").mouseover(function() {
            $(this).addClass("active").siblings().removeClass("active");
            index = $(this).index();
            $(".s_banner a").eq(index).fadeIn(1000).siblings().fadeOut(1000);
        })


    })
    //智能穿戴手动轮播
$(function() {



        $(".goods-content .btn-right-2").click(function() {
            $(".btn-left-2").show();
            $(".ul_sj-2").css({

                transform: "translate3d(-404px, 0px, 0px)"
            })
            $(".btn-right-2").hide()
        })
        $(".goods-content .btn-left-2").click(function() {

            $(".btn-left-2").hide();
            $(".btn-right-2").show();
            $(".ul_sj-2").css({
                transform: "translate3d(0px, 0px, 0px)"
            })
        })


    })
    //智能家居手动轮播
$(function() {
        var index = 0;
        $(".goods-content-2 .btn-right-3").click(function() {
            if (index == 1) {
                $(".btn-right-3").hide();
            }
            if (index == 2) {

                index = 2;

            } else {
                index++
            }
            $(".btn-left-3").show();
            $(".ul_sj-3").css({
                left: -index * 1210
            })
        })
        $(".goods-content-2 .btn-left-3").click(function() {

            if (index == 1) {
                $(".btn-left-3").hide();
                $(".btn-right-3").show();
            }
            if (index == 0 || index == 1) {

                index = 0;

            } else {
                index--
            }
            $(".ul_sj-3").css({
                left: -index * 1210
            })
        })


    })
    //热门配件手动轮播
$(function() {
        var index = 0;
        $(".goods-content-3 .btn-right-4").click(function() {
            if (index == 1) {
                $(".btn-right-4").hide();
            }
            if (index == 2) {

                index = 2;

            } else {
                index++
            }
            $(".btn-left-4").show();
            $(".ul_sj-4").css({
                left: -index * 1210
            })
        })
        $(".goods-content-3 .btn-left-4").click(function() {

            if (index == 1) {
                $(".btn-left-4").hide();
                $(".btn-right-4").show();
            }
            if (index == 0 || index == 1) {

                index = 0;

            } else {
                index--
            }
            $(".ul_sj-4").css({
                left: -index * 1210
            })
        })


    })
    //生态精品手动轮播
$(function() {
        var index = 0;
        $(".goods-content-4 .btn-right-5").click(function() {
            if (index == 1) {
                $(".btn-right-5").hide();
            }
            if (index == 2) {

                index = 2;

            } else {
                index++
            }
            $(".btn-left-5").show();
            $(".ul_sj-5").css({
                left: -index * 1210
            })
        })
        $(".goods-content-4 .btn-left-5").click(function() {

            if (index == 1) {
                $(".btn-left-5").hide();
                $(".btn-right-5").show();
            }
            if (index == 0 || index == 1) {

                index = 0;

            } else {
                index--
            }
            $(".ul_sj-5").css({
                left: -index * 1210
            })
        })


    })
    //精品配件
$(function() {
        $(".goods-content-5 .btn-right-6").click(function() {
            $(".btn-left-6").show();
            $(".ul_sj-6").css({

                transform: "translate3d(-606px, 0px, 0px)"
            })
            $(".btn-right-6").hide()
        })
        $(".goods-content-5 .btn-left-6").click(function() {

            $(".btn-left-6").hide();
            $(".btn-right-6").show();
            $(".ul_sj-6").css({
                transform: "translate3d(0px, 0px, 0px)"
            })
        })


    })
    //底部
    // 左切换
$(function() {
        var $size = $('.liebiaoqiehuan li').length;
        var $kuang = $('.liebiaoqiehuan li').width();
        var $zongkuang = $('.liebiaoqiehuan').width();
        var index = 0;
        // console.log($zongkuang)
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

        // 右切换

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
    //悬浮工具
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
    //菜单导航
$(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 2100 && $(window).scrollTop() < 8550) {
                $(".caidan").addClass("tran0")
            } else {
                $(".caidan").removeClass("tran0")
            }
            if ($(window).scrollTop() > 2100 && $(window).scrollTop() < 2880) {
                $(".a1").parent().addClass("hover").siblings().removeClass("hover");
            } else if ($(window).scrollTop() > 2880 && $(window).scrollTop() < 3546) {
                $(".a2").parent().addClass("hover").siblings().removeClass("hover");
            } else if ($(window).scrollTop() > 3546 && $(window).scrollTop() < 4324) {
                $(".a3").parent().addClass("hover").siblings().removeClass("hover");
            } else if ($(window).scrollTop() > 4324 && $(window).scrollTop() < 5213) {
                $(".a4").parent().addClass("hover").siblings().removeClass("hover");
            } else if ($(window).scrollTop() > 5213 && $(window).scrollTop() < 6213) {
                $(".a5").parent().addClass("hover").siblings().removeClass("hover");
            } else if ($(window).scrollTop() > 6213 && $(window).scrollTop() < 7102) {
                $(".a6").parent().addClass("hover").siblings().removeClass("hover");
            } else if ($(window).scrollTop() > 7102 && $(window).scrollTop() < 7991) {
                $(".a7").parent().addClass("hover").siblings().removeClass("hover");
            } else if ($(window).scrollTop() > 7991 && $(window).scrollTop() < 8550) {
                $(".a8").parent().addClass("hover").siblings().removeClass("hover");
            }
        })
        $(".a1").click(function() {

            $("body,html").animate({
                scrollTop: 2121
            }, 1000)
            $(this).parent().addClass("hover").siblings().removeClass("hover");
            return false;
        })
        $(".a2").click(function() {

            $("body,html").animate({
                scrollTop: 3086
            }, 1000)
            $(this).parent().addClass("hover").siblings().removeClass("hover");
            return false;
        })
        $(".a3").click(function() {

            $("body,html").animate({
                scrollTop: 3754
            }, 1000)
            $(this).parent().addClass("hover").siblings().removeClass("hover");
            return false;
        })
        $(".a4").click(function() {

            $("body,html").animate({
                scrollTop: 4420
            }, 1000)
            $(this).parent().addClass("hover").siblings().removeClass("hover");
            return false;
        })
        $(".a5").click(function() {

            $("body,html").animate({
                scrollTop: 5367
            }, 1000)
            $(this).parent().addClass("hover").siblings().removeClass("hover");
            return false;
        })
        $(".a6").click(function() {

            $("body,html").animate({
                scrollTop: 6301
            }, 1000)
            $(this).parent().addClass("hover").siblings().removeClass("hover");
            return false;
        })
        $(".a7").click(function() {

            $("body,html").animate({
                scrollTop: 7278
            }, 1000)
            $(this).parent().addClass("hover").siblings().removeClass("hover");
            return false;
        })
        $(".a8").click(function() {

            $("body,html").animate({
                scrollTop: 8345
            }, 1000)
            $(this).parent().addClass("hover").siblings().removeClass("hover");
            return false;
        })
    })
    //ajax请求json
$(function() {
        $.ajax({
            url: "js/list.json",
            type: "get",
            cache: false,
            dataType: "json",
            success: function(date) {
                var result = "";
                $.each(date, function(index, item) {
                    result += '<li class="sj_right-li" code="' + item.code + '"><a href="" class="sj_right-a"><p class="sj_img"><img src="' + item.imgurl + '" alt=""></p><div class="sj_name">' + item.name + '</div><P class="sj_huodong">' + item.huodong + '</P><p class="sj_qian">' + item.price + '</p><p class="grid-tips"><i class="iii">'
                    if (item.thumb) {
                        result += '<span style="background: #68BEFF">' + item.thumb + '</span>';
                    }
                    result += '</i></p></a></li>'

                })
                $(".sj_right_ul-1").html(result);
            }
        })
    })
    //购物车