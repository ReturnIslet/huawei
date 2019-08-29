$(function(){
    //注册点击切换
    var $re_ph = $('.re_con_t a');
    $re_ph.click(function(){
        //头部文字颜色切换
        $(this).addClass('cf_b40').siblings().removeClass('cf_b40');
    });
    
});
// 下拉菜单
$(function(){
    var flag = 0;
    for(let i =0,len = $('.s_xjt').length;i < len;i++){
        $('.s_xjt').eq(i).click(function(){
            if (flag == 0) {
                $('.stat_botn').eq(i).css('display','block');
                flag++;
            }else{
                $('.stat_botn').eq(i).css('display',' none');
                flag = 0;
            }
            return false;
        })
    }
   //点击其他地方隐藏各种元素
    $(document).click(function(){
        $('.stat_botn').css('display',' none');
        flag = 0;
    })

    //点击li列表里的文字改变不隐藏元素的文本

})

//动态加载下拉li;
$(function(){
    var $date = new Date();
    var $year = $date.getFullYear();
    var $li = '',$li_m = '',$li_d = '';
    var $ul = $('.ar_date .list_cont');
    for (var $day = 1; $day<= 31; $day++) {
        let _y = $year--
        // console.log(_d);
        $li += 
        `<li>${_y}</li>
        <div class="ls_x">
            <div class="x_li"></div>
        </div>`
        $li_d += 
        `<li>${$day}</li>
        <div class="ls_x">
            <div class="x_li"></div>
        </div>`
    }
    for(var m = 1; m<=12;m++){
        $li_m += 
        `<li>${m}</li>
        <div class="ls_x">
            <div class="x_li"></div>
        </div>`  
    }
    //年
    $ul.eq(0).append($li);
    //月
    $ul.eq(1).append($li_m)
    //日
    $ul.eq(2).append($li_d);
    // 点击下拉框
    //国家
    $(".stat_botn .list_cont:eq(0)>li").on("click", function () {
        $(".stat_txt").text($(this).text());
    });
    // 手机号地区
    $(".list_cont:eq(1)>li").on("click", function () {
        $(".in_txt").text($(this).text());
    });
    //年月日
    $(".list_cont:eq(2)>li").on("click", function () {
        var $sp_y = $(".dir_text:eq(0)").text($(this).text());
        $('.year').val($sp_y.text());
    });
    $(".list_cont:eq(3)>li").on("click", function () {
        var $sp_m = $(".dir_text:eq(1)").text($(this).text());
        $('.month').val($sp_m.text());
    });
    $(".list_cont:eq(4)>li").on("click", function () {
        var $sp_d =  $(".dir_text:eq(2)").text($(this).text());
        $('.day').val($sp_d.text());
    });
})
//正则判断
$(function(){
    // 手机号
    $('#order_number').blur(function(){
        var $ph_v =  $('#order_number').val();
        var $ph_reg = new RegExp(/^(1|\+861)[3-8]{1}\d{9}$/,'g');
        if($ph_v == ""){
            $('.cf_332').eq(0).css('display','none');

        }else if (!$ph_reg.test($ph_v)) {
            $('.cf_332').eq(0).css('display','block');
            $('.cf_332').eq(0).text("请输入正确的手机号码格式");
        }
        return false;
    })
    $('#order_number').focus(function(){
        $('.cf_332').eq(0).css('display','none').text("");
        return false;
    })
    //密码
    $('#order_password').blur(function(){
        var $pass_v =  $('#order_password').val();
        var $pa_reg = new RegExp(/(\w|\d){8}/,'i');
        if($pass_v == ""){
            $('.cf_332').eq(2).css('display','block').text("请输入密码");
        }else if(!$pa_reg.test($pass_v)){
            $('.cf_332').eq(2).css('display','block').text("密码要有8位数字和字母组成");
        }
    })
    $('#order_password').focus(function(){
        $('.cf_332').eq(2).css('display','none').text("");
    })
    //确认密码
    $('#confirm_pawrd').blur(function(){
        var $con_v =  $('#confirm_pawrd').val();
        var $pass_v =  $('#order_password').val();
        if($con_v != $pass_v){
            $('.cf_332').eq(3).css('display','block').text("两次输入的密码不一致");

        }else if($con_v == ''){
            $('.cf_332').eq(3).css('display','none').text("");
        } 
    })
    $('#confirm_pawrd').focus(function(){
        $('.cf_332').eq(3).css('display','none').text("");
    })
})
//点击提交
$(function(){
    // 时间戳
    function jtime(){
        var data_w = new Date();
        var time_w = data_w.getTime();
        var num_w = Math.random()*10;
        var data_time = `${time_w}%${num_w}`
        return data_time;
    }
    //如果发现页面有cookie,无需用户填写登陆信息,自动发ajax验证
    if(document.cookie){
        var username = getCookie('username');
        var password = getCookie('password');
        if(username&&password){
            //发送请求,目的是为了把cookie携带过去,真正的信息都在cookie里面
            $.ajax({
                type: 'post',
                url: "./php/register.php?"+jtime(),
                data: $str,
                dataType: 'json',
                success: function (res) {
                    if (res == 1) {
                        alert("该用户名已存在,请更换账号再注册");
                    } else if (res.code == 200) {
                        if(alert(res.message)){
                            location.href="./index.html";
                        }
                    } else if (res.code == -1) {
                        alert(res.message);
                    }
                }
            });
        }
    }
    // 点击提交
    $('.btn_reg').on('click',function() {
        var $pass_v = $('#order_password').val();
        var $ph_v = $('#order_number').val();
        var $cf_v = $('#confirm_pawrd').val();
        var $ye_v = $('.dir_yeardata .dir_text').text();
        var $mo_v = $('.dir_monthdata>.dir_text').text();
        var $da_v = $('.dir_daydata>.dir_text').text();
        var $str=`username=${$ph_v}&password=${$pass_v}&year=${$ye_v}&month=${$mo_v}&date=${$da_v}`;
        
        var flag = 0;
        // console.log($cf_txt);
        if($pass_v  == '' || $ph_v == '' || $cf_v == ''){
            flag = 1;
        }
        if(!$('.cf_332').text() == ''){
            //不满足正则时不允许发送请求
            flag = 1;
        }
        if(flag == 0){
            $.ajax({
                type: 'post',
                url: "./php/register.php?"+jtime(),
                data: $str,
                dataType: 'json',
                success: function (res) {
                    if (res == 1) {
                        alert("该用户名已存在,请更换账号再注册");
                    } else if (res.code == 200) {
                        if(alert(res.message)){
                            location.href="./index.html";
                        }
                    } else if (res.code == -1) {
                        alert(res.message);
                    }
                }
            });
        }
    })

    
})
