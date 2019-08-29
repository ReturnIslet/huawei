<?php
header('Content-type:text/html;charset=utf-8');

$servername = "localhost";
$username = "root";
$password = "root";

//创建连接
$mysql = mysqli_connect($servername,$username,$password);

//检测连接
if(mysqli_connect_error()){
	die('连接失败');
}
//创建数据库
$sql_c = "CREATE DATABASE 09huawei";
$result = mysqli_query($mysql,$sql_c);
if($result){
	echo "数据库创建成功";
}else{
	echo "数据库创建失败";
}

?>