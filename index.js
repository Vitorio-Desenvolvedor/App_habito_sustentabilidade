let input_tarefa = document.getElementById("input-tarefa");
let btn_addTarefa = document.getElementById("btn-addtarefa");
let containerTarefas = document.getElementById("containerTarefas");
const dicionarioTarefas = {};


function funcAddTarefa(){
    let texto_tarefa = input_tarefa.value;
    if ((texto_tarefa === "") || (texto_tarefa === undefined) || (texto_tarefa === null)){
        input_tarefa.placeholder = "Digite uma tarefa para poder adicioná-la";
        return;
    };
    containerTarefas.innerHTML += 
    `<div class="tarefa">
        <div class="tarefa-icon">
            <span class="material-icons">radio_button_unchecked</span>
        </div>
        <div class="tarefa-texto">
            ${texto_tarefa}
        </div>
        <div class="tarefa-opcoes">
            <div class="btn-editar">
                <span class="material-icons">edit</span>
            </div>
            <div class="btn-delete">
                <span class="material-icons">delete_outline</span>
            </div>
        </div>
    </div>`;
    input_tarefa.value = "";
    input_tarefa.onfocus();

}
function limparPlaceholder(){
    input_tarefa.placeholder = "Digite sua tarefa";
}

input_tarefa.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btn_addTarefa.click();
    }
});