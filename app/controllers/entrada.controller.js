const db = require("../models");
const DatoEntrada = db.DatoEntrada;

//Crear y guardar un nuevo dato de entrada
exports.create = (req, res) => {
    // Validar que el ID_Entrada no exista
    DatoEntrada.findOne({ ID_Entrada: req.body.ID_Entrada })
        .then(datoEntrada => {
            if (datoEntrada) {
                return res.status(400).send({
                    message: "El ID_Entrada ya existe"
                });
            } else {
                // Crear un nuevo dato de entrada
                const newDatoEntrada = new DatoEntrada({
                    ID_Entrada: req.body.ID_Entrada,
                    ID_Lugar: req.body.ID_Lugar,
                    Fecha: req.body.Fecha,
                    UrlImagen: req.body.UrlImagen
                });
                // Guardar el dato de entrada en la base de datos
                newDatoEntrada.save(err => {
                    if (err) {
                        return res.status(500).send({
                            message:
                                err.message || "Error al crear el dato de entrada."
                        });
                    }
                    return res.send(newDatoEntrada);
                });
            }
        })
        .catch(err => {
            return res.status(500).send({
                message:
                    err.message || "Error al crear el dato de entrada."
            });
        });
}

//Traer el dato de entrada mas reciente
exports.findLast = (req, res) => {
    DatoEntrada.findOne({}, {}, { sort: { 'ID_Entrada': -1 } })
        .then(datoEntrada => {
            if (!datoEntrada) {
                return res.status(404).send({
                    message: "No hay datos de entrada"
                });
            }
            return res.send(datoEntrada);
        })
        .catch(err => {
            return res.status(500).send({
                message:
                    err.message || "Error al buscar el dato de entrada."
            });
        });
}