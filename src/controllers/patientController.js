const Patients = require("../models/Patients");
const Sequelize = require("sequelize");

module.exports = {
 async searchSellerByName(req, res) {
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
}