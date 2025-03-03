
const dicionarioAFazer = {};
const dicionarioConcluidas = {};
let btn_selected = document.getElementById("btnHoje");
let headerLogo = document.getElementById("headerLogo");
let containerFuncionalidades = document.getElementById("containerFuncionalidades");
const dados = {
    "users": {
        "eb3266907@gmail.com":{
            "userId": "hgs767gdga",
            "senha" : "emerson1234",
            "nome" : "Emerson Bruno Carvalho da Silva",
            "allTasks": {

            },
            "ecoTasks" : {

            },
        },
        "vitorio@gmail.com":{
            "userId": "brka53ls9o",
            "senha" : "vitorio1234",
            "nome" : "Vitorio",
            "allTasks": {

            },
            "ecoTasks" : {
                
            },
        }
    },
    "ecoTasks":{},
    "userLogin":{}
};


function btnHoje(){
    let btnHoje = document.getElementById("btnHoje");
    let btnHojeClass = btnHoje.classList;
    if (btnHojeClass.contains("icon-selected")){
        // btn_selected.classList.add("icon-selected");
        let zero =0;
    }else{
        btn_selected.classList.remove("icon-selected");
        btnHojeClass.add("icon-selected");
        btn_selected = btnHoje;
        containerHoje();
    }
}
function containerHoje(){
    headerLogo.innerHTML = "Hoje";
    containerFuncionalidades.innerHTML = `
        <div class="div-input-tarefa">
            <input onfocus="limparPlaceholder()" id="input-tarefa" placeholder="Digite sua tarefa" type="text">
            <button onclick="funcAddTarefa()" id="btn-addtarefa"><span class="material-icons">add</span></button>
        </div>
        <div class="opcoes-tarefa">
            <button onclick="btnAFazer()" id="btn-afazer">A Fazer (0)</button>
            <button onclick="btnConcluidas()" id="btn-concluidas">Concluídas (0)</button>
        </div>
        <div id="containerTarefas" class="container-tarefas">
        </div>`

    // btnAFazer();    
}



function btnHabito(){
    let btnHabito = document.getElementById("btnHabito");
    let btnHabitoClass = btnHabito.classList;
    if (btnHabitoClass.contains("icon-selected")){
        // btn_selected.classList.add("icon-selected");
        let zero = 0;
    }else{
        btn_selected.classList.remove("icon-selected");
        btnHabitoClass.add("icon-selected");
        btn_selected = btnHabito;
        containerHabito();

    }
}
function containerHabito(){
    headerLogo.innerHTML = "Hábitos";
    containerFuncionalidades.innerHTML = "";
}


function btnTarefas(){
    let btnTarefas = document.getElementById("btnTarefas");
    let btnTarefasClass = btnTarefas.classList;
    if (btnTarefasClass.contains("icon-selected")){
        // btn_selected.classList.add("icon-selected");
        let zero = 0;
    }else{
        btn_selected.classList.remove("icon-selected");
        btnTarefasClass.add("icon-selected");
        btn_selected = btnTarefas;
    }
}


function btnMaisOpcoes(){
    let btnMaisOpcoes = document.getElementById("btnMaisOpcoes");
    let btnMaisOpcoesClass = btnMaisOpcoes.classList;

    // btn_selected.classList.remove("icon-selected");
    btnMaisOpcoesClass.toggle("icon-selected-moreOptions");
    // btn_selected = btnMaisOpcoes;
    menuMoreOptions();
}


function menuMoreOptions(){
    let optionsMenu = document.getElementById("menuMoreOptions");
    optionsMenu.classList.toggle("activeMenuMoreOptions");
}


function btnLinkOption(link){
    window.location.href = link;
}
// function showTaskHabitMenu(){
//     let menuTaskHabit = document.getElementById("menuTaskHabit");
//     menuTaskHabit.classList.add("activeAddTaskHabit");
// }


document.addEventListener('DOMContentLoaded', () => {
    const menuTaskHabit = document.getElementById('menuTaskHabit');
    const toggleButton = document.getElementById('addTaskOptions');
    const menuMoreOptions = document.getElementById("menuMoreOptions");
    const btnMaisOpcoes = document.getElementById("btnMaisOpcoes");

    toggleButton.addEventListener('click', () => {
        if (btn_selected == document.getElementById("btnMaisOpcoes")){
            return;
        };
        menuTaskHabit.classList.toggle("activeAddTaskHabit");
    });

    document.addEventListener('click', (event) => {
        if (menuTaskHabit.classList.contains("activeAddTaskHabit")){
            if (menuTaskHabit.contains(event.target) || toggleButton.contains(event.target)) {
                let zero = 0;
                return;
            }else{
                menuTaskHabit.classList.remove("activeAddTaskHabit");
            }
        };
        if (menuMoreOptions.classList.contains("activeMenuMoreOptions")){
            if (btnMaisOpcoes.contains(event.target) || menuMoreOptions.contains(event.target)){
                return;
            }else{
                btnMaisOpcoes.classList.remove("icon-selected-moreOptions");
                menuMoreOptions.classList.remove("activeMenuMoreOptions");
            }
        }
    });
});


