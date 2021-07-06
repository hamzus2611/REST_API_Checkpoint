const mongoose = require('mongoose');

const ConnectDB = async () => {
    try {
        await  mongoose.connect(process.env.db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('dataBase connected...');


    } catch (error) {
        console.error(error);
    }
}
module.exports = ConnectDB