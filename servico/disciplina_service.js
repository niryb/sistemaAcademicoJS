class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length > 0) {
            throw new Error('Disciplina já cadastrada.');

        }
        const disciplinaNova = new Disciplina(codigo, nome);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;
    }

    /*atualizar (codigo, nome) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length != 0) {
            this.repositorio.atualizar(codigo, nome);
        } else {
            throw new Error('Disciplina não encontrada!');
        }
    }*/

    remover(codigo) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length != 0) {
            this.repositorio.remover(codigo);
        } else {
            throw new Error('Disciplina não encontrada.')
        }
    }

    pesquisarPorCodigo (codigo) {
        return this.repositorio.listar().filter(
            disciplina => disciplina.codigo === codigo);
    }

    pesquisarPorMatricula(codigo, matricula) {
        return this.repositorio.localizarAluno(codigo, matricula);
    }

    inserirAlunoNaDisciplina(codigo, aluno) {
        const disciplina = this.pesquisarPorCodigo(codigo)[0];
        if (disciplina) {
            disciplina.inserir(aluno);
        }
        else {
            throw new Error('Disciplina não encontrada.')
        }
    }

    removerAluno(codigo, aluno) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length != 0) {
            disciplinaPesquisada[0].removerAluno(aluno);
        } else {
            throw new Error('Disciplina não encontrada.')
        }
    }


}