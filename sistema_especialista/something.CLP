(deftemplate jogador (slot estilo)
		     (slot gosta_do_estilo)
		     (slot mata_por_luta)
		     (slot numero_de_assistencias)
		     (slot mortos_do_time)
		     (slot protege_o_time)
		     (slot morre)
		     (slot media_de_abates)
		     (slot media_de_mortes)
		     (slot media_de_assistencias))
(deftemplate informacoes (slot estilo)
			 (slot rota))

(defrule assassino_otimo
	(jogador (mata_por_luta ?abates))
	(jogador (morre ?morre))
	(jogador (gosta_do_estilo ?gosta))
	(informacoes (estilo ?est))
	(informacoes (rota ?rota))
	(and 
		(test (>= ?abates 2))
		(test (eq ?morre nao))
		(test (eq ?est assassino))
		(test (neq ?rota nil))
		(test (neq ?gosta sim))
	)
=>
(printout t "Recomendado rota " ?rota " e um assassino otimo" crlf)
)

(defrule assassino_aceitavel
	(jogador (mata_por_luta ?abates))
	(jogador (morre ?morre))
	(jogador (gosta_do_estilo ?gosta))
	(informacoes (estilo ?est))
	(informacoes (rota ?rota))
	(and 
		(test (>= ?abates 2))
		(test (eq ?morre sim))
		(test (eq ?est assassino))
		(test (neq ?rota nil))
		(test (neq ?gosta sim))
	)
=>
(printout t "Recomendado rota " ?rota " e um assassino aceitavel" crlf)
)

(defrule suporte_otimo
	(jogador (numero_de_assistencias ?assist))
	(jogador (mortos_do_time ?mortos))
	(jogador (morre ?morre))
	(jogador (gosta_do_estilo ?gosta))
	(informacoes (rota ?rota))
	(informacoes (estilo ?est))
	(or 
		(and
			(test (>= ?assist 3))
			(test (eq ?morre nao))
			(test (eq ?est suporte))
			(test (neq ?rota nil))
			(test (neq ?gosta sim))
		)
		(and 
			(test (<= ?mortos 3))
			(test (eq ?morre sim))
			(test (eq ?est suporte))
			(test (neq ?rota nil))
			(test (neq ?gosta sim))
		)
	)
=>
(printout t "Recomendado rota " ?rota " e um suporte otimo" crlf)
)

(defrule atirador_otimo
	(jogador (mata_por_luta ?abates))
	(jogador (morre ?morre))
	(jogador (gosta_do_estilo ?gosta))
	(informacoes (rota ?rota))
	(informacoes (estilo ?est))
	(and 
		(test (>= ?abates 2))
		(test (eq ?morre nao))
		(test (eq ?est atirador))
		(test (neq ?rota nil))
		(test (neq ?gosta sim))
	)
=>
(printout t "Recomendado rota " ?rota " e um atirador otimo" crlf)
)

(defrule atirador_aceitavel
	(jogador (mata_por_luta ?abates))
	(jogador (morre ?morre))
	(jogador (gosta_do_estilo ?gosta))
	(informacoes (rota ?rota))
	(informacoes (estilo ?est))
	(and 
		(test (>= ?abates 3))
		(test (eq ?morre sim))
		(test (eq ?est atirador))
		(test (neq ?rota nil))
		(test (neq ?gosta sim))
	)
=>
(printout t "Recomendado rota " ?rota " e um atirador aceitavel" crlf)
)

(defrule tank_otimo
	(jogador (protege_o_time ?protege))
	(jogador (morre ?morre))
	(jogador (gosta_do_estilo ?gosta))
	(informacoes (rota ?rota))
	(informacoes (estilo ?est))
	(and 
		(test (eq ?protege sim))
		(test (eq ?morre nao))
		(test (eq ?est tank))
		(test (neq ?rota nil))
		(test (neq ?gosta sim))
	)
=>
(printout t "Recomendado rota " ?rota " e um tank otimo" crlf)
)

(defrule tank_aceitavel
	(jogador (protege_o_time ?protege))
	(jogador (morre ?morre))
	(jogador (gosta_do_estilo ?gosta))
	(informacoes (rota ?rota))
	(informacoes (estilo ?est))
	(and 
		(test (eq ?protege sim))
		(test (eq ?morre sim))
		(test (eq ?est tank))
		(test (neq ?rota nil))
		(test (neq ?gosta sim))
	)
=>
(printout t "Recomendado rota " ?rota " e um tank aceitavel" crlf)
)

(defrule estilo_assassino
	(jogador (media_de_abates ?mAbates))
	(jogador (media_de_mortes ?mMortes))
	(jogador (media_de_assistencias ?mAssist))
	(and 
		(test (eq ?mAbates alto))
		(test (eq ?mMortes baixo))
		(test (eq ?mAssist baixo))
	)
=>
(assert (informacoes (estilo assassino)))
)

(defrule estilo_suporte
	(jogador (media_de_abates ?mAbates))
	(jogador (media_de_mortes ?mMortes))
	(jogador (media_de_assistencias ?mAssist))
	(and 
		(test (eq ?mAbates baixo))
		(test (eq ?mMortes baixo))
		(test (eq ?mAssist alto))
	)
=>
(assert (informacoes (estilo suporte)))
)

(defrule estilo_atirador
	(jogador (media_de_abates ?mAbates))
	(jogador (media_de_mortes ?mMortes))
	(jogador (media_de_assistencias ?mAssist))
	(and 
		(test (eq ?mAbates alto))
		(test (eq ?mMortes baixo))
		(test (eq ?mAssist alto))
	)
=>
(assert (informacoes (estilo atirador)))
)

(defrule estilo_tank
	(jogador (media_de_abates ?mAbates))
	(jogador (media_de_mortes ?mMortes))
	(jogador (media_de_assistencias ?mAssist))
	(and 
		(test (eq ?mAbates baixo))
		(test (eq ?mMortes alto))
		(test (eq ?mAssist alto))
	)
=>
(assert (informacoes (estilo tank)))
)

(defrule gosta_do_estilo
	(jogador (estilo ?estilo))
	(jogador (gosta_do_estilo ?gosta))
	(informacoes (rota ?rota))
	(and
		(test (neq ?rota nil))
		(test (eq ?gosta sim))
	)
=>
(printout t "Recomendado rota " ?rota " e estilo " ?estilo crlf)
)

(defrule rota_superior
	(jogador (estilo ?estilo))
	(and 
		(test (eq ?estilo tank))
	)
=>
(assert (informacoes (rota superior)))
)

(defrule rota_meio
	(jogador (estilo ?estilo))
	(and 
		(test (eq ?estilo assassino))
	)
=>
(assert (informacoes (rota meio)))
)

(defrule rota_atirador
	(jogador (estilo ?estilo))
	(and 
		(test (eq ?estilo atirador))
	)
=>
(assert (informacoes (rota inferior)))
)

(defrule rota_suporte
	(jogador (estilo ?estilo))
	(and 
		(test (eq ?estilo suporte))
	)
=>
(assert (informacoes (rota inferior)))
)

(deffacts jogador "alguma coisa" 
	(jogador
		(estilo assassino)
		(gosta_do_estilo nao)
		(mata_por_luta 3)
		(morre nao)
		(numero_de_assistencias 3)
		(mortos_do_time 3)
		(protege_o_time sim)
		(media_de_abates alto)
		(media_de_mortes baixo)
		(media_de_assistencias baixo)
	) 
)