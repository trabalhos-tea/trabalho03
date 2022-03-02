const Patients = require("../models/Patients");
const Sequelize = require("sequelize");

module.exports = {
 async searchPatientByName(req, res) {
        const name = req.body.name;
        if (!name)
            res.status(400).json({ msg: "Parâmetro nome está vazio", });
        const Op = Sequelize.Op;
        const patients = await Patients.findAll({
            where: { name: { [Op.like]: "%" + name + "%" } },
        });
        if (patients) {
            if (patients == "")
                res.status(404).json({ msg: "Paciente não encontrado" });
            else res.status(200).json({ patients });
        } else
            res.status(404).json({ msg: "Paciente não encontrado" });
    },

    async newPatient(req, res) {
        const { name, email, phone } = req.body;
        if (!name || !email || !phone) {
            res.status(400).json({ msg: "Dados obrigatórios não foram preenchidos." });
        }
        const isPatientNew = await Patients.findOne({
            where: { email },
        });
        if (isPatientNew)
            res.status(403).json({ msg: "Vendedor já foi cadastrado." });
        else {
            const patients = await Patients.create({
                name,
                email,
                phone,
            }).catch((error) => {
                res.status(500).json({ msg: "Não foi possivel inserir os dados" });
            });
            if (patients)
                res.status(201).json({ msg: "Novo paciente foi adicionado." });
            else
                res.status(404).json({ msg: "Não foi possível cadastrar novo paciente." });
        }
    },



    
}