const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String ,
  avatar: String,
  banner:String,
  title: String,
  categories: [{ type:mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  scores: {
    difficult: Number,
    skills: Number,
    attack: Number,
    survive: Number,
  },
  skills: [{
    icon: String,
    name: String,
    description: String,
    delay:String,
    cost:String,
    tip: String
  }],
  items1: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Item'}],
  items2: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Item'}],
  usageTips: String,
  battleTips: String,
  teamTips: String,
  partners: [{hero: {type: mongoose.SchemaTypes.ObjectId, ref: 'Hero'},description:String}],
  description: String
})

module.exports = mongoose.model('Hero',schema,'heroes')