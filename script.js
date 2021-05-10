const criarHeader = document.createElement('header');
const pegarBody = document.body
const criarH1 = document.createElement('h1')

pegarBody.appendChild(criarHeader);
criarHeader.appendChild(criarH1);
criarH1.innerHTML = 'Minha Lista de Tarefas'
