// Registra o Service Worker para permitir funcionamento offline e instalação
if ('serviceWorker' in navigator) {
window.addEventListener('load', () => {
navigator.serviceWorker.register('sw.js')
.then(reg => console.log('Service Worker registrado com sucesso!', reg))
.catch(err => console.log('Erro ao registrar Service Worker:', err));
});
}

function calcular(){
  let vDado = parseFloat(document.getElementById("vEmprestado").value);
  let taxa = parseFloat(document.getElementById("pctgem").value);
  let juros = vDado * (taxa/100);
  let receber = vDado + juros;
  document.getElementById("vRecebido").value = "R$ " + receber.toFixed(2);
  document.getElementById("vJuros").value = "R$ " + juros.toFixed(2);
}
function limpar(){
  document.getElementById("vEmprestado").value="";
  document.getElementById("pctgem").value="";
  document.getElementById("vRecebido").value = "";
  document.getElementById("vJuros").value = "";
}