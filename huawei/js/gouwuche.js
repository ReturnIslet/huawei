$(function () {
    // 底部轮播图
    $('.spanrigth').click(function () {
        $('.xianshitu').animate({
            'left': '-222'
        })
        $('.spanrigth').addClass('xiaoshou')
        $('.spanleft').removeClass('xiaoshou')
    });

    $('.spanleft').click(function () {
        //console.log(1);
        $('.xianshitu').animate({
            'left': '0'
        })
        $('.spanleft').addClass('xiaoshou')
        $('.spanrigth').removeClass('xiaoshou')

    })
})
// 列表切换
// 左切换
$(function () {
    var $size = $('.liebiaoqiehuan li').length;
    var $kuang = $('.liebiaoqiehuan li').width();
    var $zongkuang = $('.liebiaoqiehuan').width();
    var index = 0;
    // console.log($zongkuang)
    $('.btn-fqright').click(function () {
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

    $(function () {
        $('.btn-fqleft').click(function () {
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
})

// 底部微信图标显示
$(function () {

    $('.weixindiva').hover(function () {
        $('.weixingtu').css({
            display: 'block'
        })
    })
    $('.weixindiva').mouseleave(function () {
        $('.weixingtu').css({
            display: 'none'
        })
    })
})


//购物车功能

// 全选全不选

// var all=document.getElementsByTagName("all")[0];
// var vam=document.getElementsByTagName("vam");
$('.all').on('click',function(){
    for(var i=0;i<$('.vam').length;i++){
        $('.vam')[i].checked=this.checked;
    }
})
    

for(var i=0;i<$('.vam').length;i++){
    $('.vam')[i].onclick=function(){
        var flag=true;
        for(var j=0;j<$('.vam').length;j++){
            if(!$('.vam')[j].checked){
                flag=false;
                break;
            }
        }
        if(flag){
            all.checked=true;
        }else{
            all.checked=false;
        }
    }
}


var util = {
    getStorage: function () {
        return JSON.parse(localStorage.getItem('car') || '[]');
    },
    setStorage: function (json) {
        //json是数组类型
        localStorage.setItem('car', JSON.stringify(json))
    }
}
if (util.getStorage().length > 0) {
    //首先根据本地存储信息渲染购物车
    $(".main1").css("display", "none");
    renderTable(document.querySelector('.car-all'));
} else {
    $(".footercar").css("display", "none");
    $(".main1").css("display", "block");
}

//添加点击删除按钮,删除该商品事件
function removeProductEvent(dom) {
    $('.car-details').on('click','.dle',function(){
        var id =  $(this).parent().children().eq(2).children().eq(0).text();
        removeProduct(id);
        renderTable(dom);
    })
}
//添加点击+,-按钮,改变该商品数量事件
function addProductNumEvent(dom) {
    //获取所有+按钮
    $('.car-all .car-details').on('click','.addpro',function(){
        var id = $(this).parent().children().eq(0).text();
        changeProductNum('add', id);
        // $(this).parent().children().eq(0).text();
        renderTable(dom);
        
    })
}
function cutProductNumEvent(dom) {
    //获取所有-按钮
    $('.car-all .car-details').on('click','.cutpro',function(){
        var id = $(this).parent().children().eq(0).text();
        changeProductNum('cut', id);
        renderTable(dom);
    })
}
function changeProductNum(type, id) {
    var changeNum = {
        'add': function (id) {
            //获取本地存储中所有商品的列表
            var productList = util.getStorage();
            //把商品id和传入id相同的商品的num加1
            productList.forEach(function (product) {
                if (product.id == id) {
                    product.num++;
                }
            });
            //同步本地存储
            util.setStorage(productList);
        },
        "cut": function (id) {
            //获取本地存储中所有商品的列表
            var productList = util.getStorage();
            //把商品id和传入id相同的商品的num减1
            productList.forEach(function (product) {
                if (product.id == id) {
                    product.num--;
                    console.log(product.num)
                    if(product.num<1){
                        product.num=1;
                    }
                }
                    
            });
            //本地存储
            util.setStorage(productList);
        }
    };
    changeNum[type](id)
}

function removeProduct(id) {
    //根据id去找本地存储中id相同的那个商品,然后移除
    var productList = util.getStorage();
    productList.forEach(function (product, index) {
        if (product.id == id) {
            productList.splice(index, 1);
            //同步本地存储
            util.setStorage(productList);
            return;
        }
    })
}


function renderTable(dom) {
    //获取购物车最新数据
    var productList = util.getStorage();
    //在购物车显示最新的购物车信息
    var str ="";
    productList.forEach(function (product) {
        
        str += `<div class="car-details clearfix">
        <input type="checkbox" class="vam">
        <div class="gg_top">
            <img src="${product.img}">
            <a href="#">${product.name}</a>
            <div class="price"></div>￥&nbsp;${product.price}
        </div>
        
        <div class="number">
            <span style="display:none">${product.id}</span>
            <div class="minnumber">${product.num}</div>
            <a class="addpro" href="javascript:;">+</a>
            <a class="cutpro" href="javascript:;">-</a>
        </div>
        <div class="sum">￥&nbsp;${(product.price) * (product.num * 1)}.00</div>
        <div class="dle">删除</div>
        <div class="middle">
            <h2>服务</h2>
            <div class="serve">
                <span><i>延长服务宝</i>可选购延长服务宝</span>
                <span><i>碎屏服务宝</i>可选购碎屏服务宝</span>
                <span><i>无忧服务</i>可选购无忧服务</span>
                <em></em>
                <div class="hide">
                    <ul class="clearfix">
                        <li>延长服务宝
                            <input class="vam">
                            延长服务宝一年￥368
                        </li>
                        <li>碎屏服务宝
                            <input class="vam">
                            碎屏（含后盖）服务宝1年￥299
                        </li>
                        <li>无忧服务
                            <input class="vam">
                            华为无忧服务￥968
                        </li>
                        <li>
                            <input class="vam">
                            延长服务宝半年￥198
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>`;
    })
    $(".car-all").html(str);
    addProductNumEvent(dom);
    cutProductNumEvent(dom);
    removeProductEvent(dom);
    sumpirce();
};

$(".countfqright>a").on("click",function(){
     alert("不！你没钱！你不想买");
        //console.log(1)
     });
//删除所有商品
$(".countfq .countfqleft .zjmxjjx").click(function(){
    //console.log(1)
        if(confirm("确认删除购物车中的全部商品吗")){
            localStorage.clear();
            location.reload();
            
        }
    });

function sumpirce(){
    var productList = util.getStorage();
    var sum = 0;
    var pro_num = 0;
    productList.forEach(function (product) {
        sum+=product.price*product.num;
        pro_num+=product.num;
    })
    $('.billing-info u span').html(`<em>&nbsp;${pro_num}&nbsp;</em>`)
    $('.billing-info p span').html(`<i class="jiaqian">${sum}.00</i>`)
}






































// function changeProductNum(type,id){
//     var changeNum = {
//         'add':function(id){
//             //获取本地存储中所有商品的列表
//             var productList = JSON.parse(localStorage.getItem('car'))
//             console.log(productList.id);
//             if(productList.id==id){
//                 productList.number++
//                 }
//             //把商品id和传入id相同的商品的num加1
//             // $('productList').ecah(function(i,n){
//             //     console.log(i,n);
//             // })
//             // productList.forEach(function(i,product){
//             //     console.log(i,product);
//             //     if(product.id==id){
//             //         product.number++
//             //     }
//             // });
//             // for (const i in productList) {
//             //     console.log(productList.id);
//             // }
//             //同步本地存储
//             util.setStorage(productList);
//         },
//         "cut":function(id){

//         }
//     };
//     changeNum[type](id)
// }






