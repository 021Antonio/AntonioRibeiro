// function Text() {
//     document.write("<p>Este texto foi gerado com js</p>" + 
//     "<a href='index.html'> voltar para a página original<a>");
// } onclick='Voltar()'

var geral = document.getElementById("caixa");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var button = document.getElementById("but")

function Inicio() {
    geral.removeChild(box2);
    geral.removeChild(box3);
}
function Text() {       
    geral.removeChild(box1);
    geral.appendChild(box2); 
    geral.appendChild(box3);
    box3.innerHTML = "<a> ps: Uma possivel atualiçao do corricuolo, pode ser uma calculadora. Quando você precisar de uma calculadora, lembrese que no meu curriculo vai ter uma!!!</a>";
    button.innerHTML = "<button id='button' onclick='Voltar()'>Voltar</button>";
}   
function Voltar() {
    geral.appendChild(box1);
    geral.removeChild(box2);    
    geral.removeChild(box3);
    button.innerHTML = "<button id='button' onclick='Text()'>Conquistas Acadêmicas</button>"
}

//Add

let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled' || darkMode == null) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
    enableDarkMode();
}