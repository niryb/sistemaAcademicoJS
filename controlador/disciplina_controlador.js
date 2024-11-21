class DisciplinaControlador {

    constructor() {
        this.disciplinaServico = new DisciplinaService();
        this.alunoServico = new AlunoService();
    }

    inserir() {
        const codigoElemento = document.querySelector("#codigo_disciplina").value;
        const nomeElemento = document.querySelector("#nome_disciplina").value;
        let disciplinaInserida = null;
        try {
            disciplinaInserida =  this.disciplinaServico.inserir(Number(codigoElemento), nomeElemento);
        } catch(e) {
            alert(e);
            console.error(e);
        }
        const listaDisciplinaElemento = document.querySelector("#listaDisciplinas");
        if (disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinaElemento);
        }
    }

    inserirAluno() {
        const codigoDisciplina = Number(document.querySelector("#codigo_cd_aluno").value);
        const nomeElemento = document.querySelector("#nome_aluno").value;
        const idadeElemento = Number(document.querySelector("#idade_aluno").value);
        const matriculaElemento = document.querySelector("#matricula_aluno").value;
        let alunoInserido = null;
        try {
            alunoInserido = this.alunoServico.inserir(nomeElemento, idadeElemento,
                matriculaElemento);
        } catch(e) {
            alert(e);
            console.error(e);
            return;
        }
        //const listaAlunosElemento = document.querySelector("#listaAlunos");
        if (alunoInserido) {
            try {
                this.disciplinaServico.inserirAlunoNaDisciplina(codigoDisciplina, alunoInserido);
                this.atualizarDisciplinaNoHtml(codigoDisciplina);
            } catch (e) {
                alert(e);
                console.error(e);
            }
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.id = `d${disciplina.codigo}`;
        disciplinaElemento.textContent = `${disciplina}`;
        elementoDestino.appendChild(disciplinaElemento);
    }

    atualizarDisciplinaNoHtml(codigo) {
        const disciplinaElemento = document.getElementById(`d${codigo}`);
        const disciplinaAlvo = this.disciplinaServico.pesquisarPorCodigo(codigo)[0];
        if (disciplinaElemento && disciplinaAlvo) {
            disciplinaElemento.textContent = `${disciplinaAlvo}`;
        }
    }
}