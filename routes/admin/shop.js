var express = require('express');
var router = express.Router();
var shopModel = require("./../../models/shopModel");

router.get('/', async function (req, res, next) {

    var shop = await shopModel.getShop();

    res.render("admin/shop", {
        layout: "admin/layout",
        persona: req.session.nombre,
        shop
    });
});

/* para eliminar una shop*/
router.get("/eliminar/:id", async (req, res, next) => {
    const id = req.params.id;
    await shopModel.deleteShopById(id);
    res.redirect("/admin/shop")

});

router.get("/agregar", (req, res, next) => {
    res.render("admin/agregar", {
        layout: "admin/layout"
    })
});

router.post('/agregar', async (req, res, next) => {
    try {

        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await shopModel.insertShoping(req.body);
            res.redirect('/admin/shop')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: "Todos los campos son requeridos"
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true, message: 'No se cargo la novedad'
        })
    }
})

router.get("/modificar/:id", async (req, res, next) => {
    var id = req.params.id;

    var shoping = await shopModel.getShopingById(id);

    res.render("admin/modificar", {
        layout: "admin/layout",
        shoping
    });
});


router.get("/modificar", async (req, res, next) => {
    try {
        
        var obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo
        }

        console.log(obj)
        await shopModel.modificarShopingById(obj, req.body.id);
        res.redirect("/admin/shop");
    } catch (error) {
        console.log(error)
        res.render("admin/modificar", {
            layout: "admin/layout",
            error: true, 
            message: "no se modifico la compra"
        })
    }
});


module.exports = router;
