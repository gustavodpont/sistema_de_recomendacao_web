<?php
	require('grafo.php');
	require('clique.php');
	
	$g = new Grafo();
	$g->adicionarVertice("0");
	$g->adicionarVertice("1");
	$g->adicionarVertice("2");
	$g->adicionarVertice("3");
	$g->adicionarVertice("4");
	$g->adicionarVertice("5");
	$g->adicionarVertice("6");
	$g->adicionarAresta(0, 1);
	$g->adicionarAresta(0, 6);
	$g->adicionarAresta(1, 2);
	$g->adicionarAresta(1, 5);
	$g->adicionarAresta(1, 6);
	$g->adicionarAresta(5, 6);
	$g->adicionarAresta(2, 3);
	$g->adicionarAresta(2, 4);
	$g->adicionarAresta(3, 4);
	
	$clique = new Clique($g);
	$clique->maxCliques(0);
	echo "<pre>";
	print_r($clique->saida);
	echo "</pre>";
?>
	