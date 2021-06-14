const selectBody = document.querySelector('body');

const newHeader = () => {
  const createHeader = document.createElement('header');
  selectBody.appendChild(createHeader);
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

const newInput = () => {
  const selectDiv = document.getElementById('submit');
  const createInput = document.createElement('input');
  createInput.id = 'texto-tarefa';
  selectDiv.appendChild(createInput);
};

const buttonNewList = () => {
  const selectDiv = document.getElementById('submit');
  const newButton = document.createElement('button');
  newButton.id = 'criar-tarefa';
  newButton.innerText = 'Nova tarefa';
  selectDiv.appendChild(newButton);
};

const newDivForm = () => {
  const newDiv = document.createElement('div');
  newDiv.id = 'submit';
  const selectParagraf = document.getElementById('funcionamento');
  selectParagraf.insertAdjacentElement('afterend', newDiv);
  newInput();
  buttonNewList();
};

const newOrdenedList = () => {
  const newOl = document.createElement('ol');
  newOl.id = 'lista-tarefas';
  selectBody.appendChild(newOl);
};

const removeClassSelected = () => {
  const selectLi = document.querySelectorAll('li');
  selectLi.forEach((li) => li.classList.remove('selected'));
};

const removeClassCompleted = () => {
  const selectCompleted = document.querySelectorAll('.completed');
  selectCompleted.forEach((item) => item.addEventListener('dblclick', (event) => {
    event.target.classList.remove('completed');
  }));
};

const completedItem = () => {
  const selectLi = document.querySelectorAll('li');
  selectLi.forEach((item) => item.addEventListener('dblclick', (event) => {
    const clique = event;
    clique.target.className = 'completed';
    removeClassCompleted();
  }));
};

const selectItem = () => {
  const selectLi = document.querySelectorAll('li');
  selectLi.forEach((item) => item.addEventListener('click', (event) => {
    const clique = event;
    removeClassSelected();
    if (clique.target.className === 'selected') {
      clique.target = '';
    } else {
      clique.target.className = 'selected';
    }
  }));
};

const buttonSubmit = () => {
  const selectButton = document.getElementById('criar-tarefa');
  const selectOl = document.getElementById('lista-tarefas');
  const selectTexto = document.getElementById('texto-tarefa');
  selectButton.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = selectTexto.value;
    selectOl.appendChild(li);
    selectTexto.value = '';
    selectItem();
    completedItem();
  });
};

const buttonCleanList = () => {
  const newButton = document.createElement('button');
  newButton.id = 'apaga-tudo';
  newButton.innerText = 'Apagar Toda Lista';
  const selectOl = document.querySelector('ol');
  selectOl.insertAdjacentElement('afterend', newButton);
  newButton.addEventListener('click', () => {
    const selectLi = document.querySelectorAll('li');
    selectLi.forEach((li) => li.remove());
  });
};
const buttonCleanCompleted = () => {
  const newButton = document.createElement('button');
  newButton.id = 'remover-finalizados';
  newButton.innerText = 'Apaga Itens Finalizados';
  const selectOl = document.querySelector('ol');
  selectOl.innerHTML = localStorage.getItem('lista');
  selectOl.insertAdjacentElement('afterend', newButton);
  newButton.addEventListener('click', () => {
    const selectLi = document.querySelectorAll('.completed');
    selectLi.forEach((li) => li.remove());
  });
};

const buttonSaveList = () => {
  const newButton = document.createElement('button');
  newButton.innerText = 'Salvar minha Lista';
  newButton.id = 'salvar-tarefas';
  const selectSubmit = document.getElementById('submit');
  selectSubmit.insertAdjacentElement('afterend', newButton);
  newButton.addEventListener('click', () => {
    const ol = document.querySelector('ol').innerHTML;
    localStorage.setItem('lista', ol);
  });
};

window.onload = () => {
  newHeader();
  createParagraf();
  newDivForm();
  newOrdenedList();
  buttonSubmit();
  buttonCleanList();
  buttonCleanCompleted();
  buttonSaveList();
  selectItem();
  completedItem();
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
