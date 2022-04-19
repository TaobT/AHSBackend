const db = require("../models");
const Lugar = db.Lugar;

//Crear y guardar un nuevo Lugar
exports.create = (req, res) => {
    // Validar que el ID_Lugar no exista
    Lugar.findOne({ ID_Lugar: req.body.ID_Lugar })
        .then(lugar => {
            if (lugar) {
                return res.status(400).send({
                    message: "El ID_Lugar ya existe"
                });
            } else {
                // Crear un nuevo Lugar
                const newLugar = new Lugar({
                    ID_Lugar: req.body.ID_Lugar,
                    Nombre_Lugar: req.body.Nombre_Lugar
                });
                // Guardar el Lugar en la base de datos
                newLugar.save(err => {
                    if (err) {
                        return res.status(500).send({
                            message:
                                err.message || "Error al crear el Lugar."
                        });
                    }
                    return res.send(newLugar);
                });
            }
        })
        .catch(err => {
            return res.status(500).send({
                message:
                    err.message || "Error al crear el Lugar."
            });
        });
}

//Traer todos los nombre lugar
exports.findAll = (req, res) => {
    Lugar.find()
        .then(lugares => {
            if (!lugares) {
                return res.status(404).send({
                    message: "No hay lugares registrados"
                });
            }
            return res.send(lugares);
        })
        .catch(err => {
            return res.status(500).send({
                message:
                    err.message || "Error al traer los lugares."
            });
        });
}

//Traer un lugar de acuerdo a su nombre de lugar
exports.findByNombreLugar = (req, res) => {
    Lugar.find({ Nombre_Lugar: req.params.Nombre_Lugar }).sort({ ID_Lugar: -1 })
        .then(lugar => {
            if (!lugar) {
                return res.status(404).send({
                    message: "No hay lugar con ese nombre de lugar"
                });
            }
            return res.send(lugar);
        })
        .catch(err => {
            return res.status(500).send({
                message:
                    err.message || "Error al traer el lugar."
            });
        });
}

//Traer el ultimo lugar registrado
exports.ultimo = (req, res) => {
    Lugar.find().sort({ ID_Lugar: -1 }).then(lugar => {
            console.log("Ultimo lugar");
            if (!lugar) {
                return res.status(404).send({
                    message: "No hay lugar registrado"
                });
            }
            console.log(lugar);
            return res.send(lugar);
        })
        .catch(err => {
            return res.status(500).send({
                message:
                    err.message || "Error al traer el lugar."
            });
        });
}