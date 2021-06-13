const selectBody = document.querySelector('body');

const newHeader = () => {
  const createHeader = document.createElement('header');
  selectBody.appendChild(createHeader);
};

const populateHeader = () => {
  const selectHeader = document.querySelector('header');
  const createH1 = document.createElement('h1');
  createH1.innerText = 'Minha Lista de Tarefas';
  selectHeader.appendChild(createH1);
};

const createParagraf = () => {
  const newParagraf = document.createElement('p');
  newParagraf.id = 'funcionamento';
  newParagraf.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  selectBody.appendChild(newParagraf);
};
window.onload = () => {
  newHeader();
  populateHeader();
  createParagraf();
};
// // Requisito 1
// const criarHeader = document.createElement('header');
// const pegarBody = document.body;
// const criarH1 = document.createElement('h1');

// pegarBody.appendChild(criarHeader);
// criarHeader.appendChild(criarH1);
// criarH1.innerHTML = 'Minha Lista de Tarefas';

// // Requisito 2
// const criarParagrafo = document.createElement('p');
// pegarBody.appendChild(criarParagrafo);
// criarParagrafo.id = 'funcionamento';
// criarParagrafo.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';

// // Requisito 3
// const criarInput = document.createElement('input');
// pegarBody.appendChild(criarInput);
// criarInput.id = 'texto-tarefa';

// // Requisito 5
// const criarBotao = document.createElement('button');
// pegarBody.appendChild(criarBotao);
// criarBotao.id = 'criar-tarefa';
// criarBotao.innerHTML = 'Criar Nova Tarefa';

// // Requisito 4
// const criarOl = document.createElement('ol');
// pegarBody.appendChild(criarOl);
// criarOl.id = 'lista-tarefas';
// const criarLi = document.createElement('li');

// // Requisito 6
// criarBotao.addEventListener('click', function(){
//   const novaLista = document.createElement('li');
//   criarOl.appendChild(novaLista);
//   novaLista.innerHTML = criarInput.value;
//   criarInput.value = '';
//   novaLista.addEventListener('click', function(){
//     const getList = document.querySelectorAll('li')
//     for(let index = 0; index < getList.length; index += 1){
//       getList[index].classList.remove('selected')
//     }
//     novaLista.classList.add('selected');
//   })
//     novaLista.addEventListener('dblclick', function(event){
//       if(event.target.classList.contains('completed')){
//         event.target.classList.remove('completed');
//       } else {
//         event.target.classList.add('completed');
//       }
//     })
// });
