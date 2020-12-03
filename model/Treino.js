const mongoose = require('mongoose');

const TreinoSchema = mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    exercicios:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Exercicio'
    }]
});

mongoose.model('Treino',TreinoSchema);