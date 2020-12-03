const mongoose = require('mongoose');

const MedidaSchema = mongoose.Schema({
    cintura: {
        type:String,
        required: true
    },
    peito: {
        type:String,
        required: true
    },
    ombro: {
        type:String,
        required: true
    },
    pescoco: {
        type:String,
        required: true
    },
    biceps_e: {
        type:String,
        required: true
    },
    biceps_d: {
        type:String,
        required: true
    },
    perna_e: {
        type:String,
        required: true
    },
    perna_d: {
        type:String,
        required: true
    },
    panturrilha_e: {
        type:String,
        required: true
    },
    panturrilha_d: {
        type:String,
        required: true
    },
    gluteos: {
        type:String,
        required: true
    },
    peso: {
        type:String,
        required: true
    }
});

mongoose.model('Medida',MedidaSchema);