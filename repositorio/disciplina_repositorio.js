class DisciplinaRepositorio {

    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina);
    }

    atualizarNomeDaDisciplina(codigo, nome) {
        const indxDisciplinaAAlterar = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        if (indxDisciplinaAAlterar > -1) {
            this.disciplinas[indxDisciplinaAAlterar].nome = nome;
        }
    }

    remover(codigo) {
        const indxDisciplinaARemover = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        if (indxDisciplinaARemover > -1) {
            this.disciplinas.splice(indxDisciplinaARemover, 1);
        }
    }

    listar() {
        return this.disciplinas;
    }

    inserirAluno(codigo, aluno) {
        const indxDisciplina = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        if (indxDisciplina > -1) {
            this.disciplinas[indxDisciplina].inserir(aluno);
        }
    }

    removerAluno(codigo, aluno) {
        const indxDisciplina = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        if (indxDisciplina > -1) {
            this.disciplinas[indxDisciplina].remover(aluno);
        }
    }

    listarAlunos(codigo) {
        const indxDisciplina = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        if (indxDisciplina > -1) {
            return this.disciplinas[indxDisciplina].alunos;
        }
    }

    localizarAluno(codigo, nome) {
        const indxDisciplina = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        if (indxDisciplina > -1) {
            return this.disciplinas[indxDisciplina].localizar(nome);
        }
    }
}
