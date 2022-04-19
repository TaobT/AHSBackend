const db = require("../models");
const AHS = db.AHS;

//Crear y guardar un nuevo AHS
exports.create = (req, res) => {
    // Validar que el ID_AHS no exista
    AHS.findOne({ ID_AHS: req.body.ID_AHS })
        .then(ahs => {
            if (ahs) {
                return res.status(400).send({
                    message: "El ID_AHS ya existe"
                });
            } else {
                // Crear un nuevo AHS
                const newAHS = new AHS({
                    ID_AHS: req.body.ID_AHS,
                    ID_Entrada: req.body.ID_Entrada,
                    ID_Lugar: req.body.ID_Lugar,
                    Nombre_Lugar: req.body.Nombre_Lugar,
                    Fecha: req.body.Fecha,
                    CantidadPersonas: req.body.CantidadPersonas,
                    UrlImagen: req.body.UrlImagen
                });
                // Guardar el AHS en la base de datos
                newAHS.save(err => {
                    if (err) {
                        return res.status(500).send({
                            message:
                                err.message || "Error al crear el AHS."
                        });
                    }
                    return res.send(newAHS);
                });
            }
        })
        .catch(err => {
            return res.status(500).send({
                message:
                    err.message || "Error al crear el AHS."
            });
        });
}

//Buscar AHS por nombre del lugar
exports.findByNombreLugar = (req, res) => {
    AHS.find({ Nombre_Lugar: req.params.Nombre_Lugar })
        .then(AHS => {
            if (!AHS) {
                return res.status(404).send({
                    message: "No hay AHS con ese nombre de lugar"
                });
            }
            return res.send(AHS);
        })
        .catch(err => {
            return res.status(500).send({
                message:
                    err.message || "Error al buscar el AHS."
            });
        });
}

//Traer todos los AHS
exports.findAll = (req, res) => {
    AHS.find()
        .then(AHS => {
            if (!AHS) {
                return res.status(404).send({
                    message: "No hay AHS registrados"
                });
            }
            return res.send(AHS);
        })
        .catch(err => {
            return res.status(500).send({
                message:
                    err.message || "Error al traer los AHS."
            });
        });
}