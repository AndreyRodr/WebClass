let eventos = [];

function carregarEventos() {
    const eventosSalvos = sessionStorage.getItem("eventos");
    if (eventosSalvos) {
        eventos = JSON.parse(eventosSalvos);
    }
}

function salvarEventos() {
    sessionStorage.setItem("eventos", JSON.stringify(eventos));
}

function atualizarLista() {
    const lista = document.getElementById("task-list");
    lista.innerHTML = ""; 

    eventos.forEach((evento, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>Título:</strong> ${evento.titulo}<br>
            <strong>Data e Hora:</strong> ${evento.dataHora}<br>
            <strong>Local:</strong> ${evento.local}
        `;

        const buttonsContainer = document.createElement("div");
        buttonsContainer.classList.add("buttons-container");

        const editarBtn = document.createElement("button");
        editarBtn.textContent = "Editar";
        editarBtn.addEventListener("click", () => editarEvento(index));

        const removerBtn = document.createElement("button");
        removerBtn.textContent = "Remover";
        removerBtn.addEventListener("click", () => removerEvento(index));

        buttonsContainer.appendChild(editarBtn);
        buttonsContainer.appendChild(removerBtn);
        li.appendChild(buttonsContainer);

        lista.appendChild(li); 
    });
    salvarEventos(); 
}

document.getElementById("adicionar-btn").addEventListener("click", function() {
    const titulo = document.getElementById("tituloEvento").value;
    const dataHora = document.getElementById("dataHoraEvento").value;
    const local = document.getElementById("localEvento").value;

    if (titulo && dataHora && local) { 
        const novoEvento = {
            titulo: titulo,
            dataHora: dataHora,
            local: local
        };
        eventos.push(novoEvento); 

        document.getElementById("tituloEvento").value = "";
        document.getElementById("dataHoraEvento").value = "";
        document.getElementById("localEvento").value = "";

        atualizarLista(); 
    } else {
        alert("Por favor, preencha todos os campos do evento.");
    }
});

function editarEvento(index) {
    const eventoAtual = eventos[index];
    const novoTitulo = prompt("Digite o novo título do evento:", eventoAtual.titulo);
    const novaDataHora = prompt("Digite a nova data e hora (AAAA-MM-DDTHH:MM):", eventoAtual.dataHora);
    const novoLocal = prompt("Digite o novo local do evento:", eventoAtual.local);

    if (novoTitulo !== null && novoTitulo.trim() !== "" &&
        novaDataHora !== null && novaDataHora.trim() !== "" &&
        novoLocal !== null && novoLocal.trim() !== "") {
        eventos[index] = {
            titulo: novoTitulo,
            dataHora: novaDataHora,
            local: novoLocal
        };
        atualizarLista(); 
    } else {
        alert("A edição foi cancelada ou um campo ficou vazio.");
    }
}

function removerEvento(index) {
    const confirmacao = confirm("Tem certeza que deseja remover esse evento?");
    if (confirmacao) {
        eventos.splice(index, 1); 
        atualizarLista(); 
    }
}

carregarEventos(); 
atualizarLista();  