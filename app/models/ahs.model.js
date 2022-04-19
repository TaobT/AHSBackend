module.exports = (mongoose) => {
    const AHS = mongoose.model(
        "AHS",
        mongoose.Schema(
            {
                ID_AHS: Number,
                ID_Entrada: Number,
                ID_Lugar: Number,
                Nombre_Lugar: String,
                Fecha: {
                    type: Date,
                    default: Date.now(),
                },
                CantidadPersonas: Number,
                UrlImagen: String
            }
        )
    );
    return AHS;
};