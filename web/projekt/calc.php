<?php
	include 'head.php';
?>

<section class="about-sec">
	<h1>Funkcja kwadratowa</h1>
</section>

<section class="about-sec calc">
	<h1>Kalkulator miejsc zerowych funkcji kwadratowej</h1>
	
	<div>
		<input type="number" placeholder="a" name="a"> x<sup>2</sup></sup>+
		<input type="number" placeholder="b" name="b"> x +
		<input type="number" placeholder="c" name="c"> = 0
	</div>

	<button id="resultBtn">Oblicz</button>

</section>


<section class="about-sec" id="calcResult">

</section>

<script type="text/javascript" src="calculator.js"></script>

<?php
	include 'footer.php';
?>