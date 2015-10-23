function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

var nome = 'Usuário: '+getURLParameter('nome');
var dif = 'Dificuldade: ' +getURLParameter('dificuldade');
$('#nomeLI').text(nome);
$('#dificuldadeLI').text(dif);
