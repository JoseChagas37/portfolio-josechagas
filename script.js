// Tema dark //
const botaoDark = document.querySelector( '#thema-dark' );

botaoDark.addEventListener( "change", () => {
 document.body.classList.toggle( "dark" );
});

// modal sobre //

const botaoAbrir = document.querySelector( '#sobre' );
const fechaModal = document.querySelector( '.fecha-modal')
const fundo = document.querySelector( '#fundo' );
const modal = document.querySelector( '#modal' );

const toggleModal = () => {
  [ modal,    fundo  ].forEach(( el ) => el.classList.toggle( "hide" ));
};

[ botaoAbrir,   fechaModal, fundo ].forEach(( el ) => {
  el.addEventListener( "click", () => toggleModal());
});

// Modal Projetos //

const botaoProjetos = document.querySelector( '#projetos');
const fechaModalProjetos = document.querySelector( '.fecha-modal-projetos' );
const modalProjetos = document.querySelector( "#modal-projetos")
const fundoProjetos = document.querySelector( '#fundo-modal-projetos');

const toggleModalProjetos = () => {
  [ modalProjetos,    fundoProjetos ].forEach(( el ) => el.classList.toggle( "hider" ));
};

[ botaoProjetos,   fechaModalProjetos, fundoProjetos ].forEach(( el ) => {
  el.addEventListener( "click", () => toggleModalProjetos());
});

// Modal Contato //

const botaoContato = document.querySelector( '#contato' );
const fechaModalContato = document.querySelector( '.fecha-modal-contato' );
const modalContato = document.querySelector( "#modal-contato" )
const fundoContato = document.querySelector( '#fundo-modal-contato');

const toggleModalContato = () => {
  [ modalContato,    fundoContato ].forEach(( el ) => el.classList.toggle( "hiderr" ));
};

[ botaoContato,   fechaModalContato, fundoContato ].forEach(( el ) => {
  el.addEventListener( "click", () => toggleModalContato());
});

// Menu Mobile //

const menuHamburguer = document.querySelector( '.hamburguer');
const navMenu = document.querySelector( '.nav-menu');

menuHamburguer.addEventListener( 'click', () => {
  menuHamburguer.classList.toggle('ativo');
  navMenu.classList.toggle('ativo');
});


// Calculadora //

const resultado = document.querySelector( '#tela ');
const confirmar = document.querySelector( '#equal-btn' );

function insert( valor ){
  resultado.innerHTML += valor;
};
function limpar() {
  resultado.innerHTML = ' ';
};
function backspace() {
  if( resultado.textContent ) {
    let result = document.querySelector( '.result' ).innerHTML
    resultado.innerHTML = result.substring( 0, result.length -1 )
  };
};

function confirma() {
  if( resultado.textContent != 'Erro' ) {
    document.querySelector('.result').innerHTML = eval( resultado.innerHTML )
  }
}




 







