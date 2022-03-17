const Usuario = require('../models/usuario');
const jwt = require('jsonwebtoken');

exports.addUsuario = async (req, res) => {

    try {

        let usuario = new Usuario(req.body);
        await usuario.save();

        const token = jwt.sign({ _id: usuario._id }, 'secretKey');

        return res.status(200).json({ token });

    } catch (error) {

        console.log(error);
        return res.status(500).send('Hubo un error al agregar el usuario');
    }

};

exports.signIn = async (req, res) => {
    await Usuario.findOne({
        usuario: req.body.usuario,
        contrasena: req.body.contrasena})
        .then((user)=>{
            const token = jwt.sign({ _id: user._id }, 'secretKey');
            return res.status(200).json({ token });
        })
        .catch(error =>{
            res.status(401).send("El usuario y/o contraseña ingresados no son correctos")
        });
}


exports.listUsuario = async (req, res) => {
await Usuario.find({_id:0})
    .then(usuarios =>{
        res.send(usuarios)
    })
    .catch(err =>{
        console.log(error);
        res.status(500).send('Hubo un error al buscar el listado de usuarios');
    })
};


exports.getUsuario = async (req, res) => {

    try {
        const payload = jwt.verify(req.params.id, 'secretKey');
        let usuario = await Usuario.findById(payload._id);
        if (!usuario) {
            res.status(404).json({ msg: 'No existe el usuario' });
        }

        res.json(usuario);

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error al buscar un usuario');
    }

};

exports.deleteUsuario = async (req, res) => {

    try {

        let usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            res.status(404).json({ msg: 'No existe el usuario' });
        }
        let { id } = req.params;
        await Local.findOneAndRemove({ _id: id })
            .then(res.status(200).json("Eliminado"))

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error al eliminar el usuario');
    }

}


exports.updateUsuario = async (req, res) => {
    try {
        const { usuario, contrasena, nombreApellido, direccion, telefono, email } = req.body;
        let usu = await Usuario.findById(req.body._id);
        if (!usu) {
            res.status(404).json({ msg: 'No existe el usuario' });
        }

        usu.usuario = usuario;
        usu.contrasena = contrasena;
        usu.nombreApellido = nombreApellido;
        usu.direccion = direccion;
        usu.telefono = telefono;
        usu.email = email;

        await Usuario.findOneAndUpdate({ _id: usu._id }, usu, { new: true })
            .then(res.status(200).json("Usuario Editado"))
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al editar el usuario');
    }

};


