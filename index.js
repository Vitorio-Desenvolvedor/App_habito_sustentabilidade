let input_tarefa = document.getElementById("input-tarefa");
let btn_addTarefa = document.getElementById("btn-addtarefa");
let containerTarefas = document.getElementById("containerTarefas");
const dicionarioTarefasAFazer = {};
const dicionarioTarefasConcluidas = {};
let contador_tarefas = 0;
let btn_aFazer = document.getElementById("btn-afazer");
let btn_concluidas = document.getElementById("btn-concluidas");
btn_aFazer.innerHTML = `A Fazer (${Object.keys(dicionarioTarefasAFazer).length})`;
btn_concluidas.innerHTML = `Concluídas (${Object.keys(dicionarioTarefasConcluidas).length})`;


function funcAddTarefa(){
    let texto_tarefa = input_tarefa.value;
    let id_tarefa = `${contador_tarefas}${texto_tarefa}`;
    let strId_tarefa = `'${id_tarefa}'`;
    dicionarioTarefasAFazer[strId_tarefa] = texto_tarefa;

    if ((texto_tarefa === "") || (texto_tarefa === undefined) || (texto_tarefa === null)){
        input_tarefa.placeholder = "Digite uma tarefa para poder adicioná-la";
        return;
    };
    containerTarefas.innerHTML += 
    `<div id="${id_tarefa}" class="tarefa">
        <div  onclick="marcarTarefa(${strId_tarefa}, '${texto_tarefa}')" class="tarefa-icon">
            <span class="material-icons">radio_button_unchecked</span>
        </div>
        <div onclick="marcarTarefa(${strId_tarefa}, '${texto_tarefa}')" class="tarefa-texto">
            ${texto_tarefa}
        </div>
        <div class="tarefa-opcoes">
            <div class="btn-editar">
                <span class="material-icons">edit</span>
            </div>
            <div onclick="deleteTarefa(${strId_tarefa})" class="btn-delete">
                <span class="material-icons">delete_outline</span>
            </div>
        </div>
    </div>`;
    input_tarefa.value = "";
    input_tarefa.onfocus();
    contador_tarefas += 1;
    btn_aFazer.innerHTML = `A Fazer (${Object.keys(dicionarioTarefasAFazer).length})`;
    btn_concluidas.innerHTML = `Concluídas (${Object.keys(dicionarioTarefasConcluidas).length})`;

    // console.log(dicionarioTarefas);

}
function limparPlaceholder(){
    input_tarefa.placeholder = "Digite sua tarefa";
}
function deleteTarefa(id_tarefa){
    // containerTarefas.remove();
    delete dicionarioTarefasAFazer[`'${id_tarefa}'`];
    let tarefa = document.getElementById(id_tarefa);
    tarefa.remove();
    // console.log(dicionarioTarefas)
}
function marcarTarefa(id_tarefa, texto_tarefa){
    delete dicionarioTarefasAFazer[`'${id_tarefa}'`];
    dicionarioTarefasConcluidas[`'${id_tarefa}'`] = texto_tarefa;
    let tarefa = document.getElementById(id_tarefa);
    tarefa.remove();
    btn_aFazer.innerHTML = `A Fazer (${Object.keys(dicionarioTarefasAFazer).length})`;
    btn_concluidas.innerHTML = `Concluídas (${Object.keys(dicionarioTarefasConcluidas).length})`;

}

input_tarefa.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btn_addTarefa.click();
    }
});