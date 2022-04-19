module.exports = (mongoose) => {
    const Lugar = mongoose.model(
        "Lugar",
        mongoose.Schema(
            {
                ID_Lugar: Number,
                Nombre_Lugar: String
            }
        )
    );
    return Lugar;
}