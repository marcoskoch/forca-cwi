function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

var nome = 'Usuário: '+getURLParameter('nome');
var dif = 'Dificuldade: ' +getURLParameter('dificuldade');
$('#nomeLI').text(nome);
$('#dificuldadeLI').text(dif);

function verificarErro(char){
  var erro = $('#errado').text();
  if(erro.substring(7).indexOf(char) === -1){
    $('#errado').html(erro + char +' ');

  }
}

$("#A").click(function(){
  verificarErro($("#A").text());
});

$("#B").click(function(){
  verificarErro($("#B").text());
});

$("#C").click(function(){
  verificarErro($("#C").text());
});

$("#D").click(function(){
  verificarErro($("#D").text());
});

$("#E").click(function(){
  verificarErro($("#E").text());
});

$("#F").click(function(){
  verificarErro($("#F").text());
});

$("#G").click(function(){
  verificarErro($("#G").text());
});

$("#H").click(function(){
  verificarErro($("#H").text());
});

$("#I").click(function(){
  verificarErro($("#I").text());
});

$("#J").click(function(){
  verificarErro($("#J").text());
});

$("#K").click(function(){
  verificarErro($("#K").text());
});

$("#L").click(function(){
  verificarErro($("#L").text());
});

$("#M").click(function(){
  verificarErro($("#M").text());
});

$("#N").click(function(){
  verificarErro($("#N").text());
});

$("#O").click(function(){
  verificarErro($("#O").text());
});

$("#P").click(function(){
  verificarErro($("#P").text());
});

$("#Q").click(function(){
  verificarErro($("#Q").text());
});

$("#R").click(function(){
  verificarErro($("#R").text());
});

$("#S").click(function(){
  verificarErro($("#S").text());
});

$("#T").click(function(){
  verificarErro($("#T").text());
});

$("#U").click(function(){
  verificarErro($("#U").text());
});

$("#V").click(function(){
  verificarErro($("#V").text());
});

$("#W").click(function(){
  verificarErro($("#W").text());
});

$("#X").click(function(){
  verificarErro($("#X").text());
});

$("#Y").click(function(){
  verificarErro($("#Y").text());
});

$("#Z").click(function(){
  verificarErro($("#Z").text());
});
