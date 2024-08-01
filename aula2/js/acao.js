var nome= document.getElementById('nome');
var cor= document.querySelector('#cor');
var botao= document.querySelector('#btn');
var titulo= document.querySelector('#titulo');

cor.addEventListener('change', function (){      //alert(cor.value);
    document.body.style.backgroundColor = cor.value;   //mudara cor do fundo da pagina
    document.body.style.color = "#FFF";      //muda a cor do texto contido na pagina
});

botao.addEventListener('click',function(e){   //evento de click
   e.preventDefault();
   alert("Bem Vindo" +nome.value);
 });

 window.onload=function(){
    var corFav = prompt("Qual sua cor favorita?");
    var pX = prompt("Digite um valor de posiçao eixo X:");
    var pY = prompt ("Digite um valor de posiçao eixo Y:");
    var alvo = document.querySelector('#alvo');
    //move a bolinha para a direita
    alvo.style.marginLeft = pX+"vw";
    //move a bolinha para baixo
    alvo.style.marginTop = pY+"vh";
    //mudar a acor?
    alvo.style.backgroundColor = corFav;
 }
