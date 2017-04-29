<?php
	require('grafo.php');
	require('clique.php');
	require('vertices.php');
	
	$g = new Grafo();
	$g->adicionarVertice("0");
	$g->adicionarVertice("1");
	$g->adicionarVertice("2");
	$g->adicionarVertice("3");
	$g->adicionarVertice("4");
	$g->adicionarVertice("5");
	$g->adicionarVertice("6");
	$g->adicionarVertice("7");
	$g->adicionarVertice("8");
	$g->adicionarVertice("9");
	$g->adicionarVertice("10");
	
	$g->adicionarAresta(0, 1);
	$g->adicionarAresta(0, 6);
	$g->adicionarAresta(1, 2);
	$g->adicionarAresta(1, 8);
	$g->adicionarAresta(1, 6);
	$g->adicionarAresta(5, 6);
	$g->adicionarAresta(2, 3);
	$g->adicionarAresta(2, 4);
	$g->adicionarAresta(3, 4);
	$g->adicionarAresta(10, 4);
	$g->adicionarAresta(10, 1);
	$g->adicionarAresta(7, 3);
	$g->adicionarAresta(9, 7);
	$g->adicionarAresta(3, 9);
	
	$vertice = new CoberturaVertices($g);
	$vertice->coberturaMinima();
	
	//$clique = new Clique($g);
	//$clique->maxCliques(0);
	echo "<pre>";
	//print_r($clique->saida);
	print_r($vertice->saida);
	echo "</pre>";
?>
	