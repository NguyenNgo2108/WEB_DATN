const mongoose =  require('mongoose');
mongoose.connect('mongodb+srv://jrnemoooo:iiytyT2xoJdBBF3A@cluster0.sstoq.mongodb.net/outstandfood?retryWrites=true&w=majority')
.catch((err) => {
console.log('lỗi');
console.log(err);   
})
module.exports = {mongoose};