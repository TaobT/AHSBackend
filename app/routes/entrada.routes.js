module.exports = app => {
    const DatoEntrada = require("../controllers/entrada.controller.js");
    var router = require("express").Router();
    //Crear un nuevo Dato de Entrada
    router.post("/", DatoEntrada.create);
    //Traer el dato de entrada mas reciente
    router.get("/", DatoEntrada.findLast);
    app.use("/api/entrada", router);
};