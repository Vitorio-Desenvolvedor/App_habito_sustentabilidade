let input_tarefa = document.getElementById("input-tarefa");
let btn_addTarefa = document.getElementById("btn-addtarefa");
let containerTarefas = document.getElementById("containerTarefas");
const dicionarioAFazer = {};
const dicionarioConcluidas = {};
let contador = 0;
let btn_aFazer = document.getElementById("btn-afazer");
let btn_concluidas = document.getElementById("btn-concluidas");


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
    // console.log(id_tarefa)
    delete dicionarioAFazer[`'${id_tarefa}'`];
    btnAFazer();
};
function marcarTarefa(id_tarefa){
    real_idTarefa = `'${id_tarefa}'`;
    dicionarioConcluidas[real_idTarefa] = dicionarioAFazer[real_idTarefa];
    delete dicionarioAFazer[real_idTarefa];
    btnAFazer();
};

function btnAFazer(){
    containerTarefas.innerHTML = "";
    for (const id_tarefa in dicionarioAFazer){
        if (dicionarioAFazer.hasOwnProperty(id_tarefa)){
            tarefa =     
            `<div class="tarefa">
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
function limparPlaceholder(){
    input_tarefa.placeholder = "Digite sua tarefa";
};

input_tarefa.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btn_addTarefa.click();
    }
});