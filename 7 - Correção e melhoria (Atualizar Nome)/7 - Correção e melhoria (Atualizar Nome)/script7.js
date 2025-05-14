function atualizarNome() {
 
  // Adicionei (value)

  let nome = document.getElementById('novoNome').value; 
  document.getElementById('resultado').textContent = "Nome atual: " + nome;
}
