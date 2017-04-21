<?php

class CoberturaVertices
{	
	private $a = array();
	private $b = array();
	private $grafo;
	
	function CoberturaVertices($grafo) {
		
		$this->grafo = $grafo;
		$vertices = $this->grafo->getVertices();
		
		//montando "conjunto a"
		foreach($vertices as $vertice){
			$this->a[$vertice] = $this->grafo->getAdjascencias($vertice);
		}
		
		//montando "conjunto b"
		$i = 0;
		foreach ($vertices as $vertice_indice) {
			$verts = array();
			$encontreime = false;
			
			foreach ($vertices as $vertice_valor) {
				if ($encontreime) {
					$verts[] = $vertice_valor;
				}
				
				if ($vertice_indice == $vertice_valor) {
					$encontreime = true;
				}
			}
			
			$this->b[$vertice_indice] = $verts;
		}			
	}
	
	public $saida = array();
	private $N = array();
	private $X = array();
		
	function limpaVetor($x, $inicio) {
		
		//foreach(i in range(inicio,len(vetor)-1):
		$xtemp = array();
		$i = 0;
		foreach ($x as $key => $valor) {
			if ($i<$inicio) {
				$xtemp[$key] = $valor;
			}
			
			$i++;
		}
		
		return $xtemp;
	}
	
	private $C = array();
	private $cont = 0;
	private $menorCobertura;
	
	function coberturaMinima ($l = 0, $cobertura = array()) {
		
		//echo "\n".$l;
		$vertices = $this->grafo->getVertices();
		if ($l==0) {
			$this->saida = array();
			$this->menorCobertura = count($vertices)+1;	
		}
		
		//se a cobertura for total e se esta for a menor encontrada
		if (count($cobertura) == count($this->grafo->getArestas()) && count($this->X) < $this->menorCobertura) {
			$this->menorCobertura = count($this->X);
			$this->saida = $this->X;
			$this->X = $this->limpaVetor($this->X, $l);
			
			return;        
		}
		
		if ($l==0) {
			$this->C[$l] = $vertices;
		} else {
			$this->C[$l] = array_uintersect ( $this->C[$l-1], $this->b[$this->X[$l-1]], "strcasecmp");
		}
		
		foreach ($this->C[$l] as $x) {
			$this->X[$l] = $x;    
			
			$this->coberturaMinima($l+1, $this->getCoberturaAtual($cobertura, $x));
		}
		
		$this->X = $this->limpaVetor($this->X, $l);
		
		return;
	}        
	
	//retorna a cobertura atual+ a do vértice analisado
	function getCoberturaAtual ($coberturaAtual, $vertice) {
		
		$novaCobertura = array();
		
		foreach ($coberturaAtual as $indice => $cobertura) {
			$novaCobertura[$indice] = $cobertura;
		}
		
		foreach ($this->grafo->getArestas() as $key => $aresta) {
			if ($vertice == $aresta["v1"] || $vertice == $aresta["v2"]) {
				$novaCobertura[$key] = $aresta;                    
			}
		}
		
		return $novaCobertura;
	}
}