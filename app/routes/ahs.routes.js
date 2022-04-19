module.exports = app => {
    const AHS = require("../controllers/ahs.controller.js");
    var router = require("express").Router();
    //Crear un nuevo AHS
    router.post("/", AHS.create);
    //Buscar AHS por nombre del lugar
    router.get("/:Nombre_Lugar", AHS.findByNombreLugar);
    //Traer todos los AHS
    router.get("/", AHS.findAll);
    app.use("/api/ahs", router);
};