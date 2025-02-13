

let input_tarefa = document.getElementById("input-tarefa");
let btn_addTarefa = document.getElementById("btn-addtarefa");
let containerTarefas = document.getElementById("containerTarefas");
const dicionarioAFazer = {};
const dicionarioConcluidas = {};
let contador = 0;
let btn_aFazer = document.getElementById("btn-afazer");
let btn_concluidas = document.getElementById("btn-concluidas");
// comentário simples

function switchMenuIcon(mobileMenu, navList) {
    // let mobileMenu
    if (navList.classList.contains("active")) {
        mobileMenu.classList.add("close");
        setTimeout(() => {
            mobileMenu.innerHTML = "close";
            mobileMenu.classList.remove("close");
        }, 500); // Tempo deve coincidir com a duração da transição
    } else {
        mobileMenu.classList.add("close");
        setTimeout(() => {
            mobileMenu.innerHTML = "menu";
            mobileMenu.classList.remove("close");
        }, 500); // Tempo deve coincidir com a duração da transição
    }

}



class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        // console.log(this.navLinks)
        this.navLinks.forEach((link) => {
            link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
        });
    }
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
        
        switchMenuIcon(this.mobileMenu, this.navList);
    }
    
    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init(){
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavbar = new MobileNavbar("#menu-icon span", ".nav-list", ".nav-list li");
mobileNavbar.init();

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('nav-list');
    const toggleButton = document.getElementById('menu-icon');

    // toggleButton.addEventListener('click', () => {
    //     mobileMenu.classList.toggle('active');
    // });

    document.addEventListener('click', (event) => {
        if (mobileMenu.contains(event.target) || toggleButton.contains(event.target)) {
            let zero = 0;
        }else{
            if (mobileMenu.classList.contains("active")){
                // switchMenuIcon(document.querySelector("#menu-icon span"));
                // mobileMenu.classList.remove('active');
                mobileNavbar.handleClick();
            }
        }
    });
});

function funcAddTarefa(){
    let texto_tarefa = input_tarefa.value;
    if ((texto_tarefa === "") || (texto_tarefa === undefined) || (texto_tarefa === null)){
        input_tarefa.placeholder = "Digite uma tarefa para poder adicioná-la";
        return;
    };
    let idTarefa = `'${contador}${texto_tarefa}'`;
    dicionarioAFazer[idTarefa] = texto_tarefa;
    btnAFazer();
    contador += 1;
    input_tarefa.value = "";
    input_tarefa.onfocus();

};
function deletarTarefa(id_tarefa){
    let real_idTarefa = `'${id_tarefa}'`;
    let tarefa_html = document.getElementById(real_idTarefa);
    let temClasseMarcada = tarefa_html.classList.contains('marcada');
    if (temClasseMarcada){
        delete dicionarioConcluidas[real_idTarefa];
        btnConcluidas();
    }else {
        delete dicionarioAFazer[real_idTarefa];
        btnAFazer();
    }
};
function marcarTarefa(id_tarefa){
    let real_idTarefa = `'${id_tarefa}'`;
    let tarefa_html = document.getElementById(real_idTarefa);
    let temClasseMarcada = tarefa_html.classList.contains('marcada');
    if (temClasseMarcada){
        dicionarioAFazer[real_idTarefa] = dicionarioConcluidas[real_idTarefa];
        delete dicionarioConcluidas[real_idTarefa];
        btnConcluidas();
    }else {
        dicionarioConcluidas[real_idTarefa] = dicionarioAFazer[real_idTarefa];
        delete dicionarioAFazer[real_idTarefa];
        btnAFazer();
    }
};

function btnAFazer(){
    containerTarefas.innerHTML = "";
    btn_aFazer.classList.add('btn-selecionado');
    if (btn_concluidas.classList.contains('btn-selecionado')){
        btn_concluidas.classList.remove('btn-selecionado');
    };
    if (Object.keys(dicionarioAFazer).length < 1){
        containerTarefas.innerHTML = 
        `<div class="semTarefas">
            Não há tarefas aqui
        </div>`;
        btn_aFazer.innerHTML = `A Fazer (${Object.keys(dicionarioAFazer).length})`;
        btn_concluidas.innerHTML = `Concluídas (${Object.keys(dicionarioConcluidas).length})`;    
        return;
    }
    for (const id_tarefa in dicionarioAFazer){
        if (dicionarioAFazer.hasOwnProperty(id_tarefa)){
            tarefa =     
            `<div id="${id_tarefa}" class="tarefa">
                <div onclick="marcarTarefa(${id_tarefa})" class="tarefa-icon">
                    <span class="material-icons">radio_button_unchecked</span>
                </div>
                <div onclick="marcarTarefa(${id_tarefa})" class="tarefa-texto">
                    ${dicionarioAFazer[id_tarefa]}
                </div>
                <div class="tarefa-opcoes">
                    <div class="btn-editar">
                        <span class="material-icons">edit</span>
                    </div>
                    <div onclick="deletarTarefa(${id_tarefa})" class="btn-delete">
                        <span class="material-icons">delete_outline</span>
                    </div>
                </div>
            </div>`;
    
            containerTarefas.innerHTML += tarefa;
        }
    }
    btn_aFazer.innerHTML = `A Fazer (${Object.keys(dicionarioAFazer).length})`;
    btn_concluidas.innerHTML = `Concluídas (${Object.keys(dicionarioConcluidas).length})`;
};
function btnConcluidas(){
    containerTarefas.innerHTML = "";
    btn_concluidas.classList.add('btn-selecionado');
    if (btn_aFazer.classList.contains('btn-selecionado')){
        btn_aFazer.classList.remove('btn-selecionado');
    };
    if (Object.keys(dicionarioConcluidas).length < 1){
        containerTarefas.innerHTML = 
        `<div class="semTarefas">
            Não há tarefas aqui
        </div>`;
        btn_aFazer.innerHTML = `A Fazer (${Object.keys(dicionarioAFazer).length})`;
        btn_concluidas.innerHTML = `Concluídas (${Object.keys(dicionarioConcluidas).length})`;    
        return;
    }
    for (const id_tarefa in dicionarioConcluidas){
        if (dicionarioConcluidas.hasOwnProperty(id_tarefa)){
            tarefa =     
            `<div id="${id_tarefa}" class="tarefa marcada">
                <div onclick="marcarTarefa(${id_tarefa})" class="tarefa-icon">
                    <span class="material-icons">check_circle_outline</span>
                </div>
                <div onclick="marcarTarefa(${id_tarefa})" class="tarefa-texto">
                    ${dicionarioConcluidas[id_tarefa]}
                </div>
                <div class="tarefa-opcoes">
                    <div class="btn-editar">
                        <span class="material-icons">edit</span>
                    </div>
                    <div onclick="deletarTarefa(${id_tarefa})" class="btn-delete">
                        <span class="material-icons">delete_outline</span>
                    </div>
                </div>
            </div>`;
    
            containerTarefas.innerHTML += tarefa;
        }
    }
    btn_aFazer.innerHTML = `A Fazer (${Object.keys(dicionarioAFazer).length})`;
    btn_concluidas.innerHTML = `Concluídas (${Object.keys(dicionarioConcluidas).length})`;
};
function limparPlaceholder(){
    input_tarefa.placeholder = "Digite sua tarefa";
};

input_tarefa.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btn_addTarefa.click();
    }
});
