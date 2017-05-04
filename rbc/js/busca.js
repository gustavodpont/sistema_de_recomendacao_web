var pesos = {
    'finalidade': 8.0,
    'valor': 7.0,
    'hd': 5.0
}

var pesoFinalidadeUso = {
    'trabalho': 0.0,
    'jogos': 1.0
}

var pesoValorPagar = {
    'menor1200': 0.1,
    'entre1200e2000 ': 0.5,
    'maior2000': 1.0
}

var pesoHd = {
    'sata': 0.0,
    'ssd': 1.0
}

var buscarProduto = function () {
    armazenaLista();
    limpaBusca();
    atualizaBusca();
};

var limpaBusca = function () {
    $("#resultado-busca").children().remove();
};

var armazenaLista = function () {
    var primeiro = $("#resultado-busca .panel-red");
    var divPai = $('<div></div>')
            .addClass("col-xs-3").addClass("col-sm-3").addClass("col-md-3").addClass("col-lg-3").html(primeiro);
    $("#ultimos-visto").append(divPai);
};

var atualizaBusca = function () {

    $.getJSON("db/database.json", function (data) {

        gerarOrdemListaDeProdutos(data, function (produtos) {

            $.each(produtos, function (key, value) {
                var divPai = $('<div class="col-xs-6 col-sm-6 col-md-4 col-lg-4" style="margin-bottom: 30px;"></div>');
                var item = $('<div class="panel price"></div>');
                
                if (key == 0) {
                    item.addClass("panel-red");
                } else {
                    item.addClass("panel-white");
                }

                var head = $('<div class="panel-heading arrow_box text-center"><h3>' + value.nome + '</h3></div>');
                var body = $('<div class="panel-body"><img src="' + value.url + '" class="img-responsive" style="width: 100%" alt="' + value.nome + '"></div>');
                
                var listUl = $('<ul class="list-group list-group-flush text-center"></ul>');
                var liFinalidade = $('<li class="list-group-item"><i class="icon-ok text-success"></i>Finalidade: ' + value.finalidade + '</li>');
                var liHardrive = $('<li class="list-group-item"><i class="icon-ok text-success"></i>HD: ' + value.hardrive + '</li>');
                var liMemoria = $('<li class="list-group-item"><i class="icon-ok text-success"></i>Memoria RAM: ' + value.memoria + '</li>');
                var liMae = $('<li class="list-group-item"><i class="icon-ok text-success"></i>Placa Mãe: ' + value.placamae + '</li>');
                var liVideo = $('<li class="list-group-item"><i class="icon-ok text-success"></i>Placa de Video: ' + value.placavideo + '</li>');
                var liProcessador = $('<li class="list-group-item"><i class="icon-ok text-success"></i>Processador: ' + value.processador + '</li>');
                var liPreco= $('<li class="list-group-item"><i class="icon-ok text-success"></i>' + value.preco + '</li>');
                
                listUl.append(liFinalidade);
                listUl.append(liMae);
                listUl.append(liHardrive);
                listUl.append(liMemoria);
                listUl.append(liVideo);
                listUl.append(liProcessador);
                listUl.append(liPreco);
                
                var footer = $('<div class="panel-footer"><a class="btn btn-lg btn-block btn-danger" href="#">Comprar</a></div>');
                
                item.append(head);
                item.append(body);
                item.append(listUl);
                item.append(footer);
                
                divPai.append(item);
                
                $("#resultado-busca").append(divPai)
            }); 
        })
    });
    
};

function gerarOrdemListaDeProdutos(data, cb) {

    var finalidade = $('#finalidade');
    var hd = $('#hd');
    var valor = $('#valor');
    var pesoTotal = 0;
    var temHd = false;
    var temFinalidade = false;
    var temValor = false;
    
    if ($.inArray(hd.val(), ['SSD', 'SATA']) > -1) {
        temHd = true;
        pesoTotal += pesos.hd;
    }

    if ($.inArray(finalidade.val(), ['Trabalho', 'Gammer']) > -1) {
        temFinalidade = true;
        pesoTotal += pesos.finalidade;
    }

    if (valor.val() !== null && $.isNumeric(valor.val())) {
        temValor = true;
        pesoTotal += pesos.valor;
    }

    if (temValor || temFinalidade || temHd) {
     
        var produtos = [];
        $.each(data, function(key, val) {

            var similaridadeValor = 0;
            var similaridadeHd = 0;
            var similaridadeFinalidade = 0;
            var a1;
            var a2;

            if (temFinalidade) {
                if (finalidade.val() == 'Trabalho') {
                    a1 = pesoFinalidadeUso.trabalho
                } else {
                    a1 = pesoFinalidadeUso.jogos
                }

                if (val.finalidade == 'Trabalho') {
                    a2 = pesoFinalidadeUso.trabalho
                } else {
                    a2 = pesoFinalidadeUso.jogos
                }
                similaridadeFinalidade = (pesos.valor * calculoSimilaridadeLocal(a1, a2, pesoFinalidadeUso.jogos, pesoFinalidadeUso.trabalho))
            }

            if (temHd) {
                if (hd.val() == 'SSD') {
                    a1 = pesoHd.ssd
                } else {
                    a1 = pesoHd.sata
                }

                if (val.hd == 'SSD') {
                    a2 = pesoHd.ssd
                } else {
                    a2 = pesoHd.sata
                }
                similaridadeHd = (pesos.valor * calculoSimilaridadeLocal(a1, a2, pesoHd.ssd, pesoHd.sata))
            }

            if (temValor) {
                if (valor.val() < 1200.0) {
                    a1 = pesoValorPagar.menor1200
                } else if (valor.val() >= 1200.0 && valor.val() <= 2000.0) {
                    a1 = pesoValorPagar.entre1200e2000
                } else {
                    a1 = pesoValorPagar.maior2000
                }

                if (val._preco < 1200.0) {
                    a2 = pesoValorPagar.menor1200
                } else if (val._preco >= 1200.0 && val._preco <= 2000.0) {
                    a2 = pesoValorPagar.entre1200e2000
                } else {
                    a2 = pesoValorPagar.maior2000
                }
                similaridadeValor = (pesos.valor * calculoSimilaridadeLocal(a1, a2, pesoValorPagar.maior2000, pesoValorPagar.menor1200))
            }

            var similaridadeTotal = ((similaridadeHd + similaridadeValor + similaridadeFinalidade) / pesoTotal);
            console.log(similaridadeTotal);     
            var achou = false;
            for (i in produtos) {
                var produto = produtos[i];
                if (similaridadeTotal > produto.similaridadeTotal) {
                    val.similaridadeTotal = similaridadeTotal;
                    produtos.splice(i, 0, val);
                    achou = true;
                    break;
                }
            }
            if (!achou) {
                var index = (produtos.length);
                produtos[index] = val;
                produtos[index].similaridadeTotal = similaridadeTotal;
            }
        })

        return cb(produtos.reverse());
    }
    
    return cb(data);
}

var calculoSimilaridadeLocal = function (a1, a2, vMax, vMin) {
    if (a2 > a1) {
        var tmp = a1;
        a1 = a2;
        a2 = tmp;
    }

    return (1.0 - (a1 - a2) / (vMax - vMin))
}
