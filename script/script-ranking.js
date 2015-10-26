$(function ranking() {
    var urlUsuarios = 'http://localhost:3000/usuarios';
    function consultarRanking() {
        $.get(urlUsuarios)
        .done(function(data) {
            var usuarios = data;
            usuarios = usuarios.sort(function(a, b) {
                return (b.pontos > a.pontos) ? 1 : ((b.pontos < a.pontos) ? -1 : 0);
            });
            var idRank = 1;
            usuarios.forEach(function(elem) {
                $('tbody')
                    .append($('<tr>')
                        .attr('class', 'anchor_'+idRank));
                $('.anchor_'+idRank)
                    .append($('<td>')
                        .attr('class', 'tbl-rank')
                        .append($('<span>')
                            .attr('class', 'text')
                            .append($(document.createTextNode( idRank )))));
                $('.anchor_'+idRank)
                    .append($('<td>')
                        .attr('class', 'tbl-nome')
                        .append($('<span>')
                            .attr('class', 'text')
                            .append($(document.createTextNode( elem.nome )))));
                $('.anchor_'+idRank)
                    .append($('<td>')
                        .attr('class', 'tbl-points')
                        .append($('<span>')
                            .attr('class', 'text')
                            .append($(document.createTextNode( elem.pontos )))));
                idRank += 1;
            });
        });
    };
    $('#btnInserir').click(consultarRanking);
});