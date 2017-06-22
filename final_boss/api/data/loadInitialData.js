'use strict';

const Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost:27017/finalboss');

const Book = Mongoose.model('Book', {
    title: String,
    description: String,
    author: String,
    price: Number,
    rank: Number,
    votes: Number,
    images: [String],
    informations: String,
});

const books = [
    {
        title: "Fundamentos de Administração",
        description: "Todas as organizações requerem o papel do gestor para o seu sucesso e perenidade e para o bem estar coletivo. A razão disso é que o futuro das organizações está sendo rápida e intensamente mudado, moldado e reconfigurado por duas fortes tendências transformadoras: de um lado, uma nova e diferente abordagem em relação à excelência organizacional - para fazer cada vez mais e melhor - e, de outro lado, a criação de vantagens competitivas - para fazer aquilo que é mais satisfatório e necessário para a sociedade. Ambas privilegiadas pela tecnologia da informação. A presente obra versa sobre a importância do gestor para a organização e explana os fundamentos básicos para a formação desse profissional. Linguagem simples e didática, Traz a temática de liderança e organização; Aborda a temática de sustentabilidade",
        author: "Idalberto Chiavenato",
        price: 49.60,
        rank: 4,
        votes: 32,
        category: "Administração",
        image: "http://books.google.com/books/content?id=YmF1DgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72duYi2ndB-7zuZ3ABQ06_RT3w_9UbJsJwO05RN4N_1wOD2Rfg8oJw8fSHIbScexXkLwAf5sliMUHwp-V2sVAL6OuZm_SGMDX8jHK48wh9h6e3Nv8zYG-dnu2e3cOmXIqPLU4lJ&source=gbs_api",
        informations: "Todas as organizações requerem o papel do gestor para o seu sucesso e perenidade e para o bem estar coletivo."
    },{
        title: "Administração sob a ótica dos concursos",
        description: "Passar em um concurso público é o sonho de muitas pessoas: estabilidade, boa remuneração e excelentes benefícios. Mas a concorrência é grande, o que exige perseverança, dedicação, prática com as provas anteriores e muitas horas de estudo do candidato. Thiago de Luca traz nesta obra conceitos administrativos que são cobrados em diversas provas para cargos públicos de todo o país. De forma didática, explica as teorias administrativas e apresenta mais 271 questões, 137 questões respondidas e comentadas e 134 para que o leitor pratique o que aprendeu. Administração sob a ótica dos concursos é uma obra completa para o concurseiro de plantão.",
        author: "Thiago de Luca",
        price: 29.90,
        rank: 3.5,
        votes: 20,
        category: "Administração",
        image: "http://books.google.com/books/content?id=jueiDQAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72VED1O6GARgXBBvGaIPuHtPP8caAHdTM9-FMIBg2NfdUKLWRReluxOYgC8j6lOB8e4QVqvDpS8ACJkbrioq1o9wEOFE-RG-L2ud1pK6uVPZ4rEt_IsEAiOk4htCHWCXQddYPjH&source=gbs_api",
        informations: "Administração sob a ótica dos concursos é uma obra completa para o concurseiro de plantão."
    },{
        title: "Métodos de Pesquisa em Administração - 12ª Edição",
        description: "Nova edição de livro-texto sobre técnicas de pesquisa voltado especificamente para alunos de graduação e pós-graduação em administração.",
        author: "Pamela S. Schindler & Donald R. Cooper",
        price: 119.98,
        rank: 3.7,
        votes: 15,
        category: "Administração",
        image: "http://books.google.com/books/content?id=-3wdDAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73Sv_u3ZJgtsSMbv26bQttdgyvolUAUZAnZE4H7VxhqY4QTU3f3lqRqgJY3tDKIMqz-89UNMDYVH6lxeNS3G39IhwwjDCGbrjPAEzlECWJLJ_7djlIVcl7tt-2Zip5ohD2IJ9aD&source=gbs_api",
        informations: "Nova edição de livro-texto sobre técnicas de pesquisa voltado especificamente para alunos de graduação e pós-graduação em administração."
    },{
        title: "5000 Palavras Bem Pronunciadas Em Inglês",
        description: "As 5000 palavras mais usuais Inglês-português baseado na frequência da informação com a pronúncia especialmente indicada para falar Inglês como um nativo.",
        author: "Jairo Gomes",
        price: 5.99,
        rank: 3.8,
        votes: 25,
        category: "Administração",
        image: "http://books.google.com/books/content?id=PPHQ7DAHakMC&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72F-6rFdTMwerqKYzqRXE22tdVhxuKUOJF-i0QPSKfiI2jKX14MfbBTndneputSpys6Eb-aTD08Vi1e67D0BWdj4_N4pjFwWe9OYYya9u-wwNN-OM8GYdHHftnXIvSjkJoEcKMa&source=gbs_api",
        informations: ""
    },{
        title: "Administração Financeira - 10 ed.",
        description: "Líder de mercado nos Estados Unidos, Corporate Finance chega ao Brasil em uma nova versão que incorpora o conhecimento e as práticas brasileiras. Com revisão técnica e adaptação ao mercado brasileiro do prof. Roberto Lamb, da Escola de Administração da UFRGS, a obra contextualiza o conteúdo norte-americano à realidade brasileira.",
        author: "Stephen A. Ross & Jeffrey Jaffe",
        price: 162.00,
        rank: 3.8,
        votes: 35,
        category: "Administração",
        image: "http://books.google.com/books/content?id=N3sTBwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73T8iIR5wcrwLPQNejRV6m7m3sSaVKf8MtszEDyazLOK03bxhqOzN_z0J-F1hJXL-PlAF4ASnRBWTHex-qPvcGhw4xp_jW5Yli_GTUbjtYydyZPYhQCWa9oJu6U6CqWB4mxKBC_&source=gbs_api",
        informations: "Com revisão técnica e adaptação ao mercado brasileiro do prof. Roberto Lamb, da Escola de Administração da UFRGS, a obra contextualiza o conteúdo norte-americano à realidade brasileira."
    },{
        title: "Administração Educacional - Teoria, Pesquisa e Prática",
        description: "Uma das obras mais lidas na área da liderança educacional, este livro apresenta, por meio de uma abordagem pragmática, teorias e pesquisas atuais que analisam o ensino, a aprendizagem e a liderança para a administração eficaz das instituições de ensino. Este livro auxilia gestores e futuros gestores a compreender os conteúdos e os contextos escolares a partir de uma perspectiva de sistemas, sintetizando conhecimentos relevantes para a solução de problemas práticos.",
        author: "Wayne K. Hoy & Cecil G. Miskel",
        price: 93.60,
        rank: 2.3,
        votes: 35,
        category: "Administração",
        image: "http://books.google.com/books/content?id=WIYTBwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71MvZo7JI8ecUhv0z1ooGEYawbDhE1qYGfJsDsUsieiAF5Ruu09pa0ax2_MfGi6kv2Ig7XXR56vLiWhhzJCs4XFTo3CMc5JGi3ppoxebnjTVlMmwNLiZFAEM3Ivnq14ivRIdYjd&source=gbs_api",
        informations: "Uma das obras mais lidas na área da liderança educacional, este livro apresenta, por meio de uma abordagem pragmática, teorias e pesquisas atuais que analisam o ensino, a aprendizagem e a liderança para a administração eficaz das ..."
    },{
        title: "Administração de Serviços - 7.ed.",
        description: "Em sua sétima edição, Administração de Serviços aborda de forma abrangente os conceitos e as aplicações reais da administração de serviços. Esta edição tem como objetivo desenvolver habilidades tanto estratégicas quanto operacionais relacionadas aos serviços. Líder de mercado nos Estados Unidos, tem entre seus autores uma das maiories autoridades no assunto.",
        author: "James A. Fitzsimmons & Mona J. Fitzsimmons",
        price: 106.88,
        rank: 3.5,
        votes: 21,
        category: "Administração",
        image: "http://books.google.com/books/content?id=XCi9AwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71z67h3D1qKB5DfwB7BCSBYPI2bWabSiSuDni5S2DNRA6xVHTy4iU63dWVWSYN5w1xlZ5J8aja_lnczdCjzp5ZGxM7cjLmy0ebw2ICHqKOGlafoWW7SqXNeTGhRWpVKdA3PUSM2&source=gbs_api",
        informations: "Em sua sétima edição, Administração de Serviços aborda de forma abrangente os conceitos e as aplicações reais da administração de serviços."
    },{
        title: "A Gestão Estratégica de Pessoas no Capitalismo",
        description: "O Prof. Dr. Jean Pierre Marras, e Mestre em Administracao e Doutor em Ciencias Sociais pela Pontificia Universidade Catolica de Sao Paulo, foi gestor de Pessoas na Alcoa, Fiat Automoveis, Samarco Mineracao e Diretor de RH da Thyssen Huller. E professor de graduacao e pos-graduacao, Diretor da Marras e Associados Consultoria e escritor de 15 livros de administracao e dezenas de artigos cientificos nacionais e internacionais.",
        author: "Jean Pierre Marras",
        price: 29.90,
        rank: 3.5,
        votes: 20,
        category: "Administração",
        image: "http://books.google.com/books/content?id=Hi9pjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        informations: "O Prof. Dr. Jean Pierre Marras, e Mestre em Administracao e Doutor em Ciencias Sociais pela Pontificia Universidade Catolica de Sao Paulo, foi gestor de Pessoas na Alcoa, Fiat Automoveis, Samarco Mineracao e Diretor de RH da Thyssen Huller"
    },{
        title: "Gestão de Resíduos - Administração",
        description: "O livro Gest�o de Res�duos introduz e compartilha diversos conhecimentos sobre os res�duos e sua gest�o. Entre alguns assuntos explorados, est�o: a introdu��o � gest�o de res�duos; a Pol�tica Nacional De Res�duos S�lidos (Lei 12.305); o panorama da gest�o de res�duos no Brasil; a gest�o dos res�duos nos munic�pios; a pesquisa em gerenciamento de res�duos s�lidos; leis e normas relativas � gest�o de res�duos; a classifica��o de res�duos s�lidos (ABNT 10.004); a gest�o de res�duos industriais, os Res�duos Eletroeletr�nicos (REE), de sa�de e da constru��o civil; as atividades de reciclagem e as a��es de sensibiliza��o e educa��o ambiental; os planos de gest�o de Res�duos e a destina��o final dos res�duos.",
        author: "Julio Rezende",
        price: 29.90,
        rank: 3.5,
        votes: 20,
        category: "Administração",
        image: "http://books.google.com/books/content?id=7fx7rgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        informations: "O livro Gest o de Res duos introduz e compartilha diversos conhecimentos sobre os res duos e sua gest o."
    },{
        title: "Psicanálise sem Édipo?",
        description: "Em Psicanálise sem Édipo?, Philippe Van Haute e Thomas Geyskens partem dos estudos de Freud e de Lacan sobre a histeria a fim de defender duas teses maiores. Primeiro, trata-se de se perguntar sobre o que existe na latência da teoria freudiana da sexualidade, para além da insistência no caráter normativo de modelos de socialização do desejo baseados na estrutura de conflitos própria ao complexo de Édipo. Essa latência indica a possibilidade de uma peculiar \"psicanálise sem Édipo”, a saber, uma psicanálise mais capaz de lidar com a polimorfia da sexualidade humana. Nesse sentido, os esforços de Van Haute e de Geyskens se inscrevem em uma elaboração psicanalítica original do impacto da crítica do familiarismo, tal como desenvolvido em um importante setor da filosofia contemporânea, como podemos ver, por exemplo, em Foucault e em Deleuze e Guattari. No entanto, o verdadeiro objetivo se desvela mais à frente, explicitando-se no último capítulo deste impressionante livro. Trata-se da defesa de uma antropologia filosófica baseada naquilo que os autores entendem por \"patoanalítica”. Abandonando o esquema tradicional de compreensão das relações entre normalidade e patologia, na qual uma antropologia normativa encontra expressão perfeita em um conceito de normalidade que servirá de orientação para as múltiplas modalidades de intervenção clínica, Van Haute e Geyskens procuram inverter esse sistema de valores. Dessa forma, as patologias se demonstram indissociáveis das formas de expressão da antropologia. Como dizia Lacan, não há sujeito sem sintoma. Da mesma forma, não há antropologia, não há reflexão sobre a natureza humana sem pathos.",
        author: "Philippe Van Haute & Tomas Geyskens",
        price: 99.90,
        rank: 4.5,
        votes: 32,
        category: "Antropologia",
        image: "http://books.google.com/books/content?id=b5mjDgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70OiCZxiIm4co7mVr8IUzZmHRaCRCzUx-dO5ewaJ9oO_q2PaSEK9iUuRFcIqHH9XmQWvcp5kpKEf4RVX-B7QESoGb0tREBriEskpKI_eumEYbJcRELy1dqpyXyFtCi4i8qU7Usy&source=gbs_api",
        informations: "Em Psicanálise sem Édipo?, Philippe Van Haute e Thomas Geyskens partem dos estudos de Freud e de Lacan sobre a histeria a fim de defender duas teses maiores."
    },{
        title: "Textos básicos de antropologia",
        description: "Os mais importantes autores e textos da tradição clássica da antropologia, em um só volume De Franz Boas a Lévi-Strauss e Marshall Sahlins, essa coletânea organizada por Celso Castro, professor e diretor da Escola de Ciências Sociais/CPDoc da Fundação Getulio Vargas, fornece um panorama das principais questões da antropologia e tem como objetivo colocar o leitor em contato direto com textos que se tornaram referência obrigatória da disciplina. Todos os ensaios presentes nesse livro fazem parte do cânone da antropologia e - mais do que um inventário de possibilidades de visão de mundo - buscam compreender nossa própria cultura e a sociedade em que vivemos. Livro de valor inestimável para professores e alunos, Textos básicos de antropologia é, sem dúvida, uma obra fundamental direcionada a todos aqueles que desejam adquirir (ou transmitir) o gosto pela perspectiva antropológica e por tudo aquilo que ela tem a nos oferecer.",
        author: "Celso Castro",
        price: 29.90,
        rank: 4.7,
        votes: 30,
        category: "Antropologia",
        image: "http://books.google.com/books/content?id=6qbFDAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70ZZt6Gbu1XPtK_MV6oObuC9ws2qwYrnCDajKU9xtPTS3qzfX2GFlrBKnjgb9f69S8zv4BQ8k5DURwLN5-WSGJNsiH19g6EbDtcmDMbRyjGEp7I9nGjM3y3gzIMlQpWzgzWX9cg&source=gbs_api",
        informations: "Livro de valor inestimável para professores e alunos, Textos básicos de antropologia é, sem dúvida, uma obra fundamental direcionada a todos aqueles que desejam adquirir (ou transmitir) o gosto pela perspectiva antropológica e por tudo ..."
    },{
        title: "Para uma antropologia do Sertão",
        description: "Este estudo é sobre o Sertão que cobre a maior parte do Nordeste brasileiro. Ele parte de uma interação entre um corpus jornalístico e literário referente ao Sertão e a constatação com a realidade. Essa constatação se deu por uma observação pessoal e direta. Nos anos de 1983-1985, em virtude de uma seca particularmente intensa, a mídia reportava este terrível flagelo com a vida de sofrimento e de miséria ocasionada por este fato. Durante uma viagem ao Nordeste brasileiro, em 1987, tive a oportunidade inesperada de morar no Sertão, em Santa Quitéria, cidade do estado do Ceará. E, então, pude constatar diferenças entre a realidade observada e os fatos relatados pela imprensa ou pela literatura na descrição das difíceis condições de vida no conjunto do Sertão.",
        author: "Veronique Bulteau",
        price: 20.90,
        rank: 3.8,
        votes: 33,
        category: "Antropologia",
        image: "http://books.google.com/books/content?id=wXpQDAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70BqGmNnmzHSeRsIOKPN0LkZ-47QZ1cx-MhqxCRsv-D9VE4rjnrNcmpggpbSP3jau7b21vAZv5flvmbwpiHA0f1hvcNT_TV53zSKz6XNrT_CXZ-gqSApNsIpRYCRlf7Tb5xmmOM&source=gbs_api",
        informations: "Este estudo é sobre o Sertão que cobre a maior parte do Nordeste brasileiro."
    },{
        title: "ANTROPOLOGÍA Y COMPARACIÓN CULTURAL",
        description: "Este volumen analiza la comparación cultural como procedimiento (teórico y metodológico) para explicar la diversidad cultural. La selección de textos compilados abordan, desde diferentes orientación esteóricas, la complejidad de comparar los procesos culturales e intentan dar respuestas a los siguiente sinterrogantes: ¿Qué clase de equivalencias culturales son comparables entre sí? ¿Cómo se establecen las categorías analíticas y cuáles son los límites de lo comparable? ¿Quién determina qué es lo específico y qué es lo universal, qué es lo semejante o diverso en los fenómenos culturales? ¿A qué construcciones e interpretaciones culturales dan lugar esa “diferenciación de” o “equiparación con los otros”? El interés y el objetivo final del conocimiento antropológico es hacer inteligible la diversidad cultural y, en ese proceso de traducción cultural, lograr la comprensión del otro, de lo ajeno y de lo diferente. El conocimiento antropológico está, inevitablemente, condicionado por los problemas que se derivan del hecho comparativo que en síntesis son, por un lado, la complejidad para explicar el binomio “unidad de la especie humana-diversidad cultural” y, por otro lado, la dificultad de expresar lo abstracto a través de lo concreto (personas, lugares y hechos). En definitiva, se trata de abordar esos caminos de ida y vuelta entre la especificidad y universalidad culturales.",
        author: "FERNÁNDEZ MORENO Nuria",
        price: 34.71,
        rank: 3.9,
        votes: 55,
        category: "Antropologia",
        image: "http://books.google.com/books/content?id=yUtqBwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71u95zHrqhVwMz1HYO-WpVuktyQDku0l2hhdn4mtTO8glCh7fiW0WA3hfIjwqkUfaS92onWR4AEdqLLB2tHIauSycTLcy9_guvdfmO79sm12GXptiQop03zxTSe4BUKp-2E51qc&source=gbs_api",
        informations: "II LA FORMACIÓN DE LA ANTROPOLOGÍA SOCIAL [*] A. R. RADCLIFFEBROWN Podemos definir la antropología social como la investigación de la naturaleza de la sociedad humana mediante la comparación sistemática de sociedades de..."
    },{
        title: "Antropologia estrutural",
        description: "Coletânea de dezoito textos fundamentais do antropólogo francês Claude Lévi-Strauss, publicados entre 1958 e 1973, sua fase de pleno reconhecimento. O volume inclui uma reflexão sobre a formação do pensamento antropológico, concedendo lugar proeminente ao filósofo Jean-Jacques Rousseau. Aborda temas clássicos da antropologia como “organização social” e “mitologia e ritual”, refletindo sobre a relação entre modelos analíticos e realidade empírica. Rebate críticas que confundem seu método de análise estrutural ao formalismo, próprio dos estudos literários de Vladimir Propp. Finalmente, posiciona-se no debate ético e político, no texto “Raça e história”, proferido na UNESCO em 1952, um manifesto antirracista e em defesa da diversidade sociocultural, que questiona a pretensão ocidental à supremacia cultural, ancorada na ideologia do progresso e em atos massivos de destruição.",
        author: "Claude Lévi-Strauss",
        price: 55.90,
        rank: 4.2,
        votes: 28,
        category: "Antropologia",
        image: "http://books.google.com/books/content?id=DYzHBgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73CerlVrQoUbAqEedJIrYcAPL0HT-EdFcyxczI4aD1AnndBOCY45Bgjyo2k7TNwX1N5jUwdcc4blVnWutMRznO4Pk-RWeg69z6etiIwXt6UtseWPBQ-IyLP4-eOFiwN25sxVUBj&source=gbs_api",
        informations: "I. O campo da antropologia Sr. administrador, Caros colegas, Senhoras, senhores, Foi há pouco mais de um ano, em 1958, que o Collège de France criou uma cadeira de antropologia social.[1] Por tratar-se de uma ciência por demais atenta..."
    },{
        title: "Matemática e Arte",
        description: "Neste livro, Dirceu Zaleski Filho propõe reaproximar a Matemática e a Arte no ensino. A partir de um estudo sobre a importância da relação entre essas áreas, o autor elabora aqui uma análise da contemporaneidade e oferece ao leitor uma revisão integrada da História da Matemática e da História da Arte, revelando o quão benéfica sua conciliação pode ser para o ensino. O autor sugere aqui novos caminhos para a Educação Matemática, mostrando como a Segunda Revolução Industrial – a eletroeletrônica, no século XXI – e a arte de Paul Cézanne, Pablo Picasso e, em especial, Piet Mondrian contribuíram para essa reaproximação e como elas podem ser importantes para o ensino de Matemática em sala de aula. Matemática e Arte é um livro imprescindível a todos os professores, alunos de graduação e de pós-graduação e, fundamentalmente, para professores da Educação Matemática.",
        author: "Dirceu Zaleski Filho",
        price: 19.90,
        rank: 3.2,
        votes: 21,
        category: "Artes",
        image: "http://books.google.com/books/content?id=MVAODgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73hLvNj-RFZiTu08_1QIUIprMxvKmVfwPPI3n63HX-kg_u1wtV9LyFdYw-lO0M24cWCOTLrLwlGp7-7clzykkZ9gLCFUhIV25H5Te_MoBmTnEGPOuqRDEhRA-Ounkqrkn1MJa4j&source=gbs_api",
        informations: "Neste livro, Dirceu Zaleski Filho propõe reaproximar a Matemática e a Arte no ensino."
    },{
        title: "A Formação do Professor e o Ensino das Artes Visuais",
        description: "As tematicas que balizam os textos sobre formacao de professores sao as mais variadas_ construcao da subjetividade docente, perspectiva internacional da docencia em artes visuais, diario de aula, curriculo, deslocamentos perceptivos e conceituais da cultura visual, estagio supervisionado em artes visuais, cosmopolitismo, relatorios de estagio em artes visuais, desenho de criacao como dispositivo para pensar a formacao e docencia em artes visuais a partir das filosofias da diferenca.",
        author: "Marilda Oliveira de Oliveira",
        price: 35.00,
        rank: 3.9,
        votes: 27,
        category: "Artes",
        image: "http://books.google.com/books/content?id=lheuDQAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72UmCaslyti5QodvwZTSxoFbGRWb8qp3FmivqxWjlrQPWuswYKEcu4Dp84vbKwhu0zstCmKqZzyt0jUu4VJVhlLiIMqCMENEslGyzgtfCJ-T46cTkt8LTSOmMID-r8vvXy4HfOc&source=gbs_api",
        informations: "Além disso, a prática profissional desses egressos, pedagogos artísticos e artistas interessados pelo ensino das artes, tropeça com um panorama complexo ao entrar no sistema educativo formal, uma vez que o lugar da educação artística no..."
    },{
        title: "O Amor nas artes marciais pelas artes marciais",
        description: "A arte marcial, não pode graduar o que o dinheiro paga.O mérito do aprendizado deve ser a dedicação de quem o busca.A falta de ética no amor ao que se faz mostra o quanto o interesse financeiro se camufla em ensinar os preceitos da arte marcial, tem-se então a falsa impressão, na evolução do aprendizado.A vaidade aflora, e os sentimentos se misturam, onde o discípulo não aprende, o mestre não ensina, e a arte não evolui.Porque quando conhecemos nosso oponente, há uma possibilidade de vitória, mas quando não se conhece esse oponente, a derrota será certa !",
        author: "Wilma Alfred",
        price: 388.61,
        rank: 4.8,
        votes: 40,
        category: "Artes",
        image: "http://books.google.com/books/content?id=OKniDAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE727WbdP0iCLFEFwtofuTvX-kh-xy9ZYvr8ZkQvavGasWypaGX2y6MhdjhHuyr5armEIk4Ci95we-qHftlrL2PQfJegGAjQEKTRgsohMRbQ61PmpT-m8rS6Aaz19IZEQYKm0YiZI&source=gbs_api",
        informations: "Mestre Arturo carrasco, seu primeiro contato com as artes marciais, foi na tenra idade de 8 anos, no judô. Passou parte desta infância assistindo e filmes de David Carradini as aventuras do rei mono e filmes como operação dragão. Ali ele..."
    },{
        title: "A evolução do cinema LGBTT e a conquista de direitos",
        description: "Através da história do cinema notamos os posicionamentos da sociedade e do direito e a forma como eles se modificam ao longo do tempo. A minoria LGBTT, quase invisível, começa lentamente a verificar uma abertura, se tornando pouco a pouco merecedor de direitos. Diante da diversidade de culturas, povos e modos de vida que temos em um só lugar, passa-se a não ser mais possível regimes ditatoriais e excludentes, a maioria dos iguais deixa de ditar as regras, a igualdade formal que se dispõe nas leis já não é mais suficiente, passamos por uma nova era. O cinema auxilia o direito dando-lhe a abertura necessária para a compreensão da carga afetiva das palavras e de como a igualdade deve ser aplicada em um Estado Democrático de Direito.",
        author: "Thereza Cristina Bohlen Bitencourt Marcondes",
        price: 19.90,
        rank: 3.9,
        votes: 25,
        category: "Artes",
        image: "http://books.google.com/books/content?id=w2WiAgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70ZBzugf5BbhIR2h4j_uqSoG-w2YsFvwbkOO2MI0pljXuFxMLNm8C2Kl-Zy873vN5C2FGfD9ccuJO_XVZ3gSNZqQpZHRc4e2TJ_Qlt-vUJdzCfwDSi3RNb6ooY_FdYR2XdHStOF&source=gbs_api",
        informations: "repetições e observações, como no caso da arte da guerra (militar) e da fala (oratória). Quando falamos de arte como habilidade, pressupõe-se uma espécie de dom, propensão, facilidade para a arte. Também podemos pensar na arte como..."
    },{
        title: "As artes da palavra",
        description: "Uma conversa de um leitor, rigoroso e crítico, mas também apaixonado, sobre o eterno aprendizado da leitura. Em As artes da palavra: elementos para uma poética marxista, o filósofo Leandro Konder faz uma reflexão sobre literatura e realismo. Dividido em duas partes, na primeira, Konder parte da sua experiência e erudição para analisar seis gêneros da expressão literária: poesia, romance, teatro, ensaio, crônicas e cartas. Para cada um dedica um capítulo intitulado \"Para ler...\" em que o autor, com um texto claro como uma boa aula, discute, desperta o interesse e amplia a compreensão sobre as formas do discurso escrito. Nas suas introduções aos gêneros, Konder trata de questões como por que hoje quase não se lê poesia; o que é um romance; a relação entre o texto teatral e a encenação ao longo da história da dramaturgia até Bertolt Brecht; a dinâmica complexa entre a liberdade artística e a linguagem da ciência nos ensaios; os recursos da crônica, gênero no qual cabe tudo, menos ser chato; e o lugar da carta dentro da literatura. Na segunda parte do livro, o autor parte para um desenvolvimento original do conceito de realismo na literatura, a partir da análise e comparação de um romancista notadamente realista, Honoré de Balzac, com a busca ao que existe de realismo na obra de Fernando Pessoa, um poeta que inventava inclusive os autores de seus poemas. Fortemente inspirado pelo filósofo húngaro György Lukács, Konder busca uma definição do que é realismo e sua relação com a força das grande obras de arte.",
        author: "Leandro Konder",
        price: 21.00,
        rank: 4.1,
        votes: 35,
        category: "Artes",
        image: "http://books.google.com/books/content?id=kzvlgVgygo0C&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE734cbV2_xiVPWWthITtCIvx6r1U7uo26s_7Lpo8BYn1ZH5GqVcv3fVEGBAm07TDMZ-Xlm_Ojks8xXDLP2Q8FEiuWKz1mqcrF8piyNPN1ba3B46QWTK00bgwslTpYwbMDs07Eigz&source=gbs_api",
        informations: "Uma concepção de realismo que se apóie numa perspectiva ontológica pode nos ajudar a pensar, de maneira abrangente, os problemas da arte, em todos os níveis em que eles se manifestam, sem desprezar realizações bemsucedidas,..."
    },{
        title: "Teologia, Espiritualidade e Protestantismo",
        description: "O EVANGELHO FALA NÃO SÓ À MENTE, MAS AO CORAÇÃO A necessidade que muitos cristãos sinceros vêm sentindo de fazer um protesto contra o secularismo, o mercantilismo e a espetacularização da fé tem levado a um aumento considerável de uma literatura evangélica que tem sido chamada de “espiritualidade”. No entanto, se divorciada da teologia ou posta em oposição a ela, esse gênero literário pode estar servindo para uma mera versão religiosa da literatura secular de autoajuda. Em Teologia, espiritualidade e protestantismo, Glauco Barreira apresenta um estudo cuidadoso das bases teológicas para o exercício de uma espiritualidade nos moldes da Palavra de Deus. Partindo da criação até a esperança da volta de Cristo, perpassando pela queda e misericordiosa salvação de Deus em Cristo, ele ressalta sua importância inconteste para o crescimento espiritual dentro do protestantismo, uma das mais importantes vertentes do cristianismo. O que aprecio nos escritos do professor Glauco é o modo com que foca seus vastos conhecimentos históricos e teológicos nas áreas que o liberalismo tem provocado um desmoronamento da fé ortodoxa. Nesta obra de verdadeira qualidade, há o interesse louvável de persuadir os leitores a fincar as estacas na verdade bíblica. — Dr. Russell Shedd, Prefácio Glauco Barreira Magalhães Filho é pastor da Igreja Batista Renovada Moriá (Fortaleza, CE) e Diretor do Instituto Pietista de Cultura, doutor em Sociologia e em Teologia e especialista em Teologia Histórica e Dogmática. Entre suas obras pulicadas estão O Imaginário em As Crônicas de Nárnia, Lições das Crônicas de Nárnia, Teologia e Imaginário, Teologia do Fogo e Manifesto contra o Mundanismo.",
        author: "Glauco Barreira Magalhães Filho",
        price: 20.90,
        rank: 3.8,
        votes: 25,
        category: "Autoajuda",
        image: "http://books.google.com/books/content?id=NNcnDwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71oTjfv_cFbgMmtf5gg4Unr3Bq1EMzdlsLwu3SaDVHBrJdKC1asVOsoMgCsiSwSiruuqgBACFPxWqdFVyCh__xf29gNnUFeWc103dCjuao78y6wmVQj_trgWN0zA_yea3knNy0l&source=gbs_api",
        informations: "Em Teologia, espiritualidade e protestantismo, Glauco Barreira apresenta um estudo cuidadoso das bases teológicas para o exercício de uma espiritualidade nos moldes da Palavra de Deus."
    },{
        title: "Você é fera",
        description: "VOCÊ É FERA É UM LIVRO DE AUTOAJUDA PARA QUEM DESEJA DESESPERADAMENTE MELHORAR DE VIDA, MAS NÃO TEM TEMPO A PERDER! Um livro de autoajuda diferente de todos os outros. Há mais de 60 semanas na cobiçada lista dos mais vendidos do The New York Times, Você é fera traz a verve feminina, divertida, pop (e por vezes desbocada) da coach de sucesso Jen Sincero. São 27 capítulos curtos que ensinam o leitor, através de histórias inspiradoras, dicas sobre dinheiro, comportamento e relacionamentos, exercícios práticos e um palavrão de vez em quando, a descobrir a origem de seus problemas, evitar as armadilhas de autossabotagem, encontrar a força interior necessária para mudar e a estabelecer seus objetivos e alcançá-los. Ou, em linguagem franca e direta, ao estilo da autora: depois de ler Você é fera, você vai entender por que é do jeito que é, como pode amar o que não pode mudar, como pode mudar o que não ama e aprender a usar a sua força para arrasar de verdade. Jen Sincero traz uma verve feminina e divertida ao universo da autoajuda. Seu tom é muito mais espirituoso do que professoral, e há humor em cada página, que é exatamente aquilo de que seu público precisa.",
        author: "Jen Sincero",
        price: 22.50,
        rank: 3.8,
        votes: 21,
        category: "Autoajuda",
        image: "http://books.google.com/books/content?id=KjskDwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73O9eRgCNtA7NJn5usvK-t4z9amOGsJOUMIIowU9a7SvuOZ7TOVQa4FRTIqmCrHW1AkMWuJfpH2DLuewt8jQSV15QHAbbfVRXgVesIk8_QxRENjUUifvZjnvbYN8IHP54lG-EB1&source=gbs_api",
        informations: "Há mais de 60 semanas na cobiçada lista dos mais vendidos do The New York Times, Você é fera traz a verve feminina, divertida, pop (e por vezes desbocada) da coach de sucesso Jen Sincero."
    },{
        title: "Wabi-sabi",
        description: "Quando um relacionamento vai mal, nada melhor do que viajar para um mundo distante para repensar a vida. E é exatamente isso que Samuel faz. Sua namorada, Gabriela, com quem ele mantém um relacionamento há oito anos, parece mais distante a cada dia, e sua vida passa a se dividir entre as aulas de alemão e as pesquisas que faz para os livros de autoajuda de seu vizinho escritor. Tudo isso na companhia do gato Mishima. Porém, certa manhã, algo tira Samuel de sua existência monótona: um cartão-postal vindo do Japão com a imagem de um gato de porcelana e os dizeres “Wabi-Sabi”. Dias depois, ele recebe um segundo postal com a fotografia de um templo e as mesmas palavras. Intrigado, Samuel decide ir ao Japão para descobrir quem é o remetente das mensagens misteriosas, e sua viagem acaba se transformando em uma verdadeira jornada de autoconhecimento.",
        author: "Francesc Miralles",
        price: 22.90,
        rank: 3.5,
        votes: 20,
        category: "Autoajuda",
        image: "http://books.google.com/books/content?id=1mklDwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70FAEot2Wr9PBqeYMYEzybwvV040pB_2UueZ4oc5z3cYXazbnAaUFw60gsFtyDc6vhIQJYBQ2ypm8OEK7kUqZTxKArxBR5HjjrzYLcmfQxq6oLKVcOeEp3Wya-8zDX63ZhuqHCZ&source=gbs_api",
        informations: "Quando um relacionamento vai mal, nada melhor do que viajar para um mundo distante para repensar a vida."
    },{
        title: "VENCENDO A ESCURIDÃO",
        description: "O que ele e mais ninguém imaginava é que essa seria a última vez que poderia admirar a lua e as estrelas em uma noite de inverno. Um dia de festa, um passeio à noite e um acidente de carro foram o início de uma história marcada por uma tragédia pessoal e todas as tentativas para superá-la. Em Vencendo a Escuridão, você conhecerá um rapaz que aos 23 anos teve a sua vida completamente transformada pela perda da visão. Seu último contato com o mundo do jeito que ele conhecia foi o contemplar de um lindo céu noturno. Faculdade, família, amigos e carreira: nada nunca mais seria o mesmo após esse episódio. Trinta anos depois, já um homem maduro, ele conta sua história com as inúmeras dificuldades que enfrentou por conta da deficiência visual e também como foi possível contorná-las com determinação, força de vontade e ajuda de pessoas incríveis que cruzaram o seu caminho. Vencendo a Escuridão não é um livro de autoajuda ou uma receita para a superação. É uma história verídica sobre dificuldades que podem acontecer com qualquer um, a qualquer momento, e ninguém está preparado para enfrentar, mas deixa claro que o otimismo, a persistência, o desejo de vencer e uma palavra amiga fazem toda a diferença.",
        author: "PAULO SANTORO",
        price: 28.00,
        rank: 3.8,
        votes: 20,
        category: "Autoajuda",
        image: "http://books.google.com/books/content?id=lW--DgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71hxRoO-50EKcGYFOW9baRSQsG75tqmKT1Yd748Qez5VHyRiqbEtjfV8zCkNGLSS5-j3yiCzO0ZXB2wBqRsQDhN29i14mId7KbnLHWjAYJQaGIs6gVZ3eIM3aOrAB7LO97vCok_&source=gbs_api",
        informations: "O que ele e mais ninguém imaginava é que essa seria a última vez que poderia admirar a lua e as estrelas em uma noite de inverno."
    },{
        title: "Hoje é o dia mais feliz da sua vida",
        description: "Diz o ditado que uma imagem vale por mil palavras. Mas não existe imagem que seja tão forte quanto as palavras precisas, as que encorajam, as que mostram caminhos, aquelas que fazem pensar e mudar. Hoje é o dia mais feliz da sua vida, escrito por uma das mais talentosas designers do Brasil, é um livro feito com palavras motivadoras e imagens de rara beleza, que também têm muito a dizer. Uma obra inspiradora, feita para quem quer um dia a dia de mais felicidade.",
        author: "Matrix Editora",
        price: 27.90,
        rank: 4.0,
        votes: 38,
        category: "Autoajuda",
        image: "http://books.google.com/books/content?id=ybxUHT2TEHQC&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72tIWreuqyfhbJIAuVL7Ac42s2lNQdqb3u-UylS_wrXrDx2UHgmpVsqywCBgPhEo2hVVfB1lNVKUL1FeXVZH3FazaoGJp46_lDO8L-PnLKmLE7A3djhZ6OhNHbbOZMjyDgSrNUX&source=gbs_api",
        informations: "... de se atrever, de vez em quando, a formatar essas palavras e frases e emoldurá-las em livros como este, com o firme intuito de prestar o inestimável serviço de fornecer a base para que o leitor faça a sua trama, a essência da autoajuda."
    },{
        title: "Alimento para a Alma: Inspire-se",
        description: "Como sua vida mudaria se você vivesse cada dia inteiramente motivado? No podcast do Blog Talk Radio, o Bootstrap Businessmen compartilha de sua coleção pessoal de citações favoritas dos pensadores modernos da atualidade aos filósofos antigos. Leia uma citação por dia como uma dose diária de inspiração, ou leia de uma só vez para expulsar os pensamentos negativos. Neste livro, você verá citações sobre: Motivativação Inspiração Felicidade Negócios & prosperidade Saúde & bem-estar Riqueza & dinheiro Hábitos diárops & práticas Ideias motivacionais Liderança motivacional E muitas outras citações inspiradoras e motivadoras Gênero: REFERÊNCIA/Gênero das Citações Secundárias: AUTO-AJUDA/Crescimento Pessoal/Auto-Estima: Português Contagem de Palavras: 6000 Informações de vendas: As vendas foram baixas, por isso nós estamos fazendo o seo e oferecendo uma versão Kindle.",
        author: "Bootstrap Businessmen",
        price: 95.30,
        rank: 3.9,
        votes: 39,
        category: "Autoajuda",
        image: "http://books.google.com/books/content?id=LjGYDgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73LUu4Cmxk5OyCFyBTz2luDZ11CuP2zPDOFfw9P0iYAXlaULKrsosXvN8kkG5NFIcMZo7gV4CsDLSOoSw8IBstHH16FRTtDONvt91xPwp6BQk93Xn3myjC3wBKgfecqvxMgCJ7O&source=gbs_api",
        informations: "No podcast do Blog Talk Radio, o Bootstrap Businessmen compartilha de sua coleção pessoal de citações favoritas dos pensadores modernos da atualidade aos filósofos antigos."
    },{
        title: "Minutos Salvadores",
        description: "Esse livro foi feito para \"salvar\" vidas através de uma breve leitura que ajuda o leitor a se motivar para a vida, refletir sobre as mais diversas questões relevantes na sua vida. \"Minutos Salvadores\" abre um amplo leque de instrumentos terapêuticos para a consciência aplicar na própria vida. Categorias: Suicídio, Saúde Mental, Psicoterapia, Psicologia, Desenvolvimento Humano, Autoajuda Palavras-chave: autoajuda, autoterapia, psicologia, psicoterapia",
        author: "Guilherme Soares Lima",
        price: 24.40,
        rank: 3.5,
        votes: 20,
        category: "Autoajuda",
        image: "http://books.google.com/books/content?id=ovRZDgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70UixU0ywd3arYuSY7hp7nYk5PEqrPf8wRNKzBcXQ1P3VWXwJKmD8uGq9r8ZMPAq6I470KWOl7sqaeC96Y8QKihCKtNLMleGbWTa6oZ9knsJkoJvjsVePhuYuoMXb9ZLMobZXzt&source=gbs_api",
        informations: "Minutos Salvadores&quot; abre um amplo leque de instrumentos terapêuticos para a consciência aplicar na própria vida."
    },{
        title: "Journaling - Libere o poder de sua mente",
        description: "O journaling é uma técnica que nos guia, passo a passo, a escrever, todos os dias, em um diário. Com isso, podemos colocar em ordem o conteúdo de nossa mente. São inúmeros os benefícios que obtemos do journaling. Destacamos os seguintes: -Conhecimento de nós mesmos -Serenidade mental -Organização de nossos objetivos -Maior felicidade -Pensamento mais criativo -Melhor gestão de nosso tempo, de nosso espaço mental e de nossas emoções Mafalda Lempicka, reconhecida autora de livros sobre a Lei da Atração, compartilha conosco a aplicação das técnicas do journaling em conjunto com as leis que o universo coloca a nossa disposição para realizar nossos desejos. Assim, se você quiser ter acesso a uma nova ferramenta para trabalhar com a Lei da Atração ou se, simplesmente, quer ler algumas páginas que te ajudem a se conhecer melhor e a aproveitar ao máximo toda sua potencialidade, neste livro você encontrará grandes respostas. Uma reflexão sobre a maneira como os pensamentos se acumulam de forma caótica no nosso interior. A chave para colocá-los em ordem e traçar o mapa de nosso próprio caminho vital.",
        author: "Mafalda Lempicka",
        price: 9.53,
        rank: 3.5,
        votes: 20,
        category: "Autoajuda",
        image: "http://books.google.com/books/content?id=IidMDgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73qote4kiIxl5IIahSy9dmRlivLS5UxwSdFiHHyf_gDxWhAqONc0p3HF1WC6Ml0NMed4zIIgAwYh0nMGbOEQzULARMYS6qOXkaP5XsGBv6OXC5za47C2_qYmpRAgAWxfjB31HMz&source=gbs_api",
        informations: "Destacamos os seguintes: -Conhecimento de nós mesmos -Serenidade mental -Organização de nossos objetivos -Maior felicidade -Pensamento mais criativo -Melhor gestão de nosso tempo, de nosso espaço mental e de nossas emoções Mafalda ..."
    },{
        title: "Como desenvolver a autodisciplina",
        description: "Como desenvolver a autodisciplina, resistir a tentações e alcançar suas metas de longo prazo Se você quer fazer mudanças positivas na sua vida e alcançar suas metas de longo prazo, não há maneira melhor do que aprender a ser mais autodisciplinado. A ciência descobriu muitos aspectos interessantes sobre autodisciplina e força de vontade, mas a maior parte desse conhecimento está escondido em artigos científicos imensos e entediantes. Se você quer se beneficiar desses estudos sem precisar lê-los, este livro é para você. Eu tive esse trabalho por você, pesquisando as conclusões científicas mais úteis e viáveis que vão te ajudar a melhorar sua autodisciplina. Eis algumas coisas que você aprenderá com o livro: - o que um ladrão de banco com suco de limão no rosto pode te ensinar sobre autocontrole. A história pode te fazer gargalhar, mas suas implicações vão te fazer pensar duas vezes sobre suas habilidades de controlar seus impulsos. - como barras de chocolate de R$50 podem te motivar a continuar seguindo em frente quando surgir uma tentação esmagadora de ceder. - por que o Presidente Obama veste apenas ternos cinzas e azuis e o que isso tem a ver com autocontrole (é também uma razão plausível do porquê pobres continuam pobres). - por que a maneira popular de visualizar pode, na realidade, impedir que você alcance suas metas e destruir seu autocontrole (e o que fazer em vez disso). - o que é a dopamina e por que é crucial entender seu papel para quebrar seus maus hábitos e construir novos hábitos bons. - 5 maneiras práticas de treinar sua autodisciplina. Descubra algumas das técnicas mais importantes para aumentar seu autocontrole e se tornar melhor em resistir à gratificação imediata. - por que o viés do status quo ameaça suas metas e o que fazer para reduzir seu efeito sobre suas resoluções. - por que dietas extremas ajudam as pessoas a atingir seus resultados de longo prazo, e como aplicar essas conclusões em sua própria vida. - por que e quando a auto-indulgência pode te ajudar a construir sua autodisciplina. Sim, você pode se encher de comida (de vez em quando) e ainda perder peso. Em vez de compartilhar o “porquê” detalhadamente (com descrições de estudos confusos e entediantes), eu vou compartilhar com você o “como” – um conselho que vai mudar sua vida caso decida segui-lo. Você também pode dominar a arte da autodisciplina e aprender como resistir a tentações. Suas metas de longo prazo valem a pena. Compre o livro agora.",
        author: "Martin Meadows",
        price: 13.90,
        rank: 4.5,
        votes: 21,
        category: "Autoajuda",
        image: "http://books.google.com/books/content?id=M7w6DgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73Iyp6y0f9dyfYp-kS49rxXVbTdZcmOdZEcWgbTNt8vdzLQVj7XQ8Xzk2DChn-XZUjobmYWIKOjubt-Hpn6Va_EsHoFnO9C_9xuLM-S_kcg_fMkAERQAhvtpgnlM7JsSS7k9GBr&source=gbs_api",
        informations: "Como desenvolver a autodisciplina, resistir a tentações e alcançar suas metas de longo prazo Se você quer fazer mudanças positivas na sua vida e alcançar suas metas de longo prazo, não há maneira melhor do que aprender a ser mais ..."
    },{
        title: "Paul McCartney - A biografia",
        description: "Nesta biografia essencial, você encontrará tudo o que sempre quis saber sobre Paul McCartney mas não tinha certeza se era mito ou fato. Sim, Paul McCartney fumou maconha diariamente até depois dos sessenta anos de idade (e parou para não dar mau exemplo à filha pequena, Beatrice). Sim, Paul McCartney e Yoko Ono ainda hoje não se bicam. Sim, ele é considerado mão de vaca até pelos amigos íntimos. Sim, ele é um compositor erudito respeitado por seus pares. E não, ele não está morto. Muito pelo contrário. No final dos anos 1950, quatro adolescentes de Liverpool se reuniram para mudar para sempre a história da música e o próprio mundo como até então era conhecido. A beatlemania andou de mãos dadas com a revolução cultural dos anos 1960 e, como líder inconteste dos Fab Four (a despeito da opinião dos adoradores de John Lennon), Paul McCartney foi um de seus protagonistas. Mas o autor de \"Hey Jude\" e tantos sucessos imortais não é apenas o ex-líder do Beatles. Quase cinquenta anos depois do fim da banda, ele continua vivíssimo, no topo das paradas e elogiado pela crítica. Aclamada no Reino Unidos e nos EUA, esta biografia é a mais precisa e abrangente já publicada sobre Paul McCartney. Especialista em rock e profundo conhecedor da história dos Beatles, Philip Norman rastreia todos os passos do biografado com o precioso auxílio de entrevistas com membros de seu círculo pessoal. As versões de ex-namoradas, colegas, amigos, familiares e desafetos ajudam o autor de John Lennon: a vida a compor um retrato equilibrado do baixista canhoto que, um dia na vida, saiu de Liverpool com seu instrumento em formato de violino para transformar o rock numa grande arte.",
        author: "Philip Norman",
        price: 44.90,
        rank: 4.2,
        votes: 20,
        category: "Biografia",
        image: "http://books.google.com/books/content?id=DwmvDgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE733tzkA5Gqb7jBKLzSYdbApcyka8By_fWhhmWujzIBNSHeGwBcjIaxIuPHFNH1qY9xfvsA4MmowW8joJwiq9xmU6glHDrqpakZVxd5mHI-dELlvA_LoBGSjiRm8fUWn7DIdreDe&source=gbs_api",
        informations: "Sim, Paul McCartney fumou maconha diariamente até depois dos sessenta anos de idade (e parou para não dar mau exemplo à filha pequena, Beatrice). Sim, Paul McCartney e Yoko Ono ainda hoje não se bicam."
    },{
        title: "Einstein - Biografia de um gênio imperfeito",
        description: "Um mergulho irresistível no lado mais humano de Einstein Acessível e absorvente, esta não é apenas mais uma biografia do maior gênio da era moderna. Escrita pelo premiado autor David Bodanis, retrata o cientista revolucionário para revelar um Albert Einstein profundamente humano em sua genialidade e em seus defeitos e imperfeições – entre eles a teimosia orgulhosa que o deixou isolado e à margem da comunidade científica nas ultimas décadas de vida. A chegada de um gênio ao ápice, seu declínio, o modo como lidou com o fracasso e a perda da confiança – esse é o mapa percorrido por Bodanis nessa reconstrução minuciosa e afetiva, mas também crítica, da vida de Einstein. Com uma narrativa cativante, o livro oferece ainda explicações científicas ao alcance do leitor não especializado – que ficará surpreso ao descobrir que é possível entender a teoria da relatividade geral. *** \"Arrebatador!\" Forbes \"Ninguém torna a ciência complexa mais fascinante e acessível que David Bodanis.\" Bill Bryson \"Sensível e perspicaz, mostra o modo como um gênio pode perder a majestade dentro da comunidade científica.\" Sunday Times \"Um grande prazer. Bodanis dá voz às mulheres na vida de Einstein, não faz julgamentos sobre o biografado e oferece um livro absolutamente envolvente e revelador.\" Shelf Awareness \"Uma biografia que admira seu personagem, mas não se furta a criticá-lo, mostrando o grande gênio tomado pelo pensamento inflexível em seus últimos anos.\" The Observer \"Habilidade extraordinária para explicar as questões mais complicadas ... Teorias do universo se transformam em teorias da vida.\" The Times.",
        author: "David Bodanis",
        price: 29.90,
        rank: 4.3,
        votes: 24,
        category: "Biografia",
        image: "http://books.google.com/books/content?id=ZCu1DgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71uiZXD5pzSmI6AvdpgZyFJWdpgigx5_7xODrWZ40eserKLNztlYtxJSZVvdGedtRs3AzVB19c0Fa0hELYgVaGztdTx74W4u85ZO_I8owV76sM4cnLg2U7y8kObuUcTz10YCbcO&source=gbs_api",
        informations: "Escrita pelo premiado autor David Bodanis, retrata o cientista revolucionário para revelar um Albert Einstein profundamente humano em sua genialidade e em seus defeitos e imperfeições – entre eles a teimosia orgulhosa que o deixou ..."
    },{
        title: "Lemmy - A biografia definitiva",
        description: "Em “Ace of spades”, Lemmy, o líder do Motörhead, um cara que nasceu para perder e viveu para ganhar, cantou: “Não quero viver para sempre”. Entretanto, como ele contou a Mick Wall, seu ex-assessor de imprensa e amigo por mais de 35 anos: “Na verdade, quero morrer com um dia de antecedência. Só para evitar a pressa...”. Essa é sua história. Uma história bizarra, mas 100% verdadeira. Brutalmente franca, dolorosamente engraçada, triste de doer e narrada com perfeição, Lemmy: a biografia definitiva é a história do único astro do rock que nunca vendeu a alma por prata nem ouro, enquanto mantinha o diabo, como ele próprio colocou, “muito perto”. Mick Wall acompanha Lemmy desde os tempos de escola no País de Gales ao início do sucesso nos anos 1960 com os Rockin’ Vicars; da época em que foi roadie e dealer pessoal de Jimi Hendrix até levar o Hawkwind ao topo das paradas em 1972 com “Silver machine” e de onde foi demitido por tomar as drogas erradas para em seguida formar o Motörhead, cujo álbum No sleep ‘til Hammersmith alcançou o topo das paradas de sucesso em todo o mundo e se tornou um marco na história do heavy metal. Baseado nas entrevistas que Lemmy concedeu a Mick ao longo de décadas, assim como conversas com aqueles que o conheciam melhor — ex-companheiros de banda, empresários, músicos, roadies e velhos parceiros das gravadoras — esta é uma história impossível de largar sobre um dos maiores personagens do mundo da música. Com sua morte nos últimos dias de 2015, Lemmy deixou os palcos para se tornar uma lenda. E Lemmy: a biografia definitiva explica exatamente como isso aconteceu.",
        author: "Mick Wall",
        price: 31.40,
        rank: 4.3,
        votes: 38,
        category: "Biografia",
        image: "http://books.google.com/books/content?id=GUPeDgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73_TYI_NzTbyQBVEt2ldj3oexdwOgYqKvKMlY8BTMrWB9pZwGtf2eTNDDC6hmDbUoMjBcSmz4ZOj0d8tXPIylXpCoxWU_gFxRh6YaoceomoATfMw1LdJ8xkUsNGoUX8bKZrnv7u&source=gbs_api",
        informations: "Mick Wall acompanha Lemmy desde os tempos de escola no País de Gales ao início do sucesso nos anos 1960 com os Rockin’ Vicars; da época em que foi roadie e dealer pessoal de Jimi Hendrix até levar o Hawkwind ao topo das paradas em ..."
    },{
        title: "Biografia De Um Ilustre Marginal",
        description: "Um jornalista vive uma experiência que o coloca diante de uma realidade que a maioria ignora. É raptado e obrigado a viver em uma comunidade num dos morros carioca. O rapto acaba tornando-se uma investigação sobre a natureza humana. Biografia de um ilustre marginal ou crônicas de um anti-herói, é um gesto contra a planificação. Contribui para abolir preconceitos e dar transparência àquilo que nos mostram como \"certo” ou \"verdadeiro”. Trata-se de uma crítica à banalização da vida. Um alerta contra o autoritarismo de um sistema que nos leva às alturas para só depois nos deixar perceber o vazio embaixo de nós.",
        author: "Silas Rodriguez",
        price: 9.90,
        rank: 2.5,
        votes: 15,
        category: "Biografia",
        image: "http://books.google.com/books/content?id=CcY6AQAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72Qj9YPsonv48O0FKvhWOckLAnUeMFEHOTZm0zWaSOD8PGOuG5y8IMJmszAdvpBEmgAFibb2cO_DIq9Chs5P62oW0xGApwvJ0FMpTFZ39zZOhdYmh6vH2XUh2w5x6rV0-uedDAe&source=gbs_api",
        informations: "A editora pediu os originais, para lançálo antes do final do ano. Diferentemente do seu primeiro livro, vendido apenas para amigos e para as famílias dos amigos, biografia de um ilustre marginal chegará às livrarias com uma tiragem inicial..."
    },{
        title: "Filosofia do Direit",
        description: "Este livro resume a obra de pensadores centrais na filosofia do direito, entre os quais, Tomás de Aquino, Rousseau, Hobbes, Kant, Bentham, Austin, Hegel, Habermas, Arendt, Kelsen, Schmitt, Foucault, Mil, Marx, Dworkin, Hart, Ely e Ackerman.",
        author: "David Ingram",
        price: 65.60,
        rank: 4.2,
        votes: 49,
        category: "Direito",
        image: "http://books.google.com/books/content?id=H9hTDQAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71x1YkLsbSEFO-a9Mc2A04rEjJzKQfE2Stpqj7EfEKwc2QDwfBnMdr5xQfchfqXTUAG13lcHO7VpD7-lX3dmUyh5KvLq2_WJAf92MIdGDgzjc4vnIyJ1w59u5sYDQrCZTnr7DQa&source=gbs_api",
        informations: "Este livro resume a obra de pensadores centrais na filosofia do direito, entre os quais, Tomás de Aquino, Rousseau, Hobbes, Kant, Bentham, Austin, Hegel, Habermas, Arendt, Kelsen, Schmitt, Foucault, Mil, Marx, Dworkin, Hart, Ely e Ackerman ..."
    },{
        title: "Direito das igrejas",
        description: "Uma obra inédita, na qual o autor cria a disciplina do \"Direito das Igrejas\", que visa atender à crescente demanda das questões jurídicas inerentes ao mundo cristão evangélico. As relações jurídicas dos mais diversos ramos do direito nas quais a igreja está envolvida são abordadas nessa obra pioneira. Os pontos mais importantes do ordenamento jurídico aplicáveis à disciplina ora criada são expostos de uma forma prática e objetiva. Os públicos alvos da presente obra são: 1) profissionais (advogados, contadores, administradores etc) e os ministros (tais como pastores e obreiros lato sensu), para aquisição de conhecimentos para melhor gestão das igrejas nas quias atuam; e 2) cristãos evangélicos em geral, para que conheçam seus direitos e obrigações para com a igreja e a sociedade. O Livro possui uma linguagem acessível a todos, inclusive àqueles que não possuem conhecimento técnico na área jurídica.",
        author: "Francisco Tenório",
        price: 20.00,
        rank: 2.5,
        votes: 21,
        category: "Direito",
        image: "http://books.google.com/books/content?id=Vax5DAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70jHE5mFkivvCNNcjRp92pZkG5HElPiCt19bDXm_gtGLz7y15SjNZRdfYqm7tfUWp17BbMr-9ZMck7sNYgeJb324-zuKlOYzajbIJvwAInc79JB1Sq8tvjamr5jLjvThKcaIfyI&source=gbs_api",
        informations: "Uma obra inédita, na qual o autor cria a disciplina do &quot;Direito das Igrejas&quot;, que visa atender à crescente demanda das questões jurídicas inerentes ao mundo cristão evangélico"
    },{
        title: "Textos de Direito da Família: para Francisco Pereira Coelho",
        description: "O livro reúne atuais professores de Direito da Família de várias escolas de Direito do país, e alguns os jovens docentes e investigadores que, previsivelmente, lhes vão suceder. Os autores apresentam os traços fundamentais das leis da Família vigentes e as tendências que se desenham para um futuro próximo. A obra constitui um retrato de um Direito da Família que converge, na Europa, em torno dos direitos fundamentais dos cidadãos e da autonomia da vontade, para uma regulação justa, com os olhos postos na defesa dos mais frágeis. A Família emerge como a firme realidade de sempre, com roupas novas, ao serviço dos seus membros, no respeito pela sua identidade e dignidade. O livro é dedicado ao Prof. Doutor Francisco Manuel Pereira Coelho, que pode ser justamente considerado o fundador do Direito da Família moderno em Portugal.",
        author: "Guilherme de Oliveira",
        price: 17.48,
        rank: 2.5,
        votes: 16,
        category: "Direito",
        image: "http://books.google.com/books/content?id=CD7yCwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE717eCSiGFDRlXl0PgJEQ8Y6v68OAzFw01G20TZt2u2AsHJP9cIn_arcy_LRnqKgQOm845pOSBtSCq56vU5Oa2vU9CRShOs5N6nf4gEgR7ulZhgbd6R8A08CvpUDiuHjfseMH2yN&source=gbs_api",
        informations: "O livro é dedicado ao Prof. Doutor Francisco Manuel Pereira Coelho, que pode ser justamente considerado o fundador do Direito da Família moderno em Portugal."
    },{
        title: "Direito Do Trabalho: Estudos De Temas Atuais",
        description: "Nesta obra são abordados temas como o vínculo de emprego da profissional do sexo, dumping social, acidentes de trabalho, cumulação de adicionais de insalubridade e periculosidade e o monitoramento por imagens no ambiente de trabalho. Todas estas questões são atuais e os presentes estudos, realizados por alunos formandos do curso de Ciências Jurídicas e Sociais, apesar de não possuírem a pretensão de esgotar o tema, certamente são extremamente úteis para uma maior reflexão.",
        author: "Felipe Cittolin Abal",
        price: 1.99,
        rank: 4.5,
        votes: 28,
        category: "Direito",
        image: "http://books.google.com/books/content?id=VIRcBAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70oatrmYIFSuCL1Mu3OD2lFCK0WiimtHFPQ0zKyOtQwpjT3KJfIuUiOSWflBmEQDdhe00mFGhxEW3EWQ5oKkVdJUM1o3nQsmADhTojCPQemQRU42M1IYsUgye9JBo-duEg3T7qM&source=gbs_api",
        informations: "A partir da análise dos aspectos supramencionados de direito laboral, buscarseá resposta ao questionamento sobre a possibilidade da prática de dumping social caracterizar o dano moral coletivo e o consequente dever de indenizar."
    },{
        title: "Direito à saúde",
        description: "O direito à saúde decorre do direito à vida. Assim, em princípio, o conceito de saúde não comporta restrições ou delimitações de signi cado, exceto nos casos em que elas sejam plenamente justi cadas diante de um caso concreto, de forma racional e argumentativamente. A concretização da ideia de saúde exige atitudes. Ela não é um direito que se realiza por si só, pois demanda verbas e ações positivas. Todavia, a realidade nacional demonstra insatisfação da população com a forma pela qual a saúde vem sendo prestada pelo Estado, o que pode ser percebido pelo crescente número de demandas que deságuam no Judiciário ? situação cunhada por judicialização da saúde. Correlatas a essa realidade são as re exões atinentes aos desdobramentos que as demandas de saúde provocam no Sistema Jurídico e financeiro do Estado. Diante da inquietação apresentada surgiu a presente pesquisa que objetivou a análise da efetividade do direito à saúde a partir da premissa da participação e da proibição do retrocesso social.",
        author: "Cândice Lisbôa Alves",
        price: 19.90,
        rank: 2.5,
        votes: 22,
        category: "Direito",
        image: "http://books.google.com/books/content?id=mGOiAgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70-xpJhpnezmOYeTPp6EW20BXJT-II4j78cx5iOjy8ocpA1AV5j8vckMAa4tBBWgUaXFbUINADjELvS-z5VUJ2_8nojOmO78tLI1fk9PgdR6Ot18Xd8AemsvpEz8xD1TDZEcyIc&source=gbs_api",
        informations: "Entretanto, previamente, deve-se ressaltar a multiplicidade de informações e interpretações (DWORKIN, 2002, p. 290) advinda do termo direito e da expressão direito subjetivo, ou seja, a imprecisão semântica deles (ROSS, 2000, p. 106)."
    },{
        title: "Direito em diálogo de fontes",
        description: "A presente obra coletiva aborda a epistemologia jurídica em tempos de pós-modernidade de forma corajosa e científica. Muito embora, os temas de cada capítulo divirjam em propósitos relativos à expertise do respectivo pesquisador há elementos comuns que lhes albergam liames indissociáveis, dentre eles destacam-se: i) noção de sistema jurídico; ii) teoria da norma; iii) estrutura e função do direito; iv) direitos indisponíveis (quer sejam fundamentais ou de personalidade); v) direitos sociais. Revela-se, neste viés, metodologia com atualíssima função hermenêutica que evolui rumo à transdiciplinaridade, ao pluralismo e ao necessário diálogo entre as fontes jurídicas garantindo a criação, compreensão e aplicação do direito, como sistema social hipercomplexo e de segunda ordem.",
        author: "Fernando Rodrigues Martins",
        price: 19.90,
        rank: 4.5,
        votes: 30,
        category: "Direito",
        image: "http://books.google.com/books/content?id=HLeNAwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70xKotSbph73Id-_uzZHWFuChMI2-Yxz6W4AfoL5mFgASDjAGnAyoqlPRSJszN9gRt2neu-_VlUUJ5ee-qsbTZFxFuK2sFWdSPGloPnIbPLuKjCu4sWO7xYye2CgxMmIE-aLwV6&source=gbs_api",
        informations: "O direito posto e o direito pressuposto. 8a. ed. rev. e ampl. São Paulo: Malheiros, 2008, p. 205 397 BRITTO, Carlos Ayres de. O humanismo como categoria constitucional. Belo Horizonte, Fórum, 2007, p. 64 398 GRAU, Eros Roberto. O direito..."
    },{
        title: "A teoria da aparência e seus reflexos no direito brasileiro",
        description: "A confiança e a aparência são valores contidos em diversas normas jurídicas pátrias, seja de forma positivada ou através dos princípios jurídicos abalizados pelo direito. Em algumas situações, haverá um aparente conflito entre a enganosa visualização da exterioridade do ato e a legítima correspondência do real, cuja solução, pelos juristas, tem sido buscada pela denominada teoria da aparência, a qual, pela sua importância e pouca exploração acadêmica, merecia uma contribuição e atenção maior por parte da doutrina jurídica pátria. A presente obra, assim, tenta resgatar os valores históricos da teoria da aparência, além de fundamentar a legitimidade do instituto como princípio, ao lado da própria boa-fé e confiança nas relações jurídicas, que encontram inspiração na dignidade da pessoa humana, como fundamento do Estado Democrático de Direito. É também objeto do livro a identificação sobre os elementos da teoria da aparência e seus reflexos em alguns ramos do Direito, com maior enfoque no Direito Empresarial, no qual há uma grande manifestação de situações aparentes que demandam proteção do princípio jurídico. O livro, enfim, busca o enriquecimento acadêmico de tão importante tema e deixa também um convite para que sejam elaborados novos trabalhos, com inspiração nos fundamentos da confiança e da boa-fé que as pessoas depositam nas relações jurídicas, em respeito à dignidade e a uma maior humanização na atual sociedade juridicamente organizada.",
        author: "Mateus Bicalho de Melo Chavinho",
        price: 19.90,
        rank: 3.7,
        votes: 21,
        category: "Direito",
        image: "http://books.google.com/books/content?id=X1iPAwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73-g_7WWRR_3Pp4h5TNqC_CTP70v9nBBAHWOpnVDBPNhzxAbQfUcJAtqdPFAwc5W5o_112xzhweFUO2yxESPhwayE-4hZrjl-EGrjcorp_3OFGhjz0GdVGvYPMu7-j6M9LXVsS6&source=gbs_api",
        informations: "Direito civil: curso completo. cit. p. 46. 121 Sobre algumas das divisões do Direito Positivo, podem ser mencionadas as divisões entre o Direito geral e particular, Direito comum e especial, Direito regular e singular, Direito público e privado,..."
    },{
        title: "Direito Civil",
        description: "No início deste séc. XXI promulgou-se no Brasil um novo Código Civil. Embora tímido em suas inovações, cede o novo Código a uma antiga pressão social e acadêmica, fazendo constar de seu texto, pela primeira vez, os Direitos da Personalidade. Com a boa nova vieram as polêmicas que, de forma curiosa, mantiveram-se presentes mesmo após doze anos de intensificação de estudos sobre o assunto e da massificação de litígios judiciais instaurados (e solucionados) com base na nova codificação. Este cenário duvidoso fez com que os Direitos da Personalidade fossem tratados nesta obra de forma sistêmica e apresentados segundo uma teoria geral que leva em consideração uma premissa: sua fundamentação em um ideal de liberdade. Assim, deságua-se na análise da faculdade de agir e da pretensão daqueles que se vêm instigados socialmente a fazer uso ou mesmo proteger o próprio nome, a imagem, a vida privada, a liberdade e o corpo segundo um direcionamento ora expansivo, ora restritivo, de acordo com preceitos construídos cientificamente.",
        author: "André Couto e Gama",
        price: 19.90,
        rank: 3.7,
        votes: 27,
        category: "Direito",
        image: "http://books.google.com/books/content?id=NbONAwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71DrCC1zJFrQZRFhHRYYJTmxvl0YVgVvCRauPh6Sq3ZCWidujhyJDIJGwFvVesfC33-3HaeOXimUrGriRtYBWbaw_w56zoezyMDYPmjmZMF1mWd3UWyiV_GBzeodk8BTAOZaGA3&source=gbs_api",
        informations: "Código civil alemão; direito das obrigações; parte geral. Tradução Armindo Edgar Laux. Porto Alegre: Fabris, 1983, 214p. WESTERMANN, Harry. Código civil alemão; parte geral. Tradução Luiz Dória Furquim. Porto Alegre: Fabris, 1991,..."
    },{
        title: "ENGENHARIA DE COMPLETAÇÃO DE POÇOS",
        description: "Uma vez perfurado um poço de petróleo e comprovada sua viabilidade comercial, ele precisa ser completado para permitir o fluxo de petróleo e gás natural para fora da formação e, posteriormente, para a superfície.Esse processo inclui: revestimento, pressão e avaliação de temperatura, e instalação apropriada de equipamento para garantir a eficiência do escoamento para for a do poço. Recentemente, esses processos foram bastante aprimorados pelas novas tecnologias. A presente obra resume e explica esses avanços ao mesmo tempo em que oferece conselhos de especialistas para a implantação desses novos e avançados sistemas de engenharia.",
        author: "Wan Renpu",
        price: 183.24,
        rank: 4.5,
        votes: 48,
        category: "Engenharia",
        image: "http://books.google.com/books/content?id=55hbCwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72kUC_GhvviVHXro1EKu28JCdqjiTwwpveXCFlcZMSkDLHCcyJ_krPsIf7vr7S1WrY3hUE41qwk6TfXIrtskg8UzP7_bNr6PkfDnOwC1_9MC8l-E4zc0O5ug_LiXH-VJYDBv97V&source=gbs_api",
        informations: "Uma vez perfurado um poço de petróleo e comprovada sua viabilidade comercial, ele precisa ser completado para permitir o fluxo de petróleo e gás natural para fora da formação e, posteriormente, para a superfície.Esse processo inclui: ..."
    },{
        title: "Estabilidade de Taludes (2ª edição)",
        description: "O clássico Estabilidade de taludes, de Denise M. S. Gerscovich, acaba de ganhar uma nova edição. O livro, responsável por apresentar aos estudantes e profissionais de Engenharia os temas mais importantes relacionados ao estudo e análise de estabilidade de taludes, agora inclui diversos exercícios resolvidos, muito úteis para estudantes de graduação. Os exercícios explicam passo a passo a aplicação da teoria e os cálculos utilizados na solução dos problemas. Foram feitas também algumas alterações no texto e nas figuras, resultado de observações realizadas por alunos quando da utilização do livro. Mais atual e completa, a obra é uma referência obrigatória em cursos de graduação em Engenharia Civil, assim como importante referência para cursos de pós-graduação e para profissionais da área. Denise M. S. Gerscovich possui graduação em Engenharia Civil e mestrado e doutorado em Mecânica dos Solos pela Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio). É Professora Associada do Departamento de Estruturas e Fundações e, desde 2003, membro do Programa de Pós-graduação em Engenharia Civil da Faculdade de Engenharia da Universidade do Estado do Rio de Janeiro (Uerj). Na Associação Brasileira de Mecânica dos Solos e Engenharia Geotécnica (ABMS) foi vice-presidente no biênio 2003-2004 e presidente do núcleo Regional do Rio de Janeiro no biênio 2005-2006, além de membro eleita do colegiado da ABMS de 2007 a 2011. É membro do corpo de revisores de revistas como Soils & Rocks, Water Resources Research e Geotecnia, entre outras, e participou na elaboração do Manual Técnico de Encostas da Fundação Instituto de Geotécnica do Município do Rio de Janeiro (GeoRio).",
        author: "Denise M. S. Gerscovich",
        price: 55.25,
        rank: 3.7,
        votes: 29,
        category: "Engenharia",
        image: "http://books.google.com/books/content?id=ec3vDAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70fPKE4sOuH_mYh2SLvI2rOCkILysOWePda4_AUyWoi0oZ7u2TdxDassNKCL17ucRAeCIfrhrG2M9G6o5piCSA0yfkpWB1bPv9syaAgM4Zj4-kU_yg3BHuZfxfoKcb-Le0l3IzH&source=gbs_api",
        informations: "Denise M. S. Gerscovich possui graduação em Engenharia Civil e mestrado e doutorado em Mecânica dos Solos pela Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio). É Professora Associada do Departamento de Estruturas e ..."
    },{
        title: "Engenharia de Requisitos",
        description: "O PMI aponta que a gestão de requisitos é uma competência fundamental na gestão de projetos, mas também destaca que é a causa de 47% dos projetos que fracassam. Trata-se de uma das disciplinas fundamentais da Engenharia de Software, e talvez uma das mais negligenciadas. Os requisitos são a base para o trabalho de quase todas as atividades do projeto e uma falha pode provocar um impacto em cascata. Este livro apresenta a Engenharia de Requisitos de um ponto de vista prático com diversos exercícios e estudos de caso, sendo, principalmente, voltado à comunicação com o cliente. O conteúdo foi elaborado a partir da experiência prática dos autores e de referências de mercado, como o PMBOK® Guide (do PMI) e os guias de Análise de Negócios (tanto do PMI quanto do IIBA). Buscou-se também abranger todo o conteúdo da ementa da certificação em Engenharia de Requisitos do IREB. Neste livro você irá aprender sobre a Engenharia de Requisitos: • O que ela é e seu papel na Engenharia de Software. • Sua importância para os projetos. • Os conceitos que a fundamentam. • Seus três grupos de atividades: elicitação, análise e gestão. • As técnicas mais comuns de aplicar, com suas vantagens e desvantagens.",
        author: "Carlos Eduardo Vazquez",
        price: 43.00,
        rank: 4.3,
        votes: 40,
        category: "Engenharia",
        image: "http://books.google.com/books/content?id=gA7kDAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73pFQ5iKQLP9p8XBwicuh5f5BfClB0A7m-E-jUE1LSmr-SHeeenLzAuVSEkfyMRA1YsajL6U6CyFlbjmfRXoiabZXJl7fIbxuFuyZV0fop-so19wK53dvbEtXZUP92C7rB1D-_j&source=gbs_api",
        informations: "Este livro apresenta a Engenharia de Requisitos de um ponto de vista prático com diversos exercícios e estudos de caso, sendo, principalmente, voltado à comunicação com o cliente."
    },{
        title: "Princípios de Engenharia Ambiental",
        description: "Este livro foca os aspectos mais importantes da tomada de decisão em engenharia ambiental. O texto utiliza o conceito de balanço de massa como ferramenta para a solução dos problemas mais comuns da área. Os conteúdos relevantes da química, da biologia, da hidrologia, da qualidade da água, do tratamento de efluentes domésticos e industriais, da poluição atmosférica e sonora e da gestão de resíduos sólidos urbanos são apresentados de forma detalhada.",
        author: "Mackenzie L. Davis",
        price: 144.00,
        rank: 4.5,
        votes: 52,
        category: "Engenharia",
        image: "http://books.google.com/books/content?id=SPa0DAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71q_lO27oSkbcgD_s3aN_0lSX4F_noQkwr3VD6B1JdxX0_d-JhhdIL8mrqkJXSJu7nLevx5iGwaqn6J-fx4WB_FjFRoq5OhCAx_PaRXiVdXq2HMB7Lt1KEmjhRhGvBI7zx30daj&source=gbs_api",
        informations: "Este livro foca os aspectos mais importantes da tomada de decisão em engenharia ambiental."
    },{
        title: "Conselho Regional De Engenharia E Agronomia Do Acre",
        description: "Conselho Regional de Engenharia e Agronomia do Acre (CREA/AC) Apostila COLETÂNEA CONCURSO PÚBLICO. Matemática e Português: para TODOS OS CARGOS. Apostila COLETÂNEA para CONCURSO PÚBLICO, VESTIBULAR ou ENEM. Matemática e Português (Língua Portuguesa, Gramática, Redação). Para TODOS os concursos públicos e VESTIBULARES do Brasil: São 241 páginas de material completo e de alta qualidade. CONTEÚDO: Português e Técnicas de Redação; Matemática e Matemática Financeira.",
        author: "Lisandro Demetrius",
        price: 29.90,
        rank: 3.5,
        votes: 20,
        category: "Engenharia",
        image: "http://books.google.com/books/content?id=iXJkDAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72SFGbvLEDuK9cXc6g5N2EUFu_pbAd2YLQIulhNjl4_V_ipBqDXoGGJEm0JVbRjQu-bNqWHttudLM2WNtQrvTJynNey3VRSI9HrPq7Z1xrFHebdjihSd4DgclpoIu99JGK1ZBMI&source=gbs_api",
        informations: "Conselho Regional de Engenharia e Agronomia do Acre (CREA/AC) Apostila COLETÂNEA CONCURSO PÚBLICO."
    },{
        title: "Ciências Ambientais para Engenharia",
        description: "Segundo a resolução do Conselho Nacional de Educação CNE/CES 11, de março de 2002, no art. 6o, parágrafo 1o, todo curso de engenharia deverá dispor de 30% de sua carga horária geral para o desenvolvimento dos tópicos que compõem o \"Ciclo Básico\". Neste conjunto, o tópico \"Ciências do Ambiente\" tem ganhado destaque devido aos esforços em tornar sustentáveis os processos produtivos e em evitar/mitigar os impactos ambientais. O objetivo deste livro é propiciar uma visão integrada e holística do meio ambiente, e estudar as principais atividades e os impactos ambientais ocasionados e que estejam relacionados com a Engenharia",
        author: "Rafael Capaz & Luiz Nogueira",
        price: 62.99,
        rank: 3.4,
        votes: 14,
        category: "Engenharia",
        image: "http://books.google.com/books/content?id=aTVeBgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71BPbf1Lt8LHt6z35Nwt0mqaq1hb4XTY75LirdujbthuV3_lrGB5MKmYGO2OeYbT5I_W0ZKUD1ffx7Niml7Bwb1Yj3p1sQAbSlEgjo0lIC0ibRnoqN33_XKoRJgJIzJUdadG6Ac&source=gbs_api",
        informations: "Vários exemplos desoluções de engenharia jápodem serencontrados, como tomadas d'água em pente (evitando ousode água depior qualidadedosníveis mais profundos do reservatório),ou turbinas bulbo permitindo aproveitar baixas..."
    },{
        title: "Fundamentos Da Engenharia de Software",
        description: "A motiva��o deste livro � exemplificar os conceitos de Padr�es de Projetos utilizando a linguagem de programa��o Java, sendo a constru��o uma compila��o das aulas produzidas com o intu�do de facilitar o entendimento do assunto abordando os seguintes temas: Paradigma Orientado a Objetos que introduz o leitor nos conceitos do POO; Linguagem de Modelagem Unificada para apresentar a simbologia UML dos conceitos de POO; Linguagem de Programa��o Java apresentando essa poderosa linguagem de programa��o orientada a objetos para exemplificar os padr�es de projeto; e Padr�es de Projetos que neste livro aborda os mais referenciados nas academias, sendo eles o GRASP e GoF.",
        author: "Álvaro Pinheiro",
        price: 9.90,
        rank: 3.5,
        votes: 12,
        category: "Engenharia",
        image: "images/shop/shop-01.jpg",
        informations: "A motiva  o deste livro   exemplificar os conceitos de Padr es de Projetos utilizando a linguagem de programa  o Java, sendo a constru  o uma compila  o das aulas produzidas com o intu do de facilitar o entendimento do ..."
    },{
        title: "Ciências Ambientais para Engenharia",
        description: "Segundo a resolução do Conselho Nacional de Educação CNE/CES 11, de março de 2002, no art. 6o, parágrafo 1o, todo curso de engenharia deverá dispor de 30% de sua carga horária geral para o desenvolvimento dos tópicos que compõem o \"Ciclo Básico\". Neste conjunto, o tópico \"Ciências do Ambiente\" tem ganhado destaque devido aos esforços em tornar sustentáveis os processos produtivos e em evitar/mitigar os impactos ambientais. O objetivo deste livro é propiciar uma visão integrada e holística do meio ambiente, e estudar as principais atividades e os impactos ambientais ocasionados e que estejam relacionados com a Engenharia.",
        author: "Rafael Capaz & Luiz Nogueira",
        price: 62.90,
        rank: 3.3,
        votes: 35,
        category: "Engenharia",
        image: "http://books.google.com/books/content?id=aTVeBgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72v1yOacUkR-w-CRm9dY9htj651lOj6KBSGX6MYatyXiGy6f8tdtVvZClPdhqk7SnJ5Av-fg0PRW2OZHTN1C85j8vn70C7i-TSsOmD3k5ZN1Fj2d9xpI0ODaEkQAai-UxhBBUWt&source=gbs_api",
        informations: "Sustentabilidade e Engenharia. Luiz Augusto Horta Nogueira e Rafael Silva Capaz. Conceitos. apresentados. neste. capítulo. •Fatores dainsustentabilidade atual •Desenvolvimento Sustentável •Triple Bottom Line •Ecologia Industrial. 1.1."
    },{
        title: "Guia do pão-duro",
        description: "As mais interessantes e bem-humoradas dicas pensadas pelo autor, um mestre na arte de guardar o rico dinheiro. Você vai ver que o pão-duro evoluiu. Ele deixou de ser aquela pessoa que não abria a mão para nada - estilo Tio Patinhas - e se tornou moderno, bem-humorado, que não se deixa levar pelo consumismo. Comprar é bom. Economizar é melhor ainda.",
        author: "Gustavo Nagib",
        price: 16.80,
        rank: 2.5,
        votes: 12,
        category: "Esoterismo",
        image: "http://books.google.com/books/content?id=5z6reUq-5s4C&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73obLred7v3YjMi44ps1h3DWFvYp_s_NKTyApeN7OfZpKUQEvDl0d-aWJMZa3C5fwDEAPbzjz8ZyL5_fyE1Py1U2Ly6l5GM58JkMa7t_aRTBBVQejVTGpjfB-iOo-pM43MsiuI9&source=gbs_api",
        informations: "O PÃO-DURO NA DANÇA DOS SIGNOS E PELO CAMINHO DO ESOTERISMO ÁRIES (21 de março a 20 de abril): o ariano é chamado de“a criança do zodíaco”, por ser o primeiro dos signos. Por ser criança, dá para imaginarmos uma total..."
    },{
        title: "Esquin de Floyrac",
        description: "Depois do sucesso do primeiro e segundo volumes da Trilogia do Templo, Z. Rodrix nos traz de volta às aventuras da série sobre o Templo de Yahweh, em Jerusalém, cuja construção se tornou o símbolo essencial de todo o esoterismo ocidental. Ambientado entre os séculos XIII e XIV, este romance fala sobre a forte relação entre os Templários e a maçonaria. A Trilogia do Templo constitui, ainda, um marco na nossa literatura, uma obra única no Brasil, que pode, sem exagero, ser comparada aos grandes romances épicos da literatura universal. Terceiro e último volume da saga, Esquin de Floyrac: O fim do Templo mantém a linguagem simbólica dos seus predecessores e fecha a série com um assunto polêmico: a ligação entre os Templários e a maçonaria em um dos momentos mais terríveis da História da humanidade — a destruição da ordem do Templo pelo Reinado da França e pela Igreja de Roma.",
        author: "Z. Rodrix",
        price: 54.90,
        rank: 3.1,
        votes: 28,
        category: "Esoterismo",
        image: "http://books.google.com/books/content?id=0fqoDgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE727lnlbyTtG5o3KKs6jd28Cjqxuc1c2_TsVK_n7WH10kUEUNVLbQlONrwne6DlQbs0dTmTgvypHG0gCNCxY30VY_zHY1ElurmMUt6aUsmhyg6Dduf0IUspBVZ_zkiezgug_OU8D&source=gbs_api",
        informations: "Terceiro e último volume da saga, Esquin de Floyrac: O fim do Templo mantém a linguagem simbólica dos seus predecessores e fecha a série com um assunto polêmico: a ligação entre os Templários e a maçonaria em um dos momentos mais ..."
    },{
        title: "L'esoterismo islamico",
        description: "Sussiste nell’Islam una corrente esoterica – il Sufismo – in cui si manifesta quella philosophia perennis che contraddistingue tutte le grandi civiltà orientali, e che mostra un’intima sintonia anche con il patrimonio spirituale del Medioevo cristiano. Questo libro esplora sinteticamente i cardini di quel pensiero, e mette in luce, attraverso un’ampia scelta di testi e ricorrenti paralleli con altre culture, la fondamentale affinità di dottrine metafisiche assai distanti tra loro, ma che riguardo a verità universali si esprimono in termini affini.",
        author: "Alberto Ventura",
        price: 29.90,
        rank: 3.5,
        votes: 20,
        category: "Esoterismo",
        image: "http://books.google.com/books/content?id=heP4DQAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71zHpPd-2_mGKKjvjblfRmWDIdN6sa6Gp0twQuq_4SuKucg0ABMGy2yb7PtYRTR0cJkL-CcpPasroMfjnOEfx3FMK_TS9QxaIk_xWTjonKH1Xdr0OOG4kl5lRc13mgKBH10Bk3_&source=gbs_api",
        informations: "Sussiste nell’Islam una corrente esoterica – il Sufismo – in cui si manifesta quella philosophia perennis che contraddistingue tutte le grandi civiltà orientali, e che mostra un’intima sintonia anche con il patrimonio spirituale ..."
    },{
        title: "Dalí Entre Dios y el Diablo",
        description: "Dal�, entre Dios y el Diablo. Tradici�n, esoterismo, pol�tica, erotismo y perversi�n en su vida y en su obra.Pocos pintores han resultado tan pol�micos como Salvador Dal�, genio para unos y abyecto mediocre, para otros. Sin embargo, hasta ahora no se ha valorado en su justa medida lo que constituy� el n�cleo esencial de ecuaci�n personal: sus relaciones con el mundo m�gico y misterioso.A lo largo de esta obra estas relaciones quedar�n establecidas en su justa medida. Dal� hac�a de la Tradici�n Herm�tica, de la sexualidad m�gica, de la alquimia y del mundo m�stico, el centro de la existencia.A lo largo de su vida estas relaciones fueron variando de rumbo. Para su desgracia, Dal� fue, ante todo un autodidacta en el terreno de la magia y de las relaciones con el mundo de lo paranormal. Y finalmente termin� extravi�ndose.El balance final de la vida del pintor evidencia un fracaso. Si bien durante su vida experiment� un impulso hacia la trascendencia, en sus �ltimos a�os, este impulso es alejado del eje central de su vida.Este libro es la cr�nica del fracaso de la aventura espiritual de Salvador Dal� que no fue \"el m�s bajo de los dioses\", sino el pintor m�s alto del Siglo XX.",
        author: "Ernest Milà",
        price: 29.90,
        rank: 3.5,
        votes: 20,
        category: "Esoterismo",
        image: "images/shop/shop-01.jpg",
        informations: "Dal , entre Dios y el Diablo."
    },{
        title: "El Mago Blanco y la carta ambiciosa",
        description: "París es conocida por ser la Ciudad de la Luz, pero también alberga tinieblas. Magia, esoterismo, alquimia, ingredientes que dotan a esta ciudad de un halo claroscuro. Liang Shui, una valiente inmigrante sin recursos económicos, se ve envuelta en una espiral de acontecimientos que cambiarán su vida para siempre. De la mano de su entrañable amiga y de un inspector de policía, descubrirá los secretos que París esconde.",
        author: "Paloma Domínguez Quejigo",
        price: 29.90,
        rank: 3.5,
        votes: 20,
        category: "Esoterismo",
        image: "http://books.google.com/books/content?id=lgZVDgAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70xQqtMCvALKkOlFx43XZJ_qRTImYQZhGQ4c2EYUk51tPtS63C3_1xZiEHKCe4IMYSy11dGbuT7dGGmcx2vCXeFDSk8kONqeIAfeRLyIYenXN66U1RdRn4Uj2pe-NnZN7pwdso1&source=gbs_ap",
        informations: "Dopo la morte di René Guénon è stata curata la raccolta in volumi dei suoi articoli, raggruppati, per quanto possibile, in base all’argomento trattato."
    },{
        title: "Esoterismo Cristiano",
        description: "Dopo la morte di René Guénon è stata curata la raccolta in volumi dei suoi articoli, raggruppati, per quanto possibile, in base all’argomento trattato. Sotto il titolo di Considerazioni sull’Esoterismo Cristiano sono stati raccolti alcuni articoli relativi alla tradizione cristiana ed alla sua componente esoterica, articoli che non hanno trovato posto in altre raccolte ma che, comunque, non sono gli unici in cui René Guénon si occupa dell’esoterismo cristiano. Un libro consigliato a tutti.",
        author: "René Guénon",
        price: 29.90,
        rank: 3.5,
        votes: 20,
        category: "Esoterismo",
        image: "http://books.google.com/books/content?id=VlQDDgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70dzaa_9SL9X4WnhsOUYnwcT4M1dUqu5LmrTpflfLZoH9yQMujKkXn6FpfiEzQiaDIH2MLhMk8ta9evCDGd-206WLA39l9E1hSQlwaK0KWHu3dnByEawAF6A80Jt2XD0xXBPlA7&source=gbs_api",
        informations: ""
    },{
        title: "Mystica Aeterna: La Rosa+Croce di Rudolf Steiner",
        description: "Per la prima volta tradotti in lingua italiana, i Rituali della Mystica Aeterna, l'Ordine Esoterico di Rudolf Steiner (1861-1925), fondatore della Scienza dello Spirito o Antroposofia. Conosciuto anche con il nome di Servizio di Misraim e Culto Cognitivo, l'Ordine diede un importante impulso per la successiva fondazione del movimento e della Società Antroposofica (1913-1924). Nell'ambito della Mystica Aeterna, Steiner rinnova gli Antichi Misteri nei Nuovi Misteri, attraverso l'unione della corrente solare di Caino e quella lunare di Abele nel Cristo, quale centro dell'evoluzione cosmica ed in Christian Rosenkreutz quale suo rappresentante. Si tratta dunque dell'incontro della corrente Antroposofica e di quella Rosa+Croce. Parallelamente l'Ordine entra in contatto con altri importanti ordini esoterici come la Golden Dawn, nella sua successiva incarnazione come Stella Matutina, di cui verrà riconosciuto quale Capo Segreto Il libro contiene la traduzione italiana dei Rituali dell'Ordine, nonché la storia e l'esoterismo rosicruciano della Mystica Aeterna ed il commento a tutti i testi rituali, un lavoro possibile solo attraverso una profonda conoscenza ed esperienza dell'Antroposofia. L'Autore: Giorgio Tarditi Spagnoli è libero ricercatore di Scienza dello Spirito, l’Antroposofia fondata da Rudolf Steiner. Unisce il rigore dell'indagine scientifica della natura alla comprensione del mondo dell’anima e dello spirito, nell’uomo e nel Cosmo. È Naturopata, Floriterapeuta, Pranoterapeuta e Counselor. Ha conseguito la laurea in Scienze Naturali e il dottorato in Scienze della Formazione, con una tesi in Psicologia Archetipale ed Evoluzione. www.naturasofia.it www.misteriosofia.it",
        author: "Giorgio Tarditi Spagnoli",
        price: 29.90,
        rank: 3.5,
        votes: 20,
        category: "Esoterismo",
        image: "http://books.google.com/books/content?id=CmEYDgAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE738EmCmIlQfIL8ZbdIfb003FADXAsYi6367dlQhS-WyDCAz8cfmpeh4B6kPcUMfLav_paOn7ZFHywIHRIjFYiaDXzGLAHoAMcwWTp7bZTyYNfCyD0wCjdTOix5Iz0imXHMb9Uby&source=gbs_api",
        informations: ""
    },{
        title: "Ordine dei Cavalieri Mistici - Manifesto",
        description: "Il Manifesto contiene la storia, lo statuto, le regole di vita e la \"Missione\" che il \"Progetto\" Ordine dei Cavalieri Mistici porta avanti da anni come: la ricerca della \"Saggezza\", disseminata dappertutto nel mondo, la diffusione di un Esoterismo, una Magia e una Medicina Naturale puliti, lontani da superstizioni e speculazioni, con un approccio razionale e scientifico. Grazie al magistrale lavoro del Maestro fondatore il \"Magister Solitarius\", tutti gli uomini di buona volontà adesso possono accedere alla\"Sagezza Segreta\", celata ai più dal potere.",
        author: "Francesco Antonio Riggio",
        price: 16.17,
        rank: 4.1,
        votes: 35,
        category: "Esoterismo",
        image: "http://books.google.com/books/content?id=E-S7DQAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71-XRX_te2WkhrjKLXcVJORQ3QAcqIUDe6927y98NS_O_haTQf9KHE5ZRRzgc4t5dkNFyf-jP5xMrGwZfvwGsSs327Im6mA7fCIS0ZTRj571NNSUOkHrT7i_OHiUciM-o_-0IdW&source=gbs_api",
        informations: "Il Manifesto contiene la storia, lo statuto, le regole di vita e la &quot;Missione&quot; che il &quot;Progetto&quot; Ordine dei Cavalieri Mistici porta avanti da anni come: la ricerca della &quot;Saggezza&quot;, disseminata dappertutto nel mondo, la diffusione di un ..."
    },{
        title: "O Mapa da Felicidade",
        description: "Heloísa Capelas é especialista no desenvolvimento do potencial humano e acredita que é a partir do autoconhecimento que as pessoas poderão encontrar a felicidade. Afinal, elas se sentem infelizes, mas não sabem como fazer uma verdadeira mudança que as leve ao encontro daquilo que poderá suprir esse vazio. A felicidade é idealizada por fatores externos que, quando alcançados, não satisfazem porque internamente falta o essencial: o amor-próprio. Então, é fundamental ter um encontro consigo mesmo, é preciso fazer o exercício do autoconhecimento a fim de conhecer seus pontos fortes e fracos, planejar as mudanças que deseja, elevar a autoestima e viver intensamente o amor por si mesmo. Em O mapa da felicidade, o leitor será convidado a viver uma revolução interna.",
        author: "Heloísa Capelas",
        price: 20.90,
        rank: 3.2,
        votes: 30,
        category: "Esoterismo",
        image: "http://books.google.com/books/content?id=L_q-AwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72ZSR3wp3fcPtw7834fB5FcUrFxwlzjlf7hz3yefQepVz48WM0vWQYzHBlKJGIyZOKlfjCtIOJ9PMlqGeBdJw7cjXdtB9m_LPl_yZANmvQ9n5nFQ7T2PPpjCxy_OliIX8K26Gdb&source=gbs_api",
        informations: "Esqueça esoterismo, questões sobrenaturais ou fenômenos afins (para muitos, isso é uma grande bobagem!), o processo de procura pela felicidade é coisa séria: envolve a ciência do comportamento humano e os recentes estudos de ..."
    },{
        title: "Storia dell'alchimia",
        description: "L’evoluzione dell’alchimia ha visto sovrapporsi nei secoli concetti che hanno aperto la strada alla scienza moderna, malgrado essa abbia conservato a lungo connotati mistici ed esoterici, al punto che perfino i processi e i simboli alchemici acquistavano significati astrusi e altisonanti, spesso senza alcuna connessione con quelli prettamente chimici e fisici. Il volume, in questa seconda edizione ampliata e arricchita di immagini, presenta la storia dell’alchimia e dei suoi sviluppi nei secoli, partendo dalle ricerche dei saggi cinesi e indiani e dei primi colonizzatori della Mesopotamia per proseguire con la scuola di Alessandria e con la nascita delle teorie dei filosofi ionici, per poi illustrare in dettaglio la comparsa del concetto di atomo alla base della concezione della materia dei filosofi della Magna Grecia e la successiva visione filosofica del mondo e delle idee di Platone e di Aristotele. Il racconto prosegue con una ampia descrizione del contributo allo sviluppo dell’alchimia degli alchimisti arabi e mussulmani, di quello degli scolastici e degli umanisti del Medioevo per continuare con quello degli enciclopedisti e perfino dei moderni alchimistici fino a quello degli ultimi epigoni della ‘Grande Opera’, comparsi in Europa e soprattutto negli Stati Uniti e nell’America latina nell’Ottocento e nel Novecento.",
        author: "Salvatore Califano",
        price: 29.90,
        rank: 3.5,
        votes: 20,
        category: "Esoterismo",
        image: "http://books.google.com/books/content?id=uyawDAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73zjhqj9aExV66vdHTqZTnuFri15b0ejKrJfW63rjbAkQeHi_p1vp5tPMz0JNFzD8b4aulB5d9xhsgCWuEf1nSKYpYupdH9fJ7zMP_LvmCmiky_TZ9SNyjUpl9F6Q-8cqOWJKBk&source=gbs_api",
        informations: "L’evoluzione dell’alchimia ha visto sovrapporsi nei secoli concetti che hanno aperto la strada alla scienza moderna, malgrado essa abbia conservato a lungo connotati mistici ed esoterici, al punto che perfino i processi e i simboli ..."
    },{
        title: "Mauricio - A história que não está no gibi",
        description: "Com mais de 80 anos de vida e quase 60 de carreira, Mauricio de Sousa tem uma história tão fascinante quanto os personagens da Turma da Mônica, que seguem encantando gerações de leitores. A paixão pelos quadrinhos começou ainda criança, no interior de São Paulo. Foi com alguns gibis encontrados no lixo que aprendeu a ler e a sonhar. A vida não era fácil e Mauricio desde cedo precisou trabalhar para ajudar em casa. Encarou os mais diversos empregos – de datilógrafo a repórter policial – até resolver se dedicar totalmente aos desenhos e acreditar, contra tudo e todos, que poderia tirar seu sustento daquilo que mais amava fazer. O esforço valeu a pena. Suas criações ganharam o Brasil e boa parte do mundo, abrindo portas e lhe rendendo prêmios. A Mauricio de Sousa Produções já vendeu mais de 1 bilhão de gibis, criou quase 400 personagens e tem mais de 3 mil produtos licenciados. E a Turma da Mônica é hoje uma das marcas mais fortes do país. Agora ele conta, com a mesma graça, inocência e alegria de suas revistinhas, todas as suas aventuras, travessuras e os planos nem tão infalíveis assim: a entrada na lista negra da imprensa em plena ditadura, os personagens que nunca foram publicados, a peça teatral que foi um fiasco e o momento em que quase foi à falência. Também compartilha o processo de criação de uma revistinha, o que fez para transformar tantos sonhos em realidade e como, até hoje, continua se reinventando.",
        author: "Mauricio de Sousa",
        price: 28.90,
        rank: 3.9,
        votes: 29,
        category: "Gibis",
        image: "http://books.google.com/books/content?id=cCclDwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71__2lFeh_edlVX8uHxSQKoSaZ4GDcia_u2sk5dzgAVSKBn2bwS-wHuhfzYh66sSVFytS-VUNPaaibPt3E0TA5Q5ZbAOvWAcuvGYOXuMa8UbDAjImmU6BKDAP5bfluYJQwu_5vM&source=gbs_api",
        informations: "Suas criações ganharam o Brasil e boa parte do mundo, abrindo portas e lhe rendendo prêmios. A Mauricio de Sousa Produções já vendeu mais de 1 bilhão de gibis, criou quase 400 personagens e tem mais de 3 mil produtos licenciados."
    },{
        title: "Niyazi-i Mısrî (Ks)",
        description: "Niyazi Mısrî (ks) Hazretleri, Yunus Emre , Fuzulî, Nesimî ve diğer Erenler gibi her okuduğumda yüreğimi heyacanlara gark eden Hakk Dostlarındandır. Ondaki yüksek derunî anlayış ve anlatış kendine mahsus bir özellik ve güzelliktir. Çok ileri düzeyde bir Zâhiri İlim tahsilini, Ehliyetli Eren Ümmî Sinan Baba gibi bir usta elinde Bâtınî Edeble tamamlamıştır. Yaşadığı ve eskiden süregelen Medrese kadızâdeleri ile Hakk Erenler kavgasında hak safta yerini almış ve bedelini de ağır ödemiştir. Dinmeyen bir fırtına içinde geçen ömrünün son yıllarında yine Fitnecilerin fitnesiyle ve ne yazık ki, Sultan Fermanıyla son kez sürüldüğü Limni Adasına götüren gemi Anadolu kıyılarından açılınca göz yaşları içinde : “Osmanlı sülâlesinin inkirazı için dördüncü semâya bir kazık çaktım! Bu kazığı benden başka kimse çıkaramaz!” demiştir..",
        author: "Emre Sarı",
        price: 6.88,
        rank: 2.5,
        votes: 10,
        category: "Gibis",
        image: "http://books.google.com/books/content?id=K5C4DgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE717wyFx4HRCOlO42085i2MmGy37fhRHCybVkAuWIrw0HbYJ5YFRQC5b8k4t2-4nWmPBOxcak5t8_64K4z9WA2_OM-jdY85bngL9CLIrvhIpdR8BaDzk2h38PTPInhLcNfGVigEO&source=gbs_api",
        informations: "Niyazi Mısrî (ks) Hazretleri, Yunus Emre , Fuzulî, Nesimî ve diğer Erenler gibi her okuduğumda yüreğimi heyacanlara gark eden Hakk Dostlarındandır."
    },{
        title: "İçimden Geldiği Gibi",
        description: "Gökyüzünün saçlarına astım umutlarımı, Düşünden vurulanlar için, Varsa nasipte kısmette, kim bilir belki beni vesile kılarsın, Yaralarını sarmak isteyenlere... Rızkım senin lutfeceğin maneviyattır Dağıtmak olsun nasibim, elimi erdireceğin cümle kullarından dilediklerine...! * * * Hoş geldin çocuk, güzel geldin, ne hikayeler okudun, ne hikayeler dinledin... Kimi zaman, yazarlardan etkilendin, Bu yüzden değil midir? Başkaları yazıyor şimdi hikayemi; Başkaları da bende okuyacak kendi hikayelerini dedin... Kimi gün soluksuz, aklını kaybedercesine doyurdun zihnini, Sonra katık ettin kendindekileri, harmanladın ne var ne yoksa hepsini, Vaktinden önce mi geldin? Hayır, aslında gelmek için çıkmadın ki yola, Kendinleydi söyleşin, Yol getirdi seni buralara, Hoş geldin çocuk,..! Bir tohum ekersin gönlüne, arı misali her çiçekten bir toz biriktirirsin zihninde.... Kim bilir belli mi olur? Yediveren güllerin biter 72 dilde, varsa nasipte kısmette, anlaşılır olur dilden dile...! Şeytanları susturursun, bağlanıverir dili ayağı Rabbim dilerse..! Cehennemi kapatmak olur niyetin belki hadsizce..! E-Kitap Yayıncılık Öz'ün İfadesi İçimden Geldiği Gibi; E-Kitap olarak Türkiye'de, ve Yurtdışında, tüm online eKitap marketlerde okura sunulmuştur.. (Bu kitabın gelirlerinin bir kısmı sokakta yaşayan hayvan dostlarımıza bağışlanacaktır)",
        author: "Öz'ün İfadesi",
        price: 10.06,
        rank: 3.6,
        votes: 26,
        category: "Gibis",
        image: "http://books.google.com/books/content?id=1WGqDgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73AynjvDhtN8vU4hp6M8MrPkUBYY-t05UqztbMrle5TUwMttnoBZPU2XM8vRFYSt9dBAcQgsOXiCTfKKhG0ICIbm1cB6ChL4TPWtPJ3FOv31qItfUocvhrDiY6fnCNfRJ9f_n6w&source=gbs_api",
        informations: "E-Kitap Yayıncılık Öz ün İfadesi İçimden Geldiği Gibi; E-Kitap olarak Türkiye de, ve Yurtdışında, tüm online eKitap marketlerde okura sunulmuştur.. (Bu kitabın gelirlerinin bir kısmı sokakta yaşayan hayvan dostlarımıza ..."
    },{
        title: "Deskobiquem",
        description: "epois de tudo ter ido pelos ares, nosso amigo Téo Primata ainda achou tempo para uma nova aventura. Ou será que a aventura achou ele? Uma coisa posso garantir, a bagunça vem dobrada nesse gibi. A confusão será em dose dupla! Então se prepare, porque já já Téo encontrará uma surpresa pra lá de inesperada! E aí! Ficou curioso? Então Venha descobrir que fim levou essa aventura, e muito mais...muito mais meeeeesmo. O gibi tá cheio, lo-ta-do, de atividades para passar o tempo e se divertir! Antes que me esqueça, tem mais uma coisa que você precisa saber \"kurumim\"! Dentro de cada gibi existe uma chave escondida formando uma palavra. Ache-a, descubra qual é a palavra, e a insira na área secreta do site.",
        author: "Minha Tribo",
        price: 2.90,
        rank: 3.2,
        votes: 12,
        category: "Gibis",
        image: "http://books.google.com/books/content?id=KzfVDQAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73z3r0s7D17uAblkFtGgpEtCBM6rSOh9nwkhuR65BAquE7KIxDzGc6fPR2UmD8QbIGyDx94TkqDqYFxdhWDM7qt6O8VqKRBGFLct0ulymP75jEoq06-Z-xvOvnsR0QRkSN-pqLp&source=gbs_api",
        informations: "Depois de tudo ter ido pelos ares, nosso amigo Téo Primata ainda achou tempo para uma nova aventura."
    },{
        title: "ANA GİBİ YAR OLMAZ",
        description: "Anneden Nasihatler Hayatımın en değerli varlığı olup şimdi ahirete göçen, daha çok küçük yaşlarımda rotamı Allah'a doğru çeviren rahmetli sevgili biricik annemi iki gündür üst üste rüyamda görüyorum. Bu sebeple onu yâd etmek geldi içimden. Annem Ayşe gerçekten imanlı, olgun bir müslüman hanımdı. Beni yetiştirirken ettiği nasihatlerinden, kulağıma küpe olan hatırlayabildiklerimi sizlerle de paylaşmak istiyorum. Çünkü hayatımın her karesinde bu nasihatlerin faydasını gördüm ve umuyorum ki sonuçları açısından ahirette de faydasını görürüm. Yeri geldikçe kendi de bilfiil yaşadığı şunları nasihat ederdi anneciğim: \"Sakın malına güvenme evladım; yangın, deprem, sel veya başka bir afet yada felaketle elinden gidiverir. Güzelliğine de güvenme evladım; bir hastalık veya yeri gelir bir sivilceyle elinden gidiverir. İyi huy ve ahlak ise felakete uğramaz, daima seni saadete götürür. Sakın arsız ve hırsız olma, tamahtan daha kötü bir huy ve illet yoktur. Eli açık ve gani gönüllü ol. İnsanlar arasında dünyevi mevkilerine göre ayrım yapma, adaletli, merhametli ve şevkatli ol. Hiç kimseye zulmetme, sana zulmedilmesine de izin verme!.. Haklıysan hakkını ara, haklıya da hakkını ver. İnsanları arkalarından çekiştirme,söyleyeceğini doğrudan yüzüne söyle! Yalan söyleme, cesur, mert ve dürüst ol. Kin tutma, affetmek büyüklüktür. Evini evsizlerle, aşını aşsızlarla paylaş. Yetimleri ve yoksulları kolla.. Sen de yetim büyüdün unutma.. Çok gerekmedikçe kimseye borçlanma, sana borçlananı da bunaltma. Dünya malına meyletme. Eğer borçludan alacağına ihtiyacın yoksa, zora düşenin borcunu sil gitsin.. Allah sana daha fazlasını verir. Helal süt içtin, sakın harama meyletme.. Zulüm görmediysen, sadakatli ve vefalı ol!.. Nerde çokluk, orada dert vardır, kalabalıklar seni çekmesin. Sakin bir hayatı tercih et. Allah'tan kork, kuldan utan. Allah'tan korkmayan, kuldan utanmayanlardan da uzak dur. Seni emanet edeceğim ve güveneceğim Allah'tan gayrı kimsem yok. Her zaman dini bütün kullarından ol ki, beni rabbim huzurunda mahçup etme!\" Kabrin nurla dolsun, son durağın cennet olsun sevgili anneciğim… İbrahim SARI",
        author: "İbrahim Sarı",
        price: 4.30,
        rank: 3.8,
        votes: 28,
        category: "Gibis",
        image: "http://books.google.com/books/content?id=FXa3DQAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE711P2hDb_DJVDO2_eF_jPdkzJUKcgNQZ1_mHUT1GbQ8AjmG0GScqhZUXAFLRZT2Bt4HttrYlIAdBI3ysyfjQeZJ7x4zTb3wKsS8hGyOISdSaEnKIsxR2ccKl69fqCPL7XX3uA13&source=gbs_api",
        informations: "Seni emanet edeceğim ve güveneceğim Allah tan gayrı kimsem yok. Her zaman dini bütün kullarından ol ki, beni rabbim huzurunda mahçup etme Kabrin nurla dolsun, son durağın cennet olsun sevgili anneciğim… İbrahim SARI"
    },{
        title: "Depresyon Politikası ve Sistem Sorunu",
        description: "yürüdüğünüz yol, Allah’ın istediği biçimde olmalı. Aksi takdirde geri teper. Bir işe yaramaz. Her an Allah, her zaman Allah. Bizi kurtaracak tek ve sadece Allah’tır. Titel - 1 Titel Yürütücünün oluşturulması Sistem 1’in görevleri Ben veya ailem direk etkilenmesi durumunda, Bir işe yaramaz. Her an Allah, her zaman Allah. Bizi kurtaracak tek ve sadece Allah’tır. Titel - 1 Titel Yürütücünün oluşturulması Sistem 1’in görevleri Ben veya ailem direk etkilenmesi durumunda, harekete geçmesi gerekir. Mantıklı veya mantıksız soruna acil mücadele etmesi kişiye yeni, birkaç kapı, birden açılıyor. Bu kapılardan geçerken üstünde yürüdüğünüz yol, Allah’ın istediği biçimde olmalı. Aksi takdirde geri teper. Bir işe yaramaz. Her an Allah, her zaman Allah. Bizi kurtaracak tek ve sadece Allah’tır. Titel - 1 Titel Yürütücünün",
        author: "Ali Kocaslan",
        price: 29.90,
        rank: 3.5,
        votes: 20,
        category: "Gibis",
        image: "http://books.google.com/books/content?id=k3RVDgAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE704Vlo5f1bg7hSi7I2Hmb8WQUNULHCLCMx5yZkSfATxQLpsxNDS0-5QmJfi-cHa7Jw9rYI5BYxw58FAMeS9YHtpC3_iZQ4eB7Zeyxc15O2H7lop_qc2op3LXNsrE3-PGwnblVCy&source=gbs_api",
        informations: ""
    },{
        title: "Kilo Vermek İçin Gevşeyin",
        description: "Açlık Diyeti Yapmadan, Reklamlara Aldanmadan, Tehlikeli Diyet İlaçları Almadan, Uygun Gıdaların Gücünü, Suyu, Oksijeni ve Öz Benlik Algısı Psikolojisini Kullanarak Nasıl Kilo Verilir?",
        author: "Melissa Martin",
        price: 9.53,
        rank: 3.0,
        votes: 9,
        category: "Gibis",
        image: "http://books.google.com/books/content?id=vXbHBAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70eLowzubVbVdMoAzp-vzErhwMS2cWL1cMvzbaHezTA2qJgE_M4vjX_o-Sl0pufKopRkYwL9Z1xPRi0V8vYzcOss5J9erXdU2MCGmwfpRQeKFvDCXHdpV-zvSWsko2AV_pFWBlQ&source=gbs_api",
        informations: "İstediğiniz gibi düşünmekte özgürsünüz. Giriş kısmında belirttiğim gibi, kişisel olarak ben Zone diyetini takip ediyorum ve bununla büyük başarı elde ettim. Şuna inanıyorum ki eğer bu diyeti %100 yapsaydım %99 ihtimalle işe yarayacağına..."
    },{
        title: "Cinler Alemi",
        description: "CİN VE CİNLER ALEMİ Cin'in lügatteki manası gizliliktir, görünmeyen gizli varlıklar demektir. Cinlerin asıl suretini gören olmamıştır. Cinlerin hakikatini göremeyiz. Çünkü cinler metafiziktir manadır görülmeyecek kadar latif varlıklardır. Kuran'da iki yüzden fazla ayetler cinlerin yaratılışından varlığından insanlardan önce yaratıldığından bahseder ayrıca özellikle Kuran'ın 72. suresi olan 28 ayetten müteşekkil cin suresi hep cinlerden bahseder. Bu bakımdan mutlak bir varlık olarak cinlerin inkarı İslam inancına göre mümkün değildir. Pozitif ilim de cinlerin varlığını ve görünmez olduklarını kabul etmektedir.Cinler dünyadaki insan sayısının beş katıdır. Ömürleri 800 ile 1000 yıldır hatta daha fazladır. insanlar gibi hayat şartları var. Birbirleriyle evlenebilir, hatta çoluk çocuk sahibi olabilirler. İnsanları, dağları, taşları, ağaçları, yerleri, gökleri, denizleri ve nehirleri yaratan Allah, tıpkı onlar gibi birer varlık olan cinleri de yaratmıştır. Cinler de Allah (C.C.) tarafından yaratılmış olan tüm varlıkların gözle görülmeyen birer fertlerdir. Kuran'ın ifadesine göre asıl maddeleri ateştir. Son derece latif ve ince cisimli oldukları için, gözle görülmezler. Tıpkı nurani olan melekler gibi. Onların gözle görünmemesi yokluklarını gerektirmez. Vardırlar ama görünmezler. Varlıkları Kuran ve hadislerle sabittir. İnkarı mümkün değildir.BÜYÜK ALİM ŞEYH ŞA'RAVİ buyururlar ki; \"Gaybi işlerde dini meselelere gelince, bunlara iman etmek vaciptir. Mahiyetini ve keyfiyetini bilmesek bile. Çünkü imanın bir zirvesi vardır ki, o da Allah'a iman etmektir. Bir kere kendi isteğinle Allah'a iman ettin mi? Aklınla zirvenin altına girdin mi? Aklın alsın, almasın Allah'ın her dediğini kabul etmek zorundasın. Çünkü bilmemek ve görmemek de hiçbir zaman delil sayılmaz. Çünkü maddeyi gören gözler, manaya da inanmak mükellefiyetindedir. Yani bir şeyin var olduğunu bilmemek, o şeyin yok olduğunu göstermez.\"",
        author: "Eren Sarı",
        price: 12.91,
        rank: 1.5,
        votes: 10,
        category: "Gibis",
        image: "http://books.google.com/books/content?id=SoWyDQAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72OryB62QNvtD2pR2NPe-KiFHPam4QTrXvECmM81dVoGzrB1qBlSQ33ZdXVrq0k7FQbVhWa-6ZJyACJOwrNhvIrMvGhnrriQ0SSUzKviC4BQyBPluOqP6tLMIxDdstk4mJXdJ8W&source=gbs_api",
        informations: "CİN VE CİNLER ALEMİ Cin&#39;in lügatteki manası gizliliktir, görünmeyen gizli varlıklar demektir."
    },{
        title: "Economic Development: Social & Political Interactions",
        description: "International Conference of Political Economy (ICOPEC), takes as a goal to identify and analyze the status of its age, held its first conference with the theme \"International Political Economy: Adam Smith Today \" in 2009. Following the ICOPEC conference, JOPEC Publication started to be published in 2010. JOPEC Publication aims at searching required alternatives, in addition to existing alternatives, with a critical approach, has been the main supporter of ICOPEC conference by including the studies in this context. In 2016, the main theme of the 7th conference was determined as “State, Economic Policy, Taxation and Development\". IJOPEC Publication has undertaken to publish the papers, presented at this conference in English and Turkish, as an e-book. Day by day, the economic development phenomenon increases its importance in terms of its content and it is described as a science that deals with the prosperity and development of the societies within the qualitative and quantitative aspects of their structural changes. Economic development, along with being economic, emphasizes and contains structural change in social, political and cultural fields and prosperity increasing as a whole. In this context, it is important to analyze different aspects and scopes of development. For this reason, “Economic Development in the Context of Social and Political Interactions” has come to light as a collective study of many academicians from various universities and it is prepared with interdisciplinary point of view. \u001Dis work deals with economic development phenomenon sophisticatedly and presents both its theoretical and practical implications for the benefit of higher education and those who interest in the subject.",
        author: "Sevcan Güneş & Ferihan Polat",
        price: 30.97,
        rank: 3.7,
        votes: 52,
        category: "Gibis",
        image: "http://books.google.com/books/content?id=bqeIDQAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72fgJL_HyBnrAYs6mMlM-eOGOjwf_XnDW0bJqej1xSvjdPCacCF24p-Nb-h8qd98PeIRDHoI6GkZNzG5Ht7VYNqtZPDHUQYley1chJrOBATpLcI3Mn6jiDWm_valGWhFtzUq2YI&source=gbs_api",
        informations: "Kültür kavramının kapsadığı gelenek, sanat ve medya gibi bir takım faaliyet ve olgular ekonomiden ayrı olarak ele alınamayacağı gibi söz konusu faaliyetleri yerele özgü beşeri ve ekonomik coğrafya unsurlardan da bağımsız olarak ifade..."
    },{
        title: "Türk Denizcilik Tarihi",
        description: "Türk Denizcilik Tarihi ile ilgili bilinmeyenler. Denizcilik Kültürü oluşturmak",
        author: "Dr. Muhsin Kadıoğlu",
        price: 10.29,
        rank: 3.7,
        votes: 27,
        category: "Gibis",
        image: "http://books.google.com/books/content?id=t2ihBQAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE72cLnkHfYWijz-0zWICCfQSDJm6C4n2J-Rp5Z0vrQJEY7oUpCpHgXTQ-eNaVl6K7V95kD-yqh0LCXCoRSl_zjV89ioal-jnwzBjIcUzpFbsckyFXsbXDJelHsg30THXquV301Hd&source=gbs_api",
        informations: "Bunların taşıdığı dört kemerin üstünde, geçişi pandantiflerle sağlanan 12,70 m. çapında pencereli ve kasnaklı bir kubbe bulunur. Mekân, kıble yönü ekseni üzerinde Ayasofya'da ve sonraları Beyazıt ve Süleymaniye camilerinde olduğu gibi iki..."
    },{
        title: "O budista e o cristão",
        description: "Heródoto Barbeiro e Frei Betto dialogam sobre ser budista e cristão no mundo contemporâneo. Sidarta Gautama, o Buda, nasceu meio século antes do nascimento de Jesus Cristo. Morreu tranquilamente aos oitenta anos, dos quais boa parte viveu bem longe do luxo no qual nasceu, em um castelo no norte da Índia. Jesus, filho de um carpinteiro, passou a vida na Palestina e morreu jovem, tragicamente, pregado a uma cruz, depois de ser perseguido e torturado. Apesar das diferenças que marcam um e outro e delimitam as religiões criadas em seus nomes, ambos pregaram o amor, a compaixão e o desapego.",
        author: "Heródoto Barbeiro & Frei Betto",
        price: 23.90,
        rank: 3.5,
        votes: 23,
        category: "Infantojuvenis",
        image: "http://books.google.com/books/content?id=kggmDwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70ehtljSdUUYBV37CXZNZ5ATAh9zzSbq7YpHQvnd9ZC82zG0Q9v3lIkAd39ww2qBgAtxpHp_kVVqkVKO3aWmSWME6mgvqvZUh6AtbvNjrVttBHaA_1LEDRMEz99pygeH4VCHj6b&source=gbs_api",
        informations: "Heródoto Barbeiro e Frei Betto dialogam sobre ser budista e cristão no mundo contemporâneo."
    },{
        title: "O mundo dos invertebrados",
        description: "Neste pequeno trabalho são referidos alguns dos aspetos mais significativos das diferentes espécies de invertebrados, numa linguagem que se pretendeu acessível, mas sem descurar o indispensável rigor científico/pedagógico. Mais de 130 fotografias a cores ilustram a maioria dos conteúdos. Notas de rodapé auxiliam o leitor à compreensão de certos termos inclusos na obra. O mundo dos invertebrados surpreende pela diversidade de formas, de cores e de riqueza de padrões, pela complexidade dos seus sistemas de vida, dos tipos de comunicação e de relacionamento e, naturalmente, pelas estratégias de adaptação e sobrevivência que esses pequenos e grandes seres adquiriram ao longo do processo evolutivo. Trata-se de uma obra útil para todos os estudantes do ensino fundamental e médio, assim como para todos os amantes da Natureza e, particularmente, para quem quer saber um pouco mais sobre a vida desses pequenos organismos. Na verdade, um dos aspetos que torna ainda mais agradável o estudo dos invertebrados, nomeadamente dos insetos, é a facilidade que temos de os poder examinar ao vivo, em pleno ambiente natural e sem necessidade de grandes esforços. Um passeio no campo ou num jardim, um caminhar ao longo da praia na maré-vazia, enfim, não faltam ocasiões para o etólogo amador colher muitas observações e fazer descobertas fascinantes, bastando estar atento e ter alguma paciência. Se juntarmos a esse mini safari uma máquina fotográfica (ou um celular com câmara) e um bloco de notas, tornamos ainda mais atrativa a busca desse minúsculo \"povo\" que vive nas plantas, no solo e nas poças d'água. Depois, é só lançar as imagens no computador e adicionar a informação recolhida nas observações de campo e nas indispensáveis consultas de livros e de sites relacionados com esse assunto.",
        author: "Carlos Falcão de Matos",
        price: 11.90,
        rank: 3.8,
        votes: 28,
        category: "Infantojuvenis",
        image: "http://books.google.com/books/content?id=0J0kDwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70OQpxP7Q-3aU63Swm8Hq9LFNji9t0-XWukCbuGFoiYAIlJVb1Iie8TOsyABdjx-J89-DJsPueGSdGLoeCc3HH4w49swCDpeF5YSurbcPBszRLfcDQ2BHtDviTjB0TJia4TJlzp&source=gbs_api",
        informations: "O mundo dos invertebrados surpreende pela diversidade de formas, de cores e de riqueza de padrões, pela complexidade dos seus sistemas de vida, dos tipos de comunicação e de relacionamento e, naturalmente, pelas estratégias de ..."
    },{
        title: "A Identidade Adolescente no romance juvenil contemporâneo",
        description: "Porque serão os jovens de hoje os agentes de mudança num amanhã que se espera mais justo e pacífico para toda a Humanidade, as práticas culturais que lhes são dirigidas devem merecer-nos uma atenção especial. De entre estas, destaca-se a literatura juvenil, não apenas pelo contributo que pode dar ao estudo desta fase da vida do indivíduo, mas sobretudo porque pode interferir positivamente no seu processo de desenvolvimento identitário.",
        author: "Maria Amélia Cruz",
        price: 28.50,
        rank: 2.5,
        votes: 22,
        category: "Infantojuvenis",
        image: "http://books.google.com/books/content?id=r1ckDwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70slYB48zDYhy1zjUSWS3TeuvzttCkY4OpwCHLsPNCRu5sbGxglHnDjnrGlYHfrg0LkCunkaa5ImfY7TOljlWFKySWgcdxiARKI4eHmTpUYOQfkJH62LxIyABtsXCKvKFPaycXj&source=gbs_api",
        informations: "Porque serão os jovens de hoje os agentes de mudança num amanhã que se espera mais justo e pacífico para toda a Humanidade, as práticas culturais que lhes são dirigidas devem merecer-nos uma atenção especial."
    },{
        title: "Ofício de escrever",
        description: "Frei Betto, autor tão prolífico quanto profundo e instigante, faz uma série de reflexões sobre o ato de escrever, que, para ele, mais do que simples ofício, é uma verdadeira missão. Isto porque ele empunha a pena com a quixotesca coragem daqueles que ousam enfrentar os mais poderosos adversários, na busca do bem comum, da justiça social e da felicidade coletiva. Com a generosidade que lhe é característica, Frei Betto não se limita a discorrer sobre seus próprios hábitos e segredos de escritor — por sinal, bastante interessantes. Focaliza também a obra e a técnica de autores fundadores, como Shakespeare e Cervantes, e singulares como Tomasi di Lampedusa, Saint-Exupéry e T.S. Eliot. Merece destaque o carinho com que aborda a obra de dois grandes escritores — mineiros, como ele — Bartolomeu Campos de Queirós e Adélia Prado. Esta última, capaz de arrebatamentos místicos comparáveis aos de Santa Teresa de Ávila ou Soror Juana Inés de la Cruz. Ofício de escrever encanta como convite à leitura e à escrita. Propostas que devemos aceitar sem relutância.",
        author: "Frei Betto",
        price: 19.90,
        rank: 3.5,
        votes: 20,
        category: "Infantojuvenis",
        image: "http://books.google.com/books/content?id=r4S-DgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72yrgPW5mipWYqXWgNR3dPF-XWhky_738KNrWfGjE2bxaCX3cZaeXalY2pzC5SWiXiSKUiTToyEVdUTY0kVIs2Br0Yjl_PhL_8nAz1QcRIrM7jjHfFzYbfoEB1BmG4E1f-FjxOH&source=gbs_api",
        informations: "Frei Betto, autor tão prolífico quanto profundo e instigante, faz uma série de reflexões sobre o ato de escrever, que, para ele, mais do que simples ofício, é uma verdadeira missão."
    },{
        title: "Agora e na hora",
        description: "Ao retratar o embate entre um escritor e seu personagem, Heloisa Seixas constrói um romance original sobre o ofício da escrita e o amor à literatura. Um escritor fracassado decide fazer um livro de contos sobre a morte e, em seguida, se matar. Seria essa sua vingança contra aqueles que sempre o ignoraram: fazer da própria morte o ponto final do livro, tombando sem vida sobre os originais. Para ele, um desfecho insuperável, inédito na literatura. Seus planos, porém, caem por terra ao descobrir que tem um tumor e que seus dias estão contados. Não poderá mais ser o senhor da própria morte. Correndo contra o tempo, o autor, ao longo de uma madrugada, revê sua trajetória, misturando-a com seus contos terminais, na certeza de que, antes de o sol nascer, usará um revólver para se matar. No entanto, algo inesperado acontece, e ele perde o controle do livro — e da própria vida. Em Agora e na hora, Heloisa Seixas constrói um poderoso embate de vida e morte entre um escritor e seu personagem. Um trabalho original que é, sobretudo, uma celebração da literatura e do ofício de escritor.",
        author: "Heloisa Seixas",
        price: 23.90,
        rank: 3.3,
        votes: 30,
        category: "Infantojuvenis",
        image: "http://books.google.com/books/content?id=quKYDgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72a839o0GXsL3I18rh8_v9cDlAZbbYnViitfMZlBLiMb9SO9oVqL56REOMDzGRiEvpXENXDQDzmB5kf1yeEDWJb3_Gs2clSfi8kk8WgVUA5-_P9J0CDDWUlR6WDwVc-2roQijKK&source=gbs_api",
        informations: "No entanto, algo inesperado acontece, e ele perde o controle do livro — e da própria vida. Em Agora e na hora, Heloisa Seixas constrói um poderoso embate de vida e morte entre um escritor e seu personagem."
    },{
        title: "A Minha Mãe É a Melhor do Mundo",
        description: "Cansado da mãe que tem, e que muitas vezes não o deixa fazer o que quer, o Gil decide ir à Loja de Mães à procura de uma que lhe torne a vida mais fácil. Mas nenhuma Ihe agrada. De regresso a casa, o Gil não encontra a mãe, que, entretanto, foi à procura de outro filho. Como acabará esta história? Um conto divertido e sério ao mesmo tempo, que fará as crianças rir e pensar.Maria João Lopo de Carvalho licenciou-se em Línguas e Literaturas Modernas. Foi professora de português e de inglês e trabalhou como copywriter em publicidade. Passou ainda pelas áreas de Educação e Cultura na Câmara Municipal de Lisboa. O seu primeiro bestseller, Virada do Avesso, foi publicado pela Oficina do Livro em 2000. Tem mais de cinquenta títulos editados, entre romances, livros de crónicas, manuais escolares e dezenas de livros infanto-juvenis, a maioria deles no Plano Nacional de Leitura. Em 2011, editou o primeiro romance histórico Marquesa de Alorna que, em pouco tempo, se tornou um bestseller.",
        author: "Helena; Carvalho Nogueira",
        price: 21.57,
        rank: 3.7,
        votes: 27,
        category: "Infantojuvenis",
        image: "http://books.google.com/books/content?id=MsyeDgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE718Ff8jZo5iNBbGNn2J1xoy1vTt8jHxZKrEI2xSWKrNCRg7HRBP7ITmvbcetLfM8-8GbXCVy05qC4Idqsqah7s_cgCa2obd4zIjoP7qI-5U_uZFTCNlZ_VqqAigGEbF6QqpaWl8&source=gbs_api",
        informations: "Como acabará esta história? Um conto divertido e sério ao mesmo tempo, que fará as crianças rir e pensar.Maria João Lopo de Carvalho licenciou-se em Línguas e Literaturas Modernas."
    },{
        title: "",
        description: "",
        author: "",
        price: 29.90,
        rank: 3.5,
        votes: 20,
        category: "Infantojuvenis",
        image: "",
        informations: ""
    },{
        title: "",
        description: "",
        author: "",
        price: 29.90,
        rank: 3.5,
        votes: 20,
        category: "Infantojuvenis",
        image: "",
        informations: ""
    }
];

books.forEach((book) => {

    let bookModel = new Book({
        title: book.title,
        description: book.description,
        author: book.author,
        price: book.price,
        rank: book.rank,
        votes: book.votes,
        image: book.image,
        informations: book.informations,
    });

    bookModel.save();
})
