class AlunoControlador {

    constructor() {
        this.servico = new AlunoService();
    }

    inserir() {
        const nomeElemento = document.querySelector("#nome");
        const idadeElemento = document.querySelector("#idade");
        const matriculaElemento = document.querySelector("#matricula");
        let alunoInserido = null;
        try {
            alunoInserido = this.servico.inserir(nomeElemento.value, Number(idadeElemento.value),
                matriculaElemento.value);
        } catch(e) {
            alert(e);
            console.error(e);
        }
        const listaAlunosElemento = document.querySelector("#listaAlunos");
        if (alunoInserido) {
            this.inserirAlunoNoHtml(alunoInserido, listaAlunosElemento);
        }
    }

    inserirAlunoNoHtml(aluno, elementoDestino) {
        const alunoElemento = document.createElement("li");
        alunoElemento.textContent = `Nome: ${aluno.nome} - Idade: ${aluno.idade}`;
        elementoDestino.appendChild(alunoElemento);
    }

    listarAlunosMenoresIdade() {
        const listaAlunosMenoresElemento = document.querySelector('#listaAlunosMenores');
        const alunosMenores = this.servico.listarMenoresIdade();
        alunosMenores.forEach(menor => this.inserirAlunoNoHtml(menor, listaAlunosMenoresElemento));
    }

}
