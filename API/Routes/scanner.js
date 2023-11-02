const express = require('express');

const Router = new express.Router()

Router.get('./getItemMed/:itemNumber', async (req,res)=>{
    const {itemNumber} = req.params
    try{
        await res.status(200).send({[itemNumber ]:item[itemNumber]})
    }catch(e){
        res.status(500).send(e)
    }
})


module.exports = Router