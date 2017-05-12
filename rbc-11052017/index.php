<?php
	require('grafo.php');
	require('clique.php');
	require('vertices.php');
	
	$g = new Grafo();
	$g->adicionarVertice("Calçado");
	$g->adicionarVertice("Chuteira");
	$g->adicionarVertice("Meia");
	$g->adicionarVertice("Tênis");
	$g->adicionarVertice("Uniforme");
	$g->adicionarVertice("Camisa");
	$g->adicionarVertice("Calção");
	$g->adicionarVertice("Caneleira");
	$g->adicionarVertice("Agasalho");
	$g->adicionarVertice("Roupas");
	$g->adicionarVertice("Jaquetas");
	
	$g->adicionarAresta("Chuteira", "Calçado", "é");
	$g->adicionarAresta("Meia", "Calçado", "complementa");
	$g->adicionarAresta("Tênis", "Calçado", "é");
	$g->adicionarAresta("Chuteira", "Uniforme", "compõe");
	$g->adicionarAresta("Meia", "Uniforme", "compõe");
	$g->adicionarAresta("Camisa", "Uniforme", "compõe");
	$g->adicionarAresta("Calção", "Uniforme", "compõe");
	$g->adicionarAresta("Caneleira", "Uniforme", "compõe");
	$g->adicionarAresta("Camisa", "Roupas", "é");
	$g->adicionarAresta("Calção", "Roupas", "é");
	$g->adicionarAresta("Agasalho", "Roupas", "é");
	$g->adicionarAresta("Jaquetas", "Roupas", "é");
	
	$vertice = new CoberturaVertices($g);
	$vertice->coberturaMinima();
	
	//echo "<pre>";
	$clique = new Clique($g);
	$clique->maxCliques();
	
	//print_r($clique->saida);
	//print_r($vertice->saida);
	//echo "</pre>";
	
?>
	<form action='index.php' method='POST'>
		<select name='select' id='select'>
			<?php
				foreach($g->getVertices() as $key => $saida) {
					//echo '<pre>';
					//var_dump($g->getArestas($key));
					echo "<option value='$key'>$saida</option>";
				}
			?>
		</select>
		<button type='submit'>vai pokebola</button>
	</form>
	
<?php

	if ($_POST) {
		echo "<ul>";
		$key = $_POST['select'];
		foreach($g->getAdjascencias($g->getVertices()[$key]) as $value){
			
			$algo = $g->getVertices()[$key];
			$a = ($key == 0 || $key == 4 || $key == 9) ? " <= " : " => ";
			
			echo"<li>$algo $a $value</li>";
		}
		//echo "</ul>";
	}
?>