const { Router } = require('express');
const router = Router();
const Prod = require('../models/product');

router.get('/', async (req, res) => {
    const prods = await Prod.find().lean();
    //console.log(prods);
    res.json({prods});
});

router.post('/add', async (req, res) => {
    //console.log(req.body)
    const prod = new Prod(req.body);
    await prod.save()
    .then(res.status(200).json("Ok"))
});

router.get('/edit/:id', async (req, res, next) => {
    const prod = await Prod.findById(req.params.id);
});
  
router.post('/edit/:id', async (req, res, next) => {
    const { id } = req.params;
    await Prod.update({_id: id}, req.body);                    
});
  
router.get('/delete/:id', async (req, res, next) => {
    let { id } = req.params;
    await Prod.remove({_id: id})
    .then(res.status(200).json("Eliminado")) 
});

module.exports = router;