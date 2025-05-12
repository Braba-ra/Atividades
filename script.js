

document.getElementById('cadastroForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Obtém os dados inseridos no campo 'nome, email, telefone'
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;

  // Lista aonde os usuarios serão adicionados
  const lista = document.getElementById('listaUsuarios');

  // Cria um novo elemento <li>
  const item = document.createElement('li');

  // Item add a lista com as informações cadastradas 
  item.textContent = `Nome: ${nome} | Email: ${email} | Telefone: ${telefone}`;

  // Adiciona os itens a lista
  lista.appendChild(item);
  
  // Limpar formulário
  document.getElementById('cadastroForm').reset();
});
