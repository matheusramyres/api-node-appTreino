const mongoose = require('mongoose');
const express = require('express');

const Usuario = mongoose.model('Usuario');

module.exports = {
    async create(req,res){
      const usuario =  await Usuario.create(req.body);
        return res.send(usuario);
    },

    async index(req,res){
        const usuario = await Usuario.find();
        return res.send(usuario);
    }
}