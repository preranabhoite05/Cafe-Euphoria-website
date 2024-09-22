<?php
    $Name= $_POST['Name'];
    $email= $_POST['email'];
    $Date= $_POST['Date'];
    $Time= $_POST['Time'];
    $total_p= $_POST['people'];
    $request= $_POST['request'];

    $conn= new mysqli('localhost','root','','cafe_euphoria');
    if ($conn->connect_error){
        die('Connetion failed: '.$conn->connect_error);
    }else{
        echo "Connection successful<br>";
        $stmt= $conn->prepare("insert into reservation (Name,email,Date,Time,people,request) values(?,?,?,?,?,?)");
        $stmt->bind_param("ssssis",$Name,$email,$Date,$Time,$total_p,$request);
        $stmt->execute();
        echo "Registration successful<br>";
        $stmt->close();
        $conn->close();
    }
?>