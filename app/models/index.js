const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.AHS = require("./ahs.model.js")(mongoose);
db.Lugar = require("./lugar.model.js")(mongoose);
db.DatoEntrada = require("./entrada.model.js")(mongoose);
module.exports = db;