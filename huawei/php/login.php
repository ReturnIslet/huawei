<?php
header('content-type:text/html;charset=utf-8');
//连接数据库
$username = $_POST['username']; 
$password = $_POST['password']; 
//创建连接
$mysql = mysqli_connect('localhost','root','root','09huawei');
//检测连接
if(mysqli_connect_error()){
	die('连接失败');
}
$sql_s = "select * from hw_list where hw_username='$username' and hw_password='$password'";
$result = mysqli_query($mysql,$sql_s);
$row = mysqli_fetch_assoc($result);
if($row){
  //数据库有该用户密码
  setcookie("username",$username,time()+10);
  setcookie("password",$password,time()+10);
  echo 1;
}else{
  //数据库没有该用户密码
  echo 0;
}
?>