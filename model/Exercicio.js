const mongoose = require('mongoose');

const ExercicioSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    dia_semana: {
        type: String,
        required: true
    },
    treino:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

mongoose.model('Exercicio', ExercicioSchema);