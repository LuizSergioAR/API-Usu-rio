'use strict'

const Mongoose = require('mongoose');
const usuario = require('../models/Usuario');
const Usuario = Mongoose.model('Usuario');
const Validation = require('../validators/validator');
const repository = require('../repositories/UsuarioRepository')

exports.get = async (req, res, next) => {

    try {

        let data = await repository.get();
        res.status(200).send(data);

    } catch (e) {

        res.status(500).send({
            message: 'falha ao processar sua requisição'
        });
    }
};

exports.getByNameLastname = async (req, res, next) => {

    try {

        let data = await repository.getByNomeSobrenome(req.body.name, req.body.lastName);
        res.status(200).send(data);

    } catch (e) {

        res.status(500).send({
            message: 'falha ao processar sua requisição'
        });
    }
};

exports.getById = async (req, res, next) => {

    try {

        let data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {

        res.status(500).send({
            message: 'falha ao processar sua requisição'
        });
    }
};

exports.getByNickname = async (req, res, next) => {

    try {

        let data = await repository.getByNickname(req.params.nickname);
        res.status(200).send(data);
    } catch (e) {

        res.status(500).send({
            message: 'falha ao processar sua requisição'
        });
    }
};

exports.post = async (req, res, next) => {

    let contract = new Validation();

    contract.isRequired(req.body.name, 'O nome é requirido');
    contract.isRequired(req.body.lastName, 'O ultimo nome é requirido');
    contract.isRequired(req.body.nickname, 'O apelido é requirido');
    contract.isEmail(req.body.email, 'O email é invalido');
    contract.hasMaxLen(req.body.nickname, 30, 'O apelido não deve ter mais que 30 caracteres');
    contract.hasMaxLen(req.body.bio, 100, 'A bio não deve ter mais que 100 caracteres');

    //Se os dados forem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create(req.body);
        res.status(201).send({ message: 'Usuario cadastrado com sucesso' });
    } catch (e) {

        res.status(500).send({
            message: 'falha ao processar sua requisição'
        });
    }

};

exports.put = async (req, res, next) => {

    try {

        await repository.update(req.params.id, req.body);
        res.status(200).send({ message: 'Usuario atualizado com sucesso' });
    } catch (e) {

        res.status(500).send({
            message: 'falha ao processar sua requisição'
        });
    }


};

exports.updateLastAndEmail = async (req, res, next) => {

    let contract = new Validation();

    contract.isRequired(req.body.lastName, 'O ultimo nome é requirido');
    contract.isEmail(req.body.email, 'O email é invalido');

    //Se os dados forem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {

        let saida = await repository.updateLastAndEmail(req.params.id, req.body);
        res.status(200).send(saida);
    } catch (e) {

        res.status(500).send({
            message: 'falha ao processar sua requisição'
        });
    }


};

exports.updateNickname = async (req, res, next) => {

    let contract = new Validation();

    contract.isRequired(req.body.nickname, 'O apelido é requirido');
    contract.hasMaxLen(req.body.nickname, 30, 'O apelido não deve ter mais que 30 caracteres');

    //Se os dados forem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {

        let saida = await repository.updateNickname(req.params.id, req.body);
        res.status(200).send(saida);
    } catch (e) {

        res.status(500).send({
            message: 'falha ao processar sua requisição'
        });
    }


};

exports.delete = async (req, res, next) => {

    try {

        await repository.delete(req.params.id);
        res.status(200).send({ message: 'Usuario removido com sucesso' });
    } catch (e) {

        res.status(500).send({
            message: 'falha ao processar sua requisição'
        });
    }


};
