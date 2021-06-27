'use strict'

const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

exports.get = async () => {

    const res = await Usuario.find();
    return res;
};

exports.getById = async (id) => {

    const res = await Usuario.findById(id);
    return res;
};

exports.getByNomeSobrenome = async (nome, sobrenome) => {

    if (nome == null) {

        const res = await Usuario.find({lastName: sobrenome });
        return res;
    } else if (sobrenome == null) {

        const res = await Usuario.find({ name: nome});
        return res;
    } else {

        const res = await Usuario.find({ name: nome, lastName: sobrenome });
        return res;
    }
};

exports.getByNickname = async(apelido) => {

    const res = await Usuario.findOne({ nickname: apelido }, 'name , lastName , nickname');
    return res;
};

exports.create = async (data) => {

    var usuario = new Usuario(data);
    await usuario.save();
};

exports.update = async (id, data) => {

    await Usuario.findByIdAndUpdate(id, {
        $set: {
            name: data.name,
            lastName: data.lastName,
            nickname: data.nickname,
            email: data.email,
            bio: data.bio,
            updateAt: new Date
        }
    });
};

exports.updateLastAndEmail = async (id, data) => {

    await Usuario.findByIdAndUpdate(id, {
        $set: {
            lastName: data.lastName,
            email: data.email,
            updateAt: new Date
        }
    });

    const res = await Usuario.findById(id);
    return res;
};

exports.updateNickname = async (id, data) => {

    await Usuario.findByIdAndUpdate(id, {
        $set: {
            nickname: data.nickname,
            updateAt: new Date
        }
    });

    const res = await Usuario.findById(id);
    return res;
};


exports.delete = async (id) => {

    await Usuario.findOneAndRemove({_id: id});
}