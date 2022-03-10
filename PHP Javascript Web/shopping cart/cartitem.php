<?php
$conn = mysqli_connect('localhost','root');
mysqli_select_db($conn,'cart');


if($_SERVER["REQUEST_METHOD"] == "POST") 
{
    $itemname= $_POST['itemname'];
    $price= $_POST['price'];


  $file_name = $_FILES['image']['name'];
  $file_size = $_FILES['image']['size'];
  $file_tmp = $_FILES['image']['tmp_name'];
  $file_type = $_FILES['image']['type'];
  
  $q = "SELECT  `image` FROM `item` WHERE `image` = '$file_name'";
  $result = mysqli_query($conn,$q);
  $row = mysqli_num_rows($result);
  if($row > 0){ 
    echo "name already exist";
  } 
  else{ 

  $fileextvalue = explode(".",$file_name);
  
  $fileextlower = strtolower(end($fileextvalue));
  $fileext = array('png','jpg','jpeg');
  if(in_array($fileextlower,$fileext)){
    $insert = "INSERT INTO `item` (`itemname`, `image`,`price`) VALUES ('$itemname','$file_name','$price')";
    $check = mysqli_query($conn,$insert);
    move_uploaded_file($file_tmp,"itemdata/".$file_name);
    echo "successfully uploaded";
    
  }else{
    echo "wrong Extention";
  
  }
}


}


?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<form action="" method="post" enctype="multipart/form-data">

        <input type="itemname" name="itemname" placeholder="itemname"/> 
        <input type="file" name="image" placeholder="image name"/>
        <input type="price" name="price" placeholder="price"/> 
        <input type="submit" name="sub"/>


    </form>
</body>
</html>