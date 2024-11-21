class Disciplina {

    constructor(codigo, nome) {
        this._codigo = codigo;
        this._nome = nome;
        this._alunos = [];
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(novoCodigo) {
        this._codigo = novoCodigo;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get alunos() {
        return this._alunos;
    }

    set alunos(novosAlunos) {
        this._alunos = novosAlunos;
    }

    inserir(aluno) {
        this._alunos.push(aluno);
    }

    localizar(nome) {
        this._alunos.forEach(aluno => {
            if (aluno.nome === nome) {
                return aluno
            }
        })
        throw new Error('Aluno não encontrado.')
    }

    remover(matricula) {
        let aux = {};
        this._alunos.forEach(aluno => {
            if (aluno.matricula === matricula) {
                aux = aluno;
            }
        })
        try {
            this._alunos.pop(aux);
        } catch {
            throw new Error('Aluno não encontrado.')
        }
    }

    toString() {
        const nomesAlunos = this._alunos.map(aluno => aluno.nome).join(", ");
        return `Codigo: ${this._codigo} | Nome da disciplina: ${this._nome} | Alunos: ${nomesAlunos}`;

        // return `Codigo: ${this._codigo} | Nome da disciplina: ${this._nome} | Alunos: ${this._alunos}`
    }


}


