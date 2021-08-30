const { Router } = require('express');
const router = Router();
const localController = require('../controlers/localController');
const { verifyToken } = require('./usuario');

router.get('/', localController.listLocal);
router.get('/:id/get-name', localController.nameLocal);
router.post('/', localController.addLocal);
router.get('/:id', localController.selectLocal);
router.delete('/:id', localController.deleteLocal);
router.get('/:name/find-locales-name', localController.findLocalesByName);

router.get('/:id/list-product', localController.listProducto);
router.post('/:id/add-product', localController.addProducto);
router.get('/:idLoc/get-product/:idPro', localController.obtenerProducto);
router.put('/:idLoc/edit-product/:nomProd', localController.editProducto);
router.delete('/:idLoc/delete-product/:nomProd', localController.deleteProducto);
router.get('/:id/find-productos-name/:name', localController.findProductosByName);


router.put('/:id', localController.updateLocal);


module.exports = router;
