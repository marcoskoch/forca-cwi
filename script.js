$('#begin').click(function(){
  nome = $('#entradaNome').val();
  location.replace('home.html?nome='+nome+'&dificuldade='+$('#dificuldade').val());

});
