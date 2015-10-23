function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}


$('#nomeLI').text(getURLParameter('nome'));
$('#dificuldadeLI').text(getURLParameter('dificuldade'));
