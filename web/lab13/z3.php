<html>
<head>

</head>
<body>

<form method="GET">

    <input type="number" name="a">
    <input type="number" name="b"><br>

    
        <input type="radio" name="operator" value="+" id="p">
        <label for="p">Dodawanie</label>
   
        <input type="radio" name="operator" value="-" id="m">
        <label for="m">Odejmownaie</label>
   
        <input type="radio" name="operator" value="*" id="mn">
        <label for="mn">Mnozenie</label>
   
        <input type="radio" name="operator" value="/" id="dz">
        <label for="dz">Dzielenie</label>
    <br>
    <input type="submit">

</form>
<p>
<?php

    if(isset($_GET['operator']))
    {
        $op = $_GET['operator'];
        $a = $_GET['a'];
        $b = $_GET['b'];

        echo 'operacja: '.$op.'<br>';

        if($op=="+")
            echo 'a+b='.($a+$b);
        else if($op=="-")
            echo 'a-b='.($a-$b);
        else if($op=="/")
            {
                if($b==0)
                    echo 'Nie dzielimy przez 0!';
                else
                    echo 'a/b='.($a/$b);
            }
        else if($op=="*")
            echo 'a*b='.($a*$b);
    }
    else echo 'podaj wartości a i b';
?>
</p>
</body>
</html>