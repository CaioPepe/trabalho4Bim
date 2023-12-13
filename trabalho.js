let tarefas = [];

function rendertarefas() {
    const listaT = document.getElementById("listaT");
    const filtro = document.getElementById("filtro").value;

    listaT.innerHTML = "";

    tarefas.forEach((tarefas) => {
        if (filtro === "todas" || (filtro === "pendente" && !tarefas.concluida) || (filtro === "concluida" && tarefas.concluida)) {
            const li = document.createElement("li");
            li.innerHTML = `
                <span class="${tarefas.concluida ? 'concluida' : ''}">${tarefas.text}</span>
                <button onclick="marcartarefas(${tarefas.id})">${tarefas.concluida ? 'Desmarcar' : 'Marcar'}</button>
                <button onclick="deletetarefas(${tarefas.id})">Excluir</button>
            `;
            listaT.appendChild(li);
        }
    });
}

function addlista() {
    const lista = document.getElementById("lista");
    const tarefasText = lista.value.trim();

    if (tarefasText !== "") {
        const newtarefas = {
            id: tarefas.length + 1,
            text: tarefasText,
            concluida: false,
        };

        tarefas.push(newtarefas);
        lista.value = "";
        rendertarefas();
    }
}

function marcartarefas(id) {
    const tarefas = tarefas.find((tarefas) => tarefas.id === id);
    if (tarefas) {
        tarefas.concluida = !tarefas.concluida;
        rendertarefas();
    }
}

function deletetarefas(id) {
    tarefas = tarefas.filter((tarefas) => tarefas.id !== id);
    rendertarefas();
}

function filtro() {
    rendertarefas();
}

rendertarefas();
