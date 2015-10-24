$('#begin').click(function(){
  nome = $('#entradaNome').val();
  location.replace('home.html?nome='+nome+'&dificuldade='+$('#dificuldade').val());
});

$('#music').prop('volume', 0.05);
var musica = $('#music')[0];
music.play();