function switchMenuIcon(mobileMenu, navList) {
    let blocoIcon = document.getElementById("menu-icon");
    // let mobileMenu
    if (navList.classList.contains("active")) {
        mobileMenu.classList.add("close");
        mobileMenu.style.position = "fixed";
        setTimeout(() => {
            mobileMenu.innerHTML = "close";
            mobileMenu.classList.remove("close");
        }, 500); // Tempo deve coincidir com a duração da transição
    } else {
        mobileMenu.classList.add("close");
        mobileMenu.style.position = "static"
        setTimeout(() => {
            mobileMenu.innerHTML = "menu";
            mobileMenu.classList.remove("close");
        }, 500); // Tempo deve coincidir com a duração da transição
    }
}



// class MobileNavbar{
//     constructor(mobileMenu, navList, navLinks){
//         this.mobileMenu = document.querySelector(mobileMenu);
//         this.navList = document.querySelector(navList);
//         this.navLinks = document.querySelectorAll(navLinks);
//         this.activeClass = "active";

//         this.handleClick = this.handleClick.bind(this);
//     }

//     animateLinks(){
//         // console.log(this.navLinks)
//         this.navLinks.forEach((link) => {
//             link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
//         });
//     }
//     handleClick() {
//         this.navList.classList.toggle(this.activeClass);
//         this.animateLinks();
        
//         switchMenuIcon(this.mobileMenu, this.navList);
//     }
    
//     addClickEvent(){
//         this.mobileMenu.addEventListener("click", this.handleClick);
//     }
//     init(){
//         if (this.mobileMenu){
//             this.addClickEvent();
//         }
//         return this;
//     }
// }
// const mobileNavbar = new MobileNavbar("#menu-icon span", ".nav-list", ".nav-list li");
// mobileNavbar.init();


// function funcAddTarefa(){
//     let input_tarefa = document.getElementById("input-tarefa");
//     let texto_tarefa = input_tarefa.value;
//     if ((texto_tarefa === "") || (texto_tarefa === undefined) || (texto_tarefa === null)){
//         input_tarefa.placeholder = "Digite uma tarefa para poder adicioná-la";
//         return;
//     };
//     let idTarefa = `'${contador}${texto_tarefa}'`;
//     dicionarioAFazer[idTarefa] = texto_tarefa;
//     btnAFazer();
//     contador += 1;
//     input_tarefa.value = "";
//     input_tarefa.onfocus();

// };
// function deletarTarefa(id_tarefa){
//     let real_idTarefa = `'${id_tarefa}'`;
//     let tarefa_html = document.getElementById(real_idTarefa);
//     let temClasseMarcada = tarefa_html.classList.contains('marcada');
//     if (temClasseMarcada){
//         delete dicionarioConcluidas[real_idTarefa];
//         btnConcluidas();
//     }else {
//         delete dicionarioAFazer[real_idTarefa];
//         btnAFazer();
//     }
// };
// function marcarTarefa(id_tarefa){
//     let real_idTarefa = `'${id_tarefa}'`;
//     let tarefa_html = document.getElementById(real_idTarefa);
//     let temClasseMarcada = tarefa_html.classList.contains('marcada');
//     if (temClasseMarcada){
//         dicionarioAFazer[real_idTarefa] = dicionarioConcluidas[real_idTarefa];
//         delete dicionarioConcluidas[real_idTarefa];
//         btnConcluidas();
//     }else {
//         dicionarioConcluidas[real_idTarefa] = dicionarioAFazer[real_idTarefa];
//         delete dicionarioAFazer[real_idTarefa];
//         btnAFazer();
//     }
// };

