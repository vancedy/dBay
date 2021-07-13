const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://elon:${process.env.MONGO_ELON}@testcluster.qahcc.mongodb.net/items?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connnection error: '))
db.once('open', function() {
    console.log('Successfully connected!')
});




