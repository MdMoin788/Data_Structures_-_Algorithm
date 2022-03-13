
  const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb://localhost:27017/c4") // this for local host 
};


//  return "mongodb+srv://moinjack788:moin_788@cluster0.lv7ud.mongodb.net/web20?retryWrites=true&w=majority" this for atlas
