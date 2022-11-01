const mongoose = require('mongoose');

mongoose.connect("mongoDB://127.0.0.1:27017/",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});