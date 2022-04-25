'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getEvents = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSQLQueries('events');
        const list = await pool.request().query(sqlQueries.eventslist);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getById = async (id_product) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSQLQueries('events');
        const oneEvent = await pool.request()
            .input('id_product', sql.NVarChar(), id_product)
            .query(sqlQueries.eventbyId);
        return oneEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

const insertProduct = async (productData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSQLQueries('events');
        const insert_Product = await pool.request()
            .input('id_product', sql.NVarChar(), productData.id_product)
            .input('name', sql.NVarChar(100), productData.name)
            .input('description', sql.NVarChar(1500), productData.description)
            .input('id_category', sql.BigInt(), productData.category_id)
            .input('id_CN', sql.NChar(), productData.chinhanh)
            .query(sqlQueries.addProduct);
        return insert_Product.recordset;
    } catch (error) {

        return error.message;
    }
}
const deleteProduct = async (id_product) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSQLQueries('events');
        const delete_Product = await pool.request()
            .input('id_product', sql.NVarChar(), id_product)
            .query(sqlQueries.deleteProduct);
        return delete_Product.recordset;
    } catch (error) {
        return error.message;
    }
}


const updateProduct = async (productData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSQLQueries('events');
        const update = await pool.request()
            .input('id_product', sql.NVarChar(), productData.id_product)
            .input('name', sql.NVarChar(100), productData.name)
            .input('description', sql.NVarChar(1500), productData.description)
            .input('id_category', sql.BigInt(), productData.category_id)
            .input('id_CN', sql.NChar(), productData.chinhanh)
            .query(sqlQueries.updateProduct);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}
module.exports = {
    getEvents,
    getById,
    insertProduct,
    deleteProduct,
    updateProduct,
}