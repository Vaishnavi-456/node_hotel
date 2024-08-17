const express = require('express')
const router = express.Router()
const MenuItem = require('./../models/MenuItem')

router.post('/', async (req,res) =>{

    try{

        const data = req.body
        const newMenu = new MenuItem(data)

        const savedMenu = await newMenu.save()
        console.log('data saved')
        res.status(200).json(savedMenu)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'Internal server error'})

    }

})

router.get('/',async (req,res) =>{

    try{

        const data = await MenuItem.find()
        console.log('data is fetched')
        res.status(200).json(data)

    }catch(err){
        console.error(err)
        res.status(500).json({message:'Internal server error'})

    }
})

router.get('/:taste',async (req,res) =>{

    try{

        const taste = req.params.taste
        if(taste == 'sweet' || taste == 'sour' || taste == 'spicy'){

            const response = await MenuItem.find({taste:taste})
            console.log('data fetched')
            res.status(200).json(response)

        }else{

            res.status(404).json({error:'Invalid taste'})

        }

    }catch(err){
        console.error(err)
        res.status(500).json({message:'Internal server error'})

    }
})

router.put('/:id', async (req,res) =>{

    try{

        const menuId = req.params.id
        const updatedMenuData = req.body

        const response = await MenuItem.findByIdAndUpdate(menuId,updatedMenuData,{
            new:true,
            runValidators:true
        })

        if(!response){
            res.status(404).json({message:'MenuItem Not Found'})
        }
        console.log('data updated')
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'Internal server error'})

    }

})

router.delete('/:id', async (req,res) =>{

    try{

        const menuId = req.params.id

        const response = await MenuItem.findByIdAndDelete(menuId)

        if(!response){
            res.status(404).json({message:'MenuItem not found'})
        }

        console.log('data deleted')
        res.status(200).json({message:'data deleted successfully'})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'Internal server error'})

    }

})

module.exports = router
