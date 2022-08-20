const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const no = $('#no');

no.onmouseover  =   function(){
    let a = Math.floor(Math.random() * 550);
    let b = Math.floor(Math.random() * 550);

    no.style.left = a + 'px';
    no.style.top = b + 'px';
}

