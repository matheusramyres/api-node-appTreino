const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nome: {
        type:String,
        required: true
    },
    nascimento: {
        type:Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    treino: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Treino'
    }],
    medidas:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Medida'
    }
});

mongoose.model('Usuario', UsuarioSchema);