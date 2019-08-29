<?php
    $conn = mysqli_connect('localhost','root','root','09huawei');
    $name = $_COOKIE['username'];
    $pass = $_COOKIE['password'];
         
    $sql = "SELECT * FROM hw_list WHERE hw_username='$name' AND hw_password ='$pass'";
    $result = mysqli_query($conn,$sql);
    if(mysqli_num_rows($result)){
        setcookie("username",$name,time()+10);
        setcookie("password",$pass,time()+10);       
        echo "1";
    }else{
        echo "0";
    }
?>