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

// Requisito 5
const criarBotao = document.createElement('button');
pegarBody.appendChild(criarBotao);
criarBotao.id = 'criar-tarefa'
criarBotao.innerHTML = 'Criar Nova Tarefa'

// Requisito 4
const criarOl = document.createElement('ol');
pegarBody.appendChild(criarOl);
criarOl.id = 'lista-tarefas';
const criarLi = document.createElement('li');

// Requisito 6 e 7
criarBotao.addEventListener('click', function(){
  const novaLista = document.createElement('li');
  criarOl.appendChild(novaLista);
  novaLista.innerHTML = criarInput.value;
  criarInput.value = '';
  novaLista.addEventListener('click', function(){
    novaLista.style.backgroundColor = 'rgb(128, 128, 128)'
  })
});


