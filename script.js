const inputNome =  document.getElementById('inputNome');
const inputEmail = document.getElementById('inputEmail');
const inputTelefone = document.getElementById('inputTelefone');
const service = document.getElementById('services');
const texto = document.querySelector('textarea');
const botao = document.querySelector('button');

botao.addEventListener('click',(event)=>{

  event.preventDefault();
  if(inputNome.value != '' && inputEmail.value != '' && inputTelefone.value != '' && service.value != '' && texto.value != ''){
    alert(`Usuário ${inputNome.value} solicitou um orçamento!`);
}else{
  alert('Campos vazios! Preencha todos os campos!');
}
})