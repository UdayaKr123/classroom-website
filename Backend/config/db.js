const mongoose = require("mongoose");
console.log(process.env.mongoURI)
const connectDB = () => {
    mongoose
        .connect(process.env.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("MongoDB Connected"))
        .catch((err) => {
            console.error(err);
            process.exit(1);
        });
};

module.exports = connectDB;