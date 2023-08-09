const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Comment = new Schema({
   comment: {
      type: String
   },
   userId: {
      type: String
   },
   flightId: {
      type: String
   },
   tags: {
      type: [String]
   }
}, {
   collection: 'comments'
}, {
   timestamps: true
})

Comment.method("toJSON", function() {
   const { __v, _id, ...object } = this.toObject();
   object.id = _id;
   return object;
});

module.exports = mongoose.model('Comments', Comment)
