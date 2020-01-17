<?php
	include 'head.php';
?>

<section class="about-sec">
	<h1>Funkcja kwadratowa</h1>
	<p class="m-top">
	<b>Funkcją kwadratową</b> nazywamy taką funkcję, we wzorze której:</p>
	<ul>
    <li>musi wystąpić x2,</li>
    <li>może wystąpić x,</li>
    <li>może wystąpić liczba stała.</li>
	</ul>
	<p class="m-top">
	Funkcja w podstawowej postaci przyjmuje wartość	</p>
	<p class="formula m-top">f(x) = ax<sup>2</sup>+bx+c</p>
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
<p>Podaj wartości argumentów swojej funkcji aby poznać jej właściwości i
	miejsca zerowe.
</p>
</section>

<script type="text/javascript" src="calculator.js"></script>

<?php
	include 'footer.php';
?>