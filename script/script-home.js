function getURLParameter(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

var nome = 'Usuário: '+getURLParameter('nome');
var dif = 'Dificuldade: ' +getURLParameter('dificuldade');
$('#nomeLI').text(nome);
$('#dificuldadeLI').text(dif);

getPalavraPorDificuldade(dif);

function verificarErro(char){
	var erro = $('#errado').text();
	erroSom();
	if(erro.substring(7).indexOf(char) === -1){
		$('#errado').html(erro + char +' ');
	}
}

function sortearPalavra(){
	return Math.floor(Math.random() * (5) + 1);
}


function getPalavraPorDificuldade (dificuldade) {
	var indiceDificuldade;
	if (dificuldade.toLowerCase() === 'normal') {
		indiceDificuldade = 0;
	} else{
		indiceDificuldade = 1;
	};
	var indicePalavra = sortearPalavra();
	$.get('http://localhost:3000/forca')
	.done(function(data) {
		var palavras = data[indiceDificuldade];
		var palavra = palavras.palavras[0][indicePalavra];
		for(var i = 0, len = palavra.length; i < len; ++i) {
			$('#letras').append(
				$('<li class="inline-block char">').html(palavra[i])
			);
		}
	});
}

