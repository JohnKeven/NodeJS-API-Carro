const database = require('../database');

module.exports = {

    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            database.query('SELECT * FROM apiCarros.carro', (error, results) => {
                if(error){
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        })
    },

    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            database.query('SELECT * FROM apiCarros.carro WHERE codigo=?', [codigo], (error, results) => {
                if(error){
                    rejeitado(error);
                    return;
                }
                if(results.length > 0){
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            })
        })
    },

    inserir: (modelo, placa) => {
        return new Promise((aceito, rejeitado) => {
            database.query('INSERT INTO apiCarros.carro (modelo, placa) VALUES (?, ?)',
             [modelo, placa], (error, results) => {
                if(error){
                    rejeitado(error);
                    return;
                }
                aceito(results.insertCodigo);
                }
            );
        });
    },

    alterar: (codigo, modelo, placa) => {
        return new Promise((aceito, rejeitado) => {
            database.query('UPDATE apiCarros.carro SET modelo = ?, placa = ? WHERE codigo = ?',
             [modelo, placa, codigo], (error, results) => {
                if(error){
                    rejeitado(error);
                    return;
                }
                aceito(results);
                }
            );
        });
    },

    excluir: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            database.query('DELETE FROM apiCarros.carro WHERE codigo = ?', [codigo], (error, results) => {
                if(error){
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    }
    
};
