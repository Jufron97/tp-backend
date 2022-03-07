const Local = require('../models/local');
const { unlink } = require('fs-extra');
const path = require('path');
const multer = require('multer');

exports.addLocal = async (req, res) => {
    try {
        console.log(req.file);
        let imageName = '/uploads/' + req.file.filename;
        let local = new Local(req.body);
        local.imagePath = imageName;
        console.log(local);
        await local.save();
        res.send(local);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};
exports.listLocal = async (req, res) => {
    try {
        let locales = await Local.find();
        res.send(locales);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.nameLocal = async (req, res) => {
    try {
        let local = await Local.findOne({ '_id': req.params.id }, 'nombre')
        console.log(local.nombre)
        res.send(local.nombre)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.updateLocal = async (req, res) => {
    try {
        const { nombre, descripcion, costoEnvio, tiempoEnvio, tags } = req.body;
        let local = await Local.findById(req.body._id);
        if (!local) {
            res.status(404).json({ msg: 'No existe el local' });
        }
        const imagePath = '/uploads/' + req.file.filename;
        local.imagePath = imagePath
        local.nombre = nombre
        local.descripcion = descripcion
        local.costoEnvio = costoEnvio
        local.tiempoEnvio = tiempoEnvio
        local.tags = tags
        await Local.findOneAndUpdate({ _id: local.id }, local, { new: true })
            .then(res.status(200).json("Local Editado"))
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

};

exports.deleteLocal = async (req, res) => {
    try {
        let local = await Local.findById(req.params.id);
        if (!local) {
            res.status(404).json({ msg: 'No existe el local' });
        }
        let { id } = req.params;
        await Local.findOneAndRemove({ _id: id })
            .then(res.status(200).json("Eliminado"))
        unlink(path.resolve('./public' + local.imagePath));
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.selectLocal = async (req, res) => {
    try {
        let local = await Local.findById(req.params.id);
        if (!local) {
            res.status(404).json({ msg: 'No existe el local' });
        }
        res.json(local);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.addProducto = async (req, res) => {
    try {
        let local = await Local.findById(req.params.id);
        if (!local) {
            res.status(404).json({ msg: 'No existe el local' });
        }
        const { nombre, descripcion, categoria, subcategoria, precio } = req.body;
        let producto = {}
        const imagePath = '/uploads/' + req.file.filename;
        producto.imagePath = imagePath;
        producto.nombre = nombre;
        producto.descripcion = descripcion;
        producto.categoria = categoria;
        producto.subcategoria = subcategoria;
        producto.precio = precio;
        local.productos.push(producto);
        local = await Local.findByIdAndUpdate({ _id: req.params.id }, local);
        console.log(local.productos);
        res.send(local)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.deleteProducto = async (req, res) => {
    try {
        let local = await Local.findById(req.params.idLoc);
        if (!local) {
            res.status(404).json({ msg: 'No existe el local' });
        };
        var producto = local.productos.find(obj => {
            return obj.nombre == req.params.nomProd
        })
        if (!producto) {
            res.status(404).json({ msg: 'No existe el producto' });
        }
        var indice = local.productos.indexOf(producto);
        local.productos.splice(indice, 1);
        unlink(path.resolve('./public' + producto.imagePath));
        await Local.findOneAndUpdate({ _id: req.params.idLoc }, local, { new: true })
            .then(res.status(200).json("Eliminado"))
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.listProducto = async (req, res) => {
    try {
        let local = await Local.findById(req.params.id);
        if (!local) {
            res.status(404).json({ msg: 'No existe el local' });
        };
        let productos = local.productos
        res.send(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.obtenerProducto = async (req, res) => {
    try {
        let local = await Local.findById(req.params.idLoc);
        if (!local) {
            res.status(404).json({ msg: 'No existe el local' });
        };
        var producto = local.productos.find(obj => {
            return obj._id == req.params.idPro
        })
        res.json(producto);
        console.log('Ok');
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.editProducto = async (req, res) => {
    try {
        const { nombre, descripcion, categoria, subcategoria, precio } = req.body;
        let local = await Local.findById(req.params.idLoc);
        console.log(req.params.idLoc);
        if (!local) {
            res.status(404).json({ msg: 'No existe el local' });
        };
        var producto = local.productos.find(obj => {
            return obj.nombre == req.params.nomProd
        })
        if (!producto) {
            res.status(404).json({ msg: 'No existe el producto' });
        }
        const imagePath = '/uploads/' + req.file.filename;
        producto.imagePath = imagePath;
        producto.nombre = nombre;
        producto.descripcion = descripcion;
        producto.categoria = categoria;
        producto.subcategoria = subcategoria;
        producto.precio = precio;
        await Local.findOneAndUpdate({ _id: req.params.idLoc }, local, { new: true })
            .then(res.status(200).json("Editado"))
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.findLocalesByName = async (req, res) => {
    try {
        let nom = req.params.name;
        let locales = await Local.find({ nombre: { $regex: nom, $options: 'i' } });
        res.json(locales);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.findProductosByName = async (req, res) => {
    try {
        let local = await Local.findById(req.params.id);
        if (!local) {
            res.status(404).json({ msg: 'No existe el local' });
        };
        const filter = new RegExp(req.params.name, 'i');
        let productos = local.productos.filter(({ nombre }) =>
            nombre.match(filter)
        );
        console.log(productos);
        res.send(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};