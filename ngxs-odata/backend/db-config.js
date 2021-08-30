const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb+srv://ecollins:CollegeBeer2021!@cluster1.kcven.mongodb.net/NFL_Data?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

