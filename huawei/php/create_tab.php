<?php
header('Content-type:text/html;charset=utf-8');
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "09huawei";
//创建连接
$mysql = mysqli_connect($servername,$username,$password,$dbname);

//检测连接
if(mysqli_connect_error()){
	die('连接失败');
}

//使用sql语句建表
$sql_c = "CREATE TABLE hw_list (
			hw_id INT(6) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
			hw_username VARCHAR(300) NOT NULL,
			hw_password VARCHAR(30) NOT NULL,
			hw_year VARCHAR(30) NOT NULL,
			hw_month VARCHAR(30) NOT NULL,
			hw_day VARCHAR(30) NOT NULL
		)";

$result = mysqli_query($mysql,$sql_c);
if($result){
	echo "表格创建成功";
}else{
	echo "表格创建失败";
};
?>