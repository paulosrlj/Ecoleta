//Importar a dependencia do sqlite3

const sqlite3 = require('sqlite3')
sqlite3.verbose()

//Iniciar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database('./src/database/database.db')

// utilizar o objeto de banco de dados, para nossas operações
// db.serialize(() => {
//     //Criar uma tabela

//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );        
//     `)


//     //Inserir dados na tabela
//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//         ) VALUES (?,?,?,?,?,?,?);`


//     const values = [
//         "https://images.unsplash.com/photo-1481761289552-381112059e05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=861&q=80",
//         "Paperside",
//         "Guilherme Gemballa, Jardim América",
//         "Número 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ]

//     function afterInsertData(err) {
//         if (err)
//             return console.log(err)

//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

//     //Executa a callback quando terminar o que foi pedido
//     db.run(query, values, afterInsertData)

//Consultar os dados da tabela
// db.all(`SELECT * FROM places`, function (err, rows) {
//     if (err)
//         return console.log(err)

//     console.log('Aqui estão seus registros: ')
//     console.log(rows)
// })

//Deletar um dado da tabela
// db.run(`DELETE FROM places WHERE id = ?`, [3], function (err) {
//     if (err)
//         return console.log(err)

//     console.log('Registro deletado com sucesso')
// })


// })

module.exports = db