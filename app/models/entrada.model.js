module.exports = (mongoose) => {
    const DatoEntrada = mongoose.model(
        "DatoEntrada",
        mongoose.Schema(
            {
                ID_Entrada: Number,
                ID_Lugar: Number,
                Fecha: {
                    type: Date,
                    default: Date.now(),
                },
                UrlImagen: String,
                Procesada: {
                    type: Boolean,
                    default: false
                }
            }
        )
    );
    return DatoEntrada;
};