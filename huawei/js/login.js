$(function(){
    //页面加载时获取localstorage中的数据
    function getStorage() {
        if (localStorage.getItem("account_t")) {
            var _json = JSON.parse(localStorage.getItem("account_t"));
            $("#user_name").val(_json.username);
            $("#pass_word").val(_json.password);
        } else {
            $("#user_name").val('');
            $("#pass_word").val('');
        }
    }
    getStorage();

    //登录点击切换
    var $ac = $('.ac_h span');
    $ac.click(function(){
        //头部文字颜色切换
        $(this).addClass('c_b40').siblings().removeClass('c_b40');
        if ( $ac.eq(1).hasClass("c_b40") ){
            $('#ac_ewm').css('display','block');
            $('.ac_b1').css('display','none');
        }else{
            $('#ac_ewm').css('display','none'); 
            $('.ac_b1').css('display','block');
        }
    });
    $('.ewm_m1').hover(function(){
        $('.ewm_img1').animate({left: '20px'},1000);
        $('.ewm_img2').animate({opacity: '1'},1000);
        
    },function(){
        $('.ewm_img1').animate({left: '112px'},1000);
        $('.ewm_img2').animate({opacity: '0'},1000);
    })
    
})
//登录功能
//需求分析:1.点击时发送ajax请求链接后台数据库,进行数据库的查询执行,判断是否存在账户,存在则使用js语句实现跳转主页(location.href),没有则在页面中输出提示
$(function(){
    // 时间戳
    function jtime(){
        var data_w = new Date();
        var time_w = data_w.getTime();
        var num_w = Math.random()*10;
        var data_time = `${time_w}%${num_w}`
        return data_time;
    }
    $('.ac_button').on('click',function(){
        console.log($('.ac_b1 li input').serialize());
        
        var flag = 0;
        //判断账号或者密码是否为空
        if ($("#user_name").val() == "") {
            $(".ac_inner").html("<i class='iconfont iconjinggao'></i>请输入您的账号");
            flag = 1;
        }else if ($("#pass_word").val() == "") {
            $(".ac_inner").html("<i class='iconfont iconjinggao'></i>请输入您的密码");
            flag = 1;
        }
        else{
            $(".ac_inner").text("");
            if (flag == 0) {
                $.ajax({
                    type: 'post',
                    url: './php/login.php?'+jtime(),
                    data: `${$('.ac_b1 li input').serialize()}`,
                    dataType: 'json',
                    success: function (res) {
                        if (res == 1) {
                            alert("登录成功");
                            //登录成功后清除账号框中的数据
                            $('input').val("");
                            if(confirm("是否返回首页呢？")){
                                location.href="./index.html";
                            }
                        } else {
                             alert("登录失败,或账号不存在,请注册");
                            //登录失败后清除账号框中的数据
                            $('.ac_b1 li input').val("");
                        }
                    }
                });
            }
        }
    })
})
//记住勾选项
$(function(){
   $('#remember_name').click(function(){
        if($('#remember_name[type = "checkbox"]').prop('checked') == true){
            $('label i').addClass('check_btn_on').removeClass('check_btn_off');
        }else{
            $('label i').addClass('check_btn_off').removeClass('check_btn_on');
        }
   })
   
})
$(function(){
    var flag = 0;
    //点击更多显示隐藏菜单栏
    $('.ac_v').click(function(){
        if (flag == 0) {
            $('.hiddelist').show();
            flag++;
        }else{
            $('.hiddelist').hide();
            flag = 0;
        }
        return false;

    })
    $(document).click(function(){
        $('.hiddelist').hide();
        flag = 0;
    })
})