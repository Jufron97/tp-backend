const { Router } = require('express');
const router = Router();
const localController = require('../controlers/usuarioController');


router.post('/registro-usuario', usuarioController.addUsuario);
router.post('/iniciar-sesion', usuarioController.signIn);
router.get('/list-usuario', verifyToken, usuarioController.listUsuario);
router.get('/:id/get-usuario', usuarioController.getUsuario);
router.delete('/:id/delete-usuario', verifyToken, usuarioController.deleteUsuario);
router.put('/:id/update-usuario', verifyToken, usuarioController.updateUsuario);


export function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send("Request no autorizada")
    };

    const token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send("Request no autorizada")
    };

    const payload = jwt.verify(token, 'secretKey');
    req.userId = payload._id;
    next();

}