<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>PHP - Form</title>
</head>

<body>
    <section>
      <h1>RehabOnline - Add Treatment</h1>  
        <?php 
            $name = $_GET["name"];
            $descr = $_GET["descr"];
            $time = $_GET["time"];
            $ex = $_GET["ex_num"];
            //... 
            echo "<h2> Added successfully </h2>";
        ?>
    </section>
</body>

</html>