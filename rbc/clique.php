<?php
class Clique{
	
	var $a = array();
	var $b = array();
	var $grafo;
	
	function Clique($grafo){
		
		$this->grafo = $grafo;
		$vertices = $this->grafo->getVertices();
		
		//montando "conjunto a"
		foreach ($vertices as $vertice) {
			$this->a[$vertice] = $this->grafo->getAdjascencias($vertice);
		}
		
		//montando "conjunto b"
		$i = 0;
		foreach ($vertices as $vertice_indice) {
			$verts = array();
			$encontreime = false;
			foreach($vertices as $vertice_valor) {    
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
	
	var $saida=array();
	var $N=array();
	var $X=array();
		
	function limpaVetor($x, $inicio){

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
	
	var $C = array();
	var $cont = 0;
	function maxCliques ($l = 0){

		$vertices = $this->grafo->getVertices();
		if ($l==0) {
			$this->saida = array();
			$this->N[$l] = $vertices;
		} else {
			$this->N[$l] = array_uintersect ($this->N[$l-1], $this->a[$this->X[$l-1]], "strcasecmp");
		}
		
		if (count($this->N[$l]) == 0) {
			$this->saida[] = $this->X;
			$this->X = $this->limpaVetor($this->X, $l);
			return;        
		}
		
		if ($l==0) {
			$this->C[$l] = $vertices;
		} else {
			$this->C[$l] = array_uintersect( $this->C[$l-1], $this->a[$this->X[$l-1]], $this->b[$this->X[$l-1]], "strcasecmp");
		}
		
		foreach ($this->C[$l] as $x) {
			$this->X[$l] = $x;    
			$this->maxCliques($l+1);
		}
		
		$this->X = $this->limpaVetor($this->X, $l);
		
		return;
	}
}
