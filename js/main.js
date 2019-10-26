function botao(){
    document.getElementById("agradecimento").innerHTML= "<b>Obrigada por clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("obrigada por clicar");
};

function redirecionar(){
window.open("https://digitalinnovation.one/sign-in");
//herf abre a pagina no mesmo ambiente ao redirecionar
//window.location.href="https://digitalinnovation.one/sign-in";
};

function trocar(){
    document.getElementById("mousemove").innerHTML="Obrigada por passar o mouse"
    //alert("trocar texto");
};
function voltar(){
    document.getElementById("mousemove").innerHTML="passe o mouse aqui"
};

function load(){
    alert("página carregada");
};

function funcaochange(elemento){
console.log(elemento.value)
};



/*
//esta funcao valida a idade e retorna true or false
function validaridade(idade){ 
    if( idade >= 18) { 
        return true;
    } else { 
        return false;
    }
};

var idade = prompt ("Qual a sua idade?");
console.log(validaridade(idade));
*/

/*
function soma (n1, n2){
    return n1+n2;
};
*/

//alert(soma (5, 10));
//alert(setReplace ("vai japão", "japão", "Brasil"));

/*
//Esta função altera as strings 
function setReplace (frase, nome, nome_novo){
    return frase.replace(nome, nome_novo)
};
*/


/*
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
*/

/*
var count;
for (count=0; count <= 5; count++){
    alert(count);
};
*/


/*
var count = 0;
while( count <= 5) {
    console.log(count);
    count=count + 1;
};
*/


/*
var idade= prompt ("Qual a sua idade ?");
if(idade >= 18){
    alert("maior de idade");
} else {
    alert("menor de idade");
} 
*/



/*var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/

//var fruta={nome:"maçã", cor:"vermelha"};
//console.log(fruta);


//var lista = ["banana", "maçã", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join("-"))


//var nome="Lissandra Mota";
//var idade=28;
//var frase= "Japão é o melhor time do mundo";
//alert(nome + "tem" + idade + "anos");
//console.log(frase.replace ("Japão","Brasil"));

