<?php
header('content-type:text/html;charset=utf-8');
//连接数据库
$username = $_POST['username']; 
$password = $_POST['password']; 
$year = $_POST['year'];
$month = $_POST['month'];
$day = $_REQUEST['date'];

//创建连接
$mysql = mysqli_connect("localhost","root","root","09huawei");
//检测连接
if(mysqli_connect_error()){
	die('数据库连接失败');
}

$flag = true;
if($flag == true){
    $sql_s = "select * from hw_list where hw_username='$username'";
    $result = mysqli_query($mysql,$sql_s);
    $num =  mysqli_affected_rows($mysql);
    if($num>0){
        echo '1';
        $response = ['echo' => 1,'message' => '用户名重复'];
    }else{
        $flag = false;
    }
}
    if($flag == false){
        $sql_i = "insert into hw_list (hw_username,hw_password,hw_year,hw_month,hw_day) values('$username','$password','$year','$month','$day')";
        $result = mysqli_query($mysql,$sql_i);
        $row = mysqli_affected_rows($mysql);
        if($row >0){
            $response = ['code' => 200,'message' => '恭喜注册成功'];
        }else{
            $response = ['code' => -1,'message' => '抱歉注册失败'];
        }
        $flag = true;
        echo json_encode($response);
    }
    


?>