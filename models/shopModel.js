var pool = require("./bd");

async function getShop() {
    var query = "select * from shop";
    var rows = await pool.query(query);
    return rows;
}

async function deleteShopById(id) {
    var query = "delete from shop where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function insertShoping(obj) {

    try {
        var query = "insert into shop set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;

    } catch (error) {
        console.log(error);
        throw error;

    }
}

async function getShopingById(id) {
    var query = "select * from shop where id=? ";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarShopingById(obj, id) {
    try {
        var query = "update sho set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { getShop, deleteShopById, insertShoping, getShopingById, modificarShopingById }


