(deftemplate jogador (slot estilo)
		     (slot media_de_abates)
		     (slot media_de_assistencias)
		     (slot mortos_no_time)
		     (slot protege_o_time)
		     (slot morre))
(deftemplate rota (slot nome))

(defrule assassino_aceitavel
	(jogador (media_de_abates ?abates))
	(jogador (morre ?morre))
	(and (test (>= ?abates 2)))
	(test (eq ?morre "sim"))
=>
(printout t "assassino aceitavel" crlf)
)

(deffacts jogador "assassino aceitavel" 
	(jogador (media_de_abates 2)(morre "sim")) 
)