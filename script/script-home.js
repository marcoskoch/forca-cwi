function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

var nome = 'Usuário: '+getURLParameter('nome');
var dif = 'Dificuldade: ' +getURLParameter('dificuldade');
$('#nomeLI').text(nome);
$('#dificuldadeLI').text(dif);

function verificarErro(char){
  var erro = $('#errado').text();
  erroSom();
  if(erro.substring(7).indexOf(char) === -1){
    $('#errado').html(erro + char +' ');
  }
}
