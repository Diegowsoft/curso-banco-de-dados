import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Uma função assíncrona é uma ação que será executada em algum momento no futuro, permitindo que o código continue rodando enquanto aguarda a conclusão dessa ação.
async function criarEPopularTabelaUsuarios(nome, sobrenome) {
    // open significa que estamos abrindo uma conexão com o banco de dados
    const db = await open({
        filename: './banco.db', // nome do arquivo do banco de dados (caminho)
        driver: sqlite3.Database, // driver responsável por fazer essa conexão
        
    })
    // db.run executa uma instrução SQL no banco de dados
    await db.run(`CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, nome TEXT, sobrenome TEXT)`);
    // Eu estou apenas criando as colunas, ainda não estou inserindo dados.
    // A PRIMARY KEY
    await db.run(`INSERT INTO usuarios (nome, sobrenome) VALUES (?, ?)`, [nome, sobrenome]);
    // Isso significa INSIRA dentro da tabela usuários, nas colunas nome e sobrenome, os valores que eu passar a seguir.
    // Os ? são placeholders, ou seja, espaços reservados para os valores que serão inseridos.
    // O array [nome, sobrenome] contém os valores que serão inseridos nos respectivos espaços reservados.
    // Isso é uma medida de segurança para evitar SQL Injection, que é quando alguém tenta inserir código malicioso no banco de dados.
    // O SQL Injection pode acontecer quando os valores são inseridos diretamente na string SQL, sem validação.

    // Fecha a conexão
    await db.close();
}

criarEPopularTabelaUsuarios('Diego', 'Fagundes');