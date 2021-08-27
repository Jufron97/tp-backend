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

    try {
        const { usuario, contraseña } = req.body;
        const user = await Usuario.findOne({ usuario });

        if (!user) return res.status(401).send("El usuario no existe");
        if (user.contraseña !== contraseña) return res.status(401).send("Contraseña errónea");

        const token = jwt.sign({ _id: user._id }, 'secretKey');
        return res.status(200).json({ token });

    }


    catch (error) {
        console.log(error);
        return res.status(500).send('Hubo un error al autenticar al usuario');
    }

}


exports.listUsuario = async (req, res) => {

    try {

        let usuarios = await Usuario.find();
        return res.send(usuarios);

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error al buscar el listado de usuarios');
    }

};


exports.getUsuario = async (req, res) => {

    try {

        let usuario = await Usuario.findById(req.params.id);
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
        const { usuario, contraseña, nombreApellido, direccion, telefono, email } = req.body;
        let usuario = await Usuario.findById(req.body._id);
        if (!usuario) {
            res.status(404).json({ msg: 'No existe el usuario' });
        }

        usuario.usuario = usuario;
        usuario.contraseña = contraseña;
        usuario.nombreApellido = nombreApellido;
        usuario.direccion = direccion;
        usuario.telefono = telefono;
        usuario.email = email;

        await Usuario.findOneAndUpdate({ _id: usuario.id }, local, { new: true })
            .then(res.status(200).json("Usuario Editado"))
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al editar el usuario');
    }

};