const Physician = require("../models/Physician");
const Appointment = require("../models/Appointments");
const Sequelize = require("sequelize");
const { restore } = require("../models/Patients");
const res = require("express/lib/response");

module.exports = {

    async listAllPhysician(req, res) {
        const physician = await Physician.findAll({
            order: [["name", "ASC"]],
        }).tatch((error) => {
            res.status(500).json({ msg: "Falha na conexão" });
        });
        if (physician) res.status(200).json({ sellers });
        else
            res.status(404).json(
                { msg: "Não foi possível encontrar o médico" });
    },



    async newPhysician(req, res) {
        const { name, email, phone } = req.body;
        if (!name || !email || !phone) {
            res.status(400).json({ msg: "Dados obrigatórios não foram preenchidos." });
        }
        const isPhysicianNew = await Physician.findOne({
            where: { email },
        });
        if (isPhysicianNew)
            res.status(403).json({ msg: "Médico já foi cadastrado." });
        else {
            const physician = await Physician.create({
                name,
                email,
                phone,
            }).catch((error) => {
                res.status(500).json({ msg: "Não foi possivel inserir os dados" });
            });
            if (physician)
                res.status(201).json({ msg: "Novo paciente foi adicionado." });
            else
                res.status(404).json({ msg: "Não foi possível cadastrar novo médico." });
        }
    },

}

