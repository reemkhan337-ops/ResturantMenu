
const express = require('express');
const Menu = require('../models/Menu');
const router = express.Router();

router.get('/', async (req,res)=>{
 const { category } = req.query;
 const data = category && category!=='All'
  ? await Menu.find({category})
  : await Menu.find();
 res.json(data);
});

module.exports = router;
