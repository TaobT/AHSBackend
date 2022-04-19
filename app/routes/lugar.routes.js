module.exports = app => {
    const Lugar = require("../controllers/lugar.controller.js");
    var router = require("express").Router();
    //Crear un nuevo Lugar
    router.post("/", Lugar.create);
    //Traer todos los lugares
    router.get("/", Lugar.findAll);
    //Traer un lugar de acuerdo a su nombre de lugar
    router.get("/:Nombre_Lugar", Lugar.findByNombreLugar);
    //Traer el ultimo lugar registrado
    router.get("/ultimo", Lugar.ultimo);
    app.use("/api/lugar", router);
};