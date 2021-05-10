// Requisito 1
const criarHeader = document.createElement('header');
const pegarBody = document.body;
const criarH1 = document.createElement('h1');

pegarBody.appendChild(criarHeader);
criarHeader.appendChild(criarH1);
criarH1.innerHTML = 'Minha Lista de Tarefas';

// Requisito 2
const criarParagrafo = document.createElement('p');
pegarBody.appendChild(criarParagrafo);
criarParagrafo.id = 'funcionamento';
criarParagrafo.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';

// Requisito 3
const criarInput = document.createElement('input');
pegarBody.appendChild(criarInput);
criarInput.id = 'texto-tarefa';