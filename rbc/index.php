<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Sistema de Recomendação - Computador</title>
        <link rel="stylesheet" href="css/style.css">
        <script src="js/jquery-3.2.1.min.js"></script>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    </head>
    <body>

        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                        
                    </button>
                    <a class="navbar-brand" href="#">Logo</a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li><a href="#">Inicio</a></li>
                        <li class="active"><a href="#">Produtos</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Minha Conta</a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-shopping-cart"></span> Carrinho</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container">
            <form class="form-inline" id="filtro">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="form-group">
                            <label for="finalidade">Finalidade:</label>
                            <select class="form-control" id="finalidade">
                                <option>Trabalho</option>
                                <option>Gammer</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="valor">Valor:</label>
                            <select class="form-control" id="valor">
                                <option>Menos de 1200</option>
                                <option>Entre 1200 e 2000</option>
                                <option>Mais de 2000</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="hd">Tipo de HD:</label>
                            <select class="form-control" id="hd">
                                <option>SSD</option>
                                <option>HD SATA</option>
                            </select>
                        </div>

                        <button type="button" class="btn btn-danger">Buscar</button>
                    </div>

                </div>
            </form>
            <hr>
            <div class="row">

                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">

                    <div class="panel price panel-red">
                        <div class="panel-heading arrow_box text-center">
                            <h3>Computador Gammer</h3>
                        </div>
                        <div class="panel-body">
                            <img src="img/gammer_001.jpg" class="img-responsive" style="width: 100%" alt="Image">
                        </div>
                        <ul class="list-group list-group-flush text-center">
                            <li class="list-group-item"><i class="icon-ok text-success"></i> PC Gammer</li>
                            <li class="list-group-item"><i class="icon-ok text-success"></i> Unlimited projects</li>
                            <li class="list-group-item"><i class="icon-ok text-success"></i> 27/7 support</li>
                        </ul>
                        <div class="panel-footer">
                            <a class="btn btn-lg btn-block btn-danger" href="#">Comprar</a>
                        </div>
                    </div>

                </div>

                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">

                    <div class="panel price panel-white">
                        <div class="panel-heading arrow_box text-center">
                            <h3>Computador Pessoal</h3>
                        </div>
                        <div class="panel-body">
                            <img src="img/pessoal_001.jpg" class="img-responsive" style="width: 100%" alt="Image">
                        </div>
                        <ul class="list-group list-group-flush text-center">
                            <li class="list-group-item"><i class="icon-ok text-success"></i> PC Trabalho </li>
                            <li class="list-group-item"><i class="icon-ok text-success"></i> Jog</li>
                            <li class="list-group-item"><i class="icon-ok text-success"></i> 27/7 support</li>
                        </ul>
                        <div class="panel-footer">
                            <a class="btn btn-lg btn-block btn-default" href="#">Comprar</a>
                        </div>
                    </div>

                </div>

                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">

                    <div class="panel price panel-white">
                        <div class="panel-heading arrow_box text-center">
                            <h3>Computador Pessoal</h3>
                        </div>
                        <div class="panel-body">
                            <img src="img/pessoal_001.jpg" class="img-responsive" style="width: 100%" alt="Image">
                        </div>
                        <ul class="list-group list-group-flush text-center">
                            <li class="list-group-item"><i class="icon-ok text-success"></i> PC Trabalho </li>
                            <li class="list-group-item"><i class="icon-ok text-success"></i> Jog</li>
                            <li class="list-group-item"><i class="icon-ok text-success"></i> 27/7 support</li>
                        </ul>
                        <div class="panel-footer">
                            <a class="btn btn-lg btn-block btn-default" href="#">Comprar</a>
                        </div>
                    </div>

                </div>

            </div>

        </div>

        <footer class="container-fluid text-center">
            <p>Loja Virtual Copyright</p>  
            <form class="form-inline" id="cadastro">Receber Novidades:
                <input type="email" class="form-control" size="50" placeholder="Email" id="email">
                <button type="button" class="btn btn-danger">Cadastrar</button>
            </form>
        </footer>

    </body>
</html>
