var express = require('express');
require('../db/mongo');
const Item = require('../models/item')
const router = express.Router();

 

router.route('/') 
    

    .get( async(req, res) => {
        try{
            const result = await Item.find(req.body);
            res.status(200).send(result);
        } catch(e){
            res.status(400).send(e)
        }
    })
    
        
    .post(async (req, res) => {
        const newItem = new Item(req.body);
        try{    
            await newItem.save()
            res.sendStatus(200)
        } catch(e){
            res.status(400).send(e)
        }
    })


    .patch(async (req, res) => {
        Item.updateOne(req.query, req.body).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(400).send(err);
        })
    })


    .delete(async (req, res) => {
        Item.deleteOne(req.query).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(400).send(err);
        })
    })

    
    module.exports = router;
    
    