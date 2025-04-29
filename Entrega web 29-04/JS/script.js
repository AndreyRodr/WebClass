let tarefas = [];

function atualizarLista() {
    const lista = document.getElementById("task-list");
    lista.innerHTML = ""; 

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");
        li.textContent = tarefa;

        const editarBtn = document.createElement("button");
        editarBtn.textContent = "Editar";
        editarBtn.addEventListener("click", () => editarTarefa(index));

        const removerBtn = document.createElement("button");
        removerBtn.textContent = "Remover";
        removerBtn.addEventListener("click", () => removerTarefa(index));

        li.appendChild(editarBtn);
        li.appendChild(removerBtn);

        lista.appendChild(li);
    });
}

document.getElementById("adicionar-btn").addEventListener("click", function() {
    const novaTarefa = document.getElementById("novaTarefa").value;
    if (novaTarefa) {
        tarefas.push(novaTarefa);
        document.getElementById("novaTarefa").value = "";
        atualizarLista();
    }
});

function editarTarefa(index) {
    const novaDescricao = prompt("Digite a nova descrição da tarefa:", tarefas[index]);
    if (novaDescricao !== null && novaDescricao.trim() !== "") {
        tarefas[index] = novaDescricao;
        atualizarLista();
    }
}

function removerTarefa(index) {
    const confirmacao = confirm("Tem certeza que deseja remover essa tarefa?");
    if (confirmacao) {
        tarefas.splice(index, 1);
        atualizarLista();
    }
}

atualizarLista();
