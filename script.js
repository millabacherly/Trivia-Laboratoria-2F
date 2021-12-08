var nome = prompt("Bem vinda! Qual o seu nome?")
confirm('Vamos jogar , ' + nome)

document.getElementById('nome').innerHTML=nome;

document.write('Muito obrigada por jogar, ' + nome)

document.getElementById("Resposta1").addEventListener("click", validaResposta1)

function validaResposta1(){
  if(document.getElementById("matilha").checked){
    alert("Parabéns, você acertou!")
  }else{
    alert("Resposta incorreta. Por favor, tente novamente.")
  }
}

document.getElementById("Resposta2").addEventListener("click", validaResposta2)

function validaResposta2(){
  if(document.getElementById("rio_branco").checked){
    alert("Parabéns, você acertou!")
  }else{
    alert("Resposta incorreta. Por favor, tente novamente.")
  }
}

document.getElementById("Resposta3").addEventListener("click", validaResposta3)

function validaResposta3(){
  if(document.getElementById("limao").checked){
    alert("Parabéns, você acertou!")
  }else{
    alert("Resposta incorreta. Por favor, tente novamente.")
  }
}



