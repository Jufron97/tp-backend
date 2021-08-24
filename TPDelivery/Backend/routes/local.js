const { Router } = require('express');
const router = Router();
const localController = require('../controlers/localController');

router.get('/', localController.listLocal);
router.get('/:id/get-name', localController.nameLocal);
router.post('/', localController.addLocal);
router.get('/:id', localController.selectLocal);
router.delete('/:id', localController.deleteLocal);

router.get('/:id/list-product', localController.listProducto);
router.post('/:id/add-product', localController.addProducto);
router.get('/:idLoc/get-product/:idPro', localController.obtenerProducto);
router.put('/:idLoc/edit-product/:idPro', localController.editProducto);
router.delete('/:idLoc/delete-product/:idPro', localController.deleteProducto);



router.put('/:id', localController.updateLocal);


module.exports = router;
