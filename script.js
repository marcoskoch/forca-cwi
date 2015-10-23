var nome;
var dificuldade;

$('#begin').click(function(){
  nome = $('#entradaNome').val();
  dificuldade = $('#dificuldade').val();
  document.location.href = 'home.html';
});
