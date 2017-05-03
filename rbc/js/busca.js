
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

        $.each(data, function (key, value) {
            var divPai = $('<div class="col-xs-6 col-sm-6 col-md-4 col-lg-4"></div>');
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
    });
    
};