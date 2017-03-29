(deftemplate jogador (slot estilo)
		     (slot gosta_do_estilo)
		     (slot mata_por_luta)
		     (slot numero_de_assistencias)
		     (slot mortos_do_time)
		     (slot protege_o_time)
		     (slot morre))
(deftemplate rota (slot nome))

(defrule assassino_otimo
	(jogador (mata_por_luta ?abates))
	(jogador (morre ?morre))
	(and 
		(test (>= ?abates 2))
		(test (eq ?morre "nao"))
	)
=>
(printout t "Rota x e um assassino otimo" crlf)
)

(defrule assassino_aceitavel
	(jogador (mata_por_luta ?abates))
	(jogador (morre ?morre))
	(and 
		(test (>= ?abates 2))
		(test (eq ?morre "sim"))
	)
=>
(printout t "Rota x e um assassino aceitavel" crlf)
)

(defrule suporte_otimo
	(jogador (numero_de_assistencias ?assist))
	(jogador (mortos_do_time ?mortos))
	(jogador (morre ?morre))
	(or 
		(and
			(test (>= ?assist 3))
			(test (eq ?morre "nao"))
		)
		(and 
			(test (<= ?mortos 3))
			(test (eq ?morre "sim"))
		)
	)
=>
(printout t "Rota x e um suporte otimo" crlf)
)

(defrule atirador_otimo
	(jogador (mata_por_luta ?abates))
	(jogador (morre ?morre))
	(and 
		(test (>= ?abates 2))
		(test (eq ?morre "nao"))
	)
=>
(printout t "Rota x e um atirador otimo" crlf)
)

(defrule atirador_aceitavel
	(jogador (mata_por_luta ?abates))
	(jogador (morre ?morre))
	(and 
		(test (>= ?abates 3))
		(test (eq ?morre "sim"))
	)
=>
(printout t "Rota x e um atirador aceitavel" crlf)
)

(defrule tank_otimo
	(jogador (mata_por_luta ?abates))
	(jogador (morre ?morre))
	(and 
		(test (>= ?abates 2))
		(test (eq ?morre "nao"))
	)
=>
(printout t "Rota x e um tank otimo" crlf)
)

(defrule tank_aceitavel
	(jogador (mata_por_luta ?abates))
	(jogador (morre ?morre))
	(and 
		(test (>= ?abates 3))
		(test (eq ?morre "sim"))
	)
=>
(printout t "Rota x e um tank aceitavel" crlf)
)

(deffacts jogador "alguma coisa" 
	(jogador
		(estilo "assassino")
		(gosta_do_estilo "sim")
		(mata_por_luta 2)
		(morre "sim")
		(numero_de_assistencias 3)
		(mortos_do_time 3)
		(protege_o_time "sim")
	) 
)