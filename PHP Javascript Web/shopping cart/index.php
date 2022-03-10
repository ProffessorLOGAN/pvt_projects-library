<?php

session_start();
$connect = mysqli_connect("localhost", "root", "", "cart");

if (isset($_POST["add_to_cart"])) {
    if (isset($_SESSION["shopping_cart"])) {
        $item_array_id = array_column($_SESSION["shopping_cart"], "item_id");
        if (!in_array($_GET["id"], $item_array_id)) {
            $count = count($_SESSION["shopping_cart"]);
            $item_array = array(
                'item_id'       => $_GET["id"],
                'item_name'     => $_POST["hidden_name"],
                'item_price'    => $_POST["hidden_price"],
                'item_quantity' => $_POST["quantity"]
            );
            $_SESSION["shopping_cart"][$count] = $item_array;
        } else {

            echo "item already added !!!";
        }
    } else {
        $item_array = array(
            'item_id'       => $_GET["id"],
            'item_name'     => $_POST["hidden_name"],
            'item_price'    => $_POST["hidden_price"],
            'item_quantity'    => $_POST["quantity"]
        );
        $_SESSION["shopping_cart"][0] = $item_array;
    }
}

if (isset($_GET["action"])) {
    if ($_GET["action"] == "delete") {
        foreach ($_SESSION["shopping_cart"] as $keys => $values) {
            if ($values["item_id"] == $_GET["id"]) {
                unset($_SESSION["shopping_cart"]["$keys"]);
                echo "item removed";
            }
        }
    }
}



?>




<html>

<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-light bg-success ">
        <a class="navbar-brand" href="#">Bakery Shop</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Catagory
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">cake</a>
                        <a class="dropdown-item" href="#">Pastry</a>
                        <a class="dropdown-item" href="#">ICE cream</a>
                    </div>
                </li>
            </ul>

        </div>

        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
        </form>
    </nav>

    <br />
    <div class="container" style="width:100%;">
        <h3 class="text-center text-primary"> Welcome to Bakery Shop</h3> <br />
        <?php
        $query = "SELECT  * FROM ITEM ORDER BY PRICE ASC";
        $result = mysqli_query($connect, $query);

        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_array($result)) {
        ?>
                <div class="col-sm-4 " style="float:left;">
                    <form method="post" action="index.php?action=add&id=<?php echo $row['id']; ?> ">
                        <div style="border:1px solid #333; background-color: #f1f1f1;border-radius:5px; padding:16px;">
                            <img src="<?php echo $row['image']; ?>" style="width:300px;height:200px;">
                            <h4 class="text-info text-center"> <?php echo $row['itemname']; ?></h4>
                            <h4 class="text-danger text-center"> ₹ <?php echo $row['price']; ?> </h4>
                            <input type="text" name="quantity" class="form-control" value="1" />
                            <input type="hidden" name="hidden_name" value="<?php echo $row['itemname']; ?>" />
                            <input type="hidden" name="hidden_price" value="<?php echo $row['price']; ?>" />
                            <input type="submit" name="add_to_cart" style="margin-top:5px;" class="btn form-control btn-success" value="Add to cart" />
                        </div>

                    </form>
                </div>


        <?php
            }
        }
        ?>

        <div style="clear:both"></div>
        <br />
        <h3 style="margin-top: 100px;text-align: center;"> <u>Order Details </u></h3>
        <div class="table table-responsive">
            <table class="table table-bordered">
                <tr>
                    <th width="40%">Item Name</th>
                    <th width="10%">Quantity</th>
                    <th width="20%">Price</th>
                    <th width="15%">Total</th>
                    <th width="5%">Action</th>
                </tr>
                <?php
                if (!empty($_SESSION["shopping_cart"])) {
                    $total = 0;
                    foreach ($_SESSION["shopping_cart"] as $keys => $values) {
                ?>
                        <tr>
                            <td><?php echo $values["item_name"]; ?></td>
                            <td><?php echo $values["item_quantity"]; ?></td>
                            <td><?php echo $values["item_price"]; ?></td>
                            <td><?php echo number_format($values["item_quantity"] * $values["item_price"], 2) ?></td>
                            <td><a href="index.php?action=delete&id=<?php echo $values["item_id"]; ?>" style="text-decoration:none;" class="btn-sm btn-danger"><span class=" text-light">remove</span></a></td>
                        </tr>
                    <?php
                        $total = $total + ($values["item_quantity"] * $values["item_price"]);
                    }

                    ?>
                    <tr>
                        <td colspan="3" align="right">total</td>
                        <td align="right"> ₹ <?php echo number_format($total, 2); ?> </td>
                        <td align="center"> <a href="checkout.php" class="btn-sm btn-info" style="text-decoration:none;">Checkout</a></td>
                    </tr>
                <?php
                }
                ?>
            </table>
        </div>




    </div>

    <br />
</body>



</html>