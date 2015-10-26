// Reconhece o Usuário e a Dificuldade através do URL
function getURLParameter(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

if(getURLParameter('nome') !== null){
	var nome = 'Usuário: '+getURLParameter('nome');
}else{
	var nome = 'Usuário: Desconhecido';
}

if(getURLParameter('dificuldade') !== null){
	var dif = 'Dificuldade: ' +getURLParameter('dificuldade');
}else{
	var dif = 'Dificuldade: Normal';
}
$('#nomeLI').text(nome);
$('#dificuldadeLI').text(dif);

//--------------------------------------------------------

// Sorteia a palavra através da dificuldade
var senha;
var stringAuxiliar;
var contador = 0;
var limite;
var acabou = false;

getPalavraPorDificuldade(getURLParameter('dificuldade'));

function sortearPalavra(){
	return Math.floor(Math.random() * (5) + 1);
}


function getPalavraPorDificuldade (dificuldade) {
	var indiceDificuldade;
	if (dificuldade.toLowerCase() === 'normal') {
		indiceDificuldade = 0;
	} else{
		indiceDificuldade = 1;
	}

	var indicePalavra = sortearPalavra();
	$.get('http://localhost:3000/forca')
	.done(function(data) {
		var palavras = data[indiceDificuldade];
		var palavra = palavras.palavras[0][indicePalavra];
		senha = palavra;
		stringAuxiliar = senha;
		for(var i = 0, len = palavra.length; i < len; ++i) {
			$('#letras').append(
				$('<li class="inline-block '+palavra[i]+' char">').html(palavra[i])
				);
		}
	});
}
//----------------------------------------------------------

// Verifica os erros
if(getURLParameter('dificuldade') === 'Nunes'){
	limite = 2;
}else {
	limite = 5;
}

$('#contador').html(contador + " / " + limite);

function verificarErro(char){
	if(!acabou){
		if(senha.toUpperCase().indexOf(char) === -1){
			var erro = $('#letras-erradas').text();
			erroSom();
			if(erro.substring(7).indexOf(char) === -1){
				$('#letras-erradas').html(erro + char +' ');
				contador++;
				$('#contador').html(contador + " / " + limite);
				if(contador === limite){
					acabou = true;
					$('#letras-erradas').html('Você perdeu, vai chorar?');
					setInterval(function(){location.replace('ranking.html');}, 5000);
				}
			}
		} else if(senha.toUpperCase().indexOf(char) >= 0){
			$('.'+char.toLowerCase() +'').css('color', '#000');
			stringAuxiliar = stringAuxiliar.toUpperCase();
			while(stringAuxiliar.indexOf(char) !== -1){
				stringAuxiliar = stringAuxiliar.replace(char, '');
			}
			if(stringAuxiliar.length === 0){
				acabou = true;
				$('#letras-erradas').html('Você venceu Illuminati!');
				setInterval(function(){location.replace('ranking.html');}, 5000);
			}
		}
	}
}

function erroSom(){
	var audio = $('#erroSom')[0];
	audio.pause();
	audio.currentTime = 0;
	audio.play();
}

$("#A").click(function(){
	verificarErro('A');
});

$("#B").click(function(){
	verificarErro('B');
});

$("#C").click(function(){
	verificarErro('C');
});

$("#D").click(function(){
	verificarErro('D');
});

$("#E").click(function(){
	verificarErro('E');
});

$("#F").click(function(){
	verificarErro('F');
});

$("#G").click(function(){
	verificarErro('G');
});

$("#H").click(function(){
	verificarErro('H');
});

$("#I").click(function(){
	verificarErro('I');
});

$("#J").click(function(){
	verificarErro('J');
});

$("#K").click(function(){
	verificarErro('K');
});

$("#L").click(function(){
	verificarErro('L');
});

$("#M").click(function(){
	verificarErro('M');
});

$("#N").click(function(){
	verificarErro('N');
});

$("#O").click(function(){
	verificarErro('O');
});

$("#P").click(function(){
	verificarErro('P');
});

$("#Q").click(function(){
	verificarErro('Q');
});

$("#R").click(function(){
	verificarErro('R');
});

$("#S").click(function(){
	verificarErro('S');
});

$("#T").click(function(){
	verificarErro('T');
});

$("#U").click(function(){
	verificarErro('U');
});

$("#V").click(function(){
	verificarErro('V');
});

$("#W").click(function(){
	verificarErro('W');
});

$("#X").click(function(){
	verificarErro('X');
});

$("#Y").click(function(){
	verificarErro('Y');
});

$("#Z").click(function(){
	verificarErro('Z');
});

$("#btn-chutar-palavra").click(function() {
	if ($("#chutar-palavra").val().toLowerCase() === senha.toLowerCase()) {
		acabou = true;
		$('#letras-erradas').html('Você venceu Illuminati!');
		setInterval(function(){location.replace('ranking.html');}, 5000);
	} else{
		acabou = true;
		$('#letras-erradas').html('Você perdeu, vai chorar?');
		setInterval(function(){location.replace('ranking.html');}, 5000);
	}
});
