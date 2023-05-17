const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/user');

const userSchema = mongoose.Schema({
    name:{
        type : String,
        trim : true
    },
    email: String,
    address: String,
    age : Number,
    isChecked :{
        type: Boolean,
        default: false
    }
    
},{collection :'user'})

const userModal = mongoose.model('product', userSchema)

module.exports = userModal