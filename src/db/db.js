const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/user" , {
    useCreateIndex : true,
    useNewUrlParser: true,
    useUnifiedTopology : true,
    useFindAndModify : false
}).then(()=>console.log("Connection pass")).catch((err) => console.log(err));