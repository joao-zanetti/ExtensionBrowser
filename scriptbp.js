var stringOriginal = document.querySelector('#stringOriginal');
var dataform = document.querySelector('#dataform');
var selpalavraExtra= document.querySelector('#selpalavraExtra');
var button= document.querySelector('#buscapalavra');



fetch('478palavras.txt')
  .then(response => response.text())
  .then(function(text){
  	var palavras= text.split('\n');
  	for (var i=0; i<10;i++){
  		var rand= palavras[Math.floor(Math.random()*palavras.length)];
  		var optionPalavra= document.createElement('option');
  		optionPalavra.innerHTML=rand;
  		selpalavraExtra.appendChild(optionPalavra);
  	};
  	

  })

dataform.onsubmit= function(e){
  e.preventDefault();
  var concpalavra= stringOriginal.value+' '+selpalavraExtra.value
  console.log(stringOriginal.value);
  console.log(selpalavraExtra.value);
  console.log(concpalavra);
  window.open('http://google.com/search?q='+concpalavra);
}

button.addEventListener("click", function(){
  if((stringOriginal.value).length==0){
    alert('Digite alguma palavra para buscar');
  }
  else{
    window.open('http://google.com/search?q='+stringOriginal.value);
  }
});