// function btnAFazer(){
//     let input_tarefa = document.getElementById("input-tarefa");
//     let btn_addTarefa = document.getElementById("btn-addtarefa");
//     let containerTarefas = document.getElementById("containerTarefas");
//     let btn_aFazer = document.getElementById("btn-afazer");
//     let btn_concluidas = document.getElementById("btn-concluidas");
//     containerTarefas.innerHTML = "";
//     btn_aFazer.classList.add('btn-selecionado');
//     if (btn_concluidas.classList.contains('btn-selecionado')){
//         btn_concluidas.classList.remove('btn-selecionado');
//     };
//     if (Object.keys(dicionarioAFazer).length < 1){
//         containerTarefas.innerHTML = 
//         `<div class="semTarefas">
//             Não há tarefas aqui
//         </div>`;
//         btn_aFazer.innerHTML = `A Fazer (${Object.keys(dicionarioAFazer).length})`;
//         btn_concluidas.innerHTML = `Concluídas (${Object.keys(dicionarioConcluidas).length})`;    
//         return;
//     }
//     for (const id_tarefa in dicionarioAFazer){
//         if (dicionarioAFazer.hasOwnProperty(id_tarefa)){
//             tarefa =     
//             `<div id="${id_tarefa}" class="tarefa">
//                 <div onclick="marcarTarefa(${id_tarefa})" class="tarefa-icon">
//                     <span class="material-icons">radio_button_unchecked</span>
//                 </div>
//                 <div onclick="marcarTarefa(${id_tarefa})" class="tarefa-texto">
//                     ${dicionarioAFazer[id_tarefa]}
//                 </div>
//                 <div class="tarefa-opcoes">
//                     <div class="btn-editar">
//                         <span class="material-icons">edit</span>
//                     </div>
//                     <div onclick="deletarTarefa(${id_tarefa})" class="btn-delete">
//                         <span class="material-icons">delete_outline</span>
//                     </div>
//                 </div>
//             </div>`;
    
//             containerTarefas.innerHTML += tarefa;
//         }
//     }
//     btn_aFazer.innerHTML = `A Fazer (${Object.keys(dicionarioAFazer).length})`;
//     btn_concluidas.innerHTML = `Concluídas (${Object.keys(dicionarioConcluidas).length})`;
// };
// function btnConcluidas(){
//     let input_tarefa = document.getElementById("input-tarefa");
//     let btn_addTarefa = document.getElementById("btn-addtarefa");
//     let containerTarefas = document.getElementById("containerTarefas");
//     let btn_aFazer = document.getElementById("btn-afazer");
//     let btn_concluidas = document.getElementById("btn-concluidas");
//     containerTarefas.innerHTML = "";
//     btn_concluidas.classList.add('btn-selecionado');
//     if (btn_aFazer.classList.contains('btn-selecionado')){
//         btn_aFazer.classList.remove('btn-selecionado');
//     };
//     if (Object.keys(dicionarioConcluidas).length < 1){
//         containerTarefas.innerHTML = 
//         `<div class="semTarefas">
//             Não há tarefas aqui
//         </div>`;
//         btn_aFazer.innerHTML = `A Fazer (${Object.keys(dicionarioAFazer).length})`;
//         btn_concluidas.innerHTML = `Concluídas (${Object.keys(dicionarioConcluidas).length})`;    
//         return;
//     }
//     for (const id_tarefa in dicionarioConcluidas){
//         if (dicionarioConcluidas.hasOwnProperty(id_tarefa)){
//             tarefa =     
//             `<div id="${id_tarefa}" class="tarefa marcada">
//                 <div onclick="marcarTarefa(${id_tarefa})" class="tarefa-icon">
//                     <span class="material-icons">check_circle_outline</span>
//                 </div>
//                 <div onclick="marcarTarefa(${id_tarefa})" class="tarefa-texto">
//                     ${dicionarioConcluidas[id_tarefa]}
//                 </div>
//                 <div class="tarefa-opcoes">
//                     <div class="btn-editar">
//                         <span class="material-icons">edit</span>
//                     </div>
//                     <div onclick="deletarTarefa(${id_tarefa})" class="btn-delete">
//                         <span class="material-icons">delete_outline</span>
//                     </div>
//                 </div>
//             </div>`;
    
//             containerTarefas.innerHTML += tarefa;
//         }
//     }
//     btn_aFazer.innerHTML = `A Fazer (${Object.keys(dicionarioAFazer).length})`;
//     btn_concluidas.innerHTML = `Concluídas (${Object.keys(dicionarioConcluidas).length})`;
// };
// function limparPlaceholder(){
//     let input_tarefa = document.getElementById("input-tarefa");
//     input_tarefa.placeholder = "Digite sua tarefa";
// };

// input_tarefa.addEventListener("keyup", function(event) {
//     if (event.key === "Enter") {
//         event.preventDefault();
//         btn_addTarefa.click();
//     }
// });
