const mongoose = require("mongoose");

async function main() {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://mateus:JPw0pSnXZXe6xbfg@cluster0.yjmww02.mongodb.net/?retryWrites=true&w=majority"
        );

        console.log("Conectado ao db");
    } catch (error) {
        console.log(error);
    }
}

module.exports = main;