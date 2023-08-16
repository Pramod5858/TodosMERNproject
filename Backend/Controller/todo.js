import express, { response } from "express";

import { todolists } from "../Model/todolists.js";
import { asynError } from "../errorHandlermiddleware/error.js";
import user from "../Model/users.js";
import ErrorHandler from "../Utils/error.js";


//admin id details
export const getadminallProducts = asynError(async (req, res, next) => {
try {
    console.log("Here I'm 123456");
    
    let findAdminDetails = await todolists.find({})

    res.status(200).send({success:true, findAdminDetails})

} catch (error) {
    res.send(error.message);    
}
})

export const gettodos = (req, res) => {


    todo.find()
        .then(response => {
            res.status(200).send({ success: true, response })
        })
}

//get all product details
export const getalltodos = asynError(async (req, res, next) => {

    todolists.find({})
        .then(response => res.status(200).send({ success: true, response }))
        .catch(err => console.log(err))

})

//add new product details
export const Addtodos = asynError(async (req, res, next) => {
    console.log(req.body);
    const { name } = req.body

    if (!name) return next(new ErrorHandler("it should never be blank", 401))

    let email = req.emailID

    let findid = await user.findOne({ email })

    let addtodos = await new todolists({
        name: name,
        userId: findid._id
    })

    addtodos.save()

    console.log(addtodos);

    res.status(200).send({ success: true, message: addtodos });
})


//get perticular id's details
export const getperticulartodos = asynError(async (req, res, next) => {
    try {

        let findDetails = await todolists.findOne({ _id: req.params.id })

        res.status(200).send({ success: true, findDetails });

    } catch (error) {
        console.log(error.message);
    }
})


//update perticular id details
export const updateperticulartodos = asynError(async (req, res, next) => {
    console.log(req.body);
    console.log(req.params.id);
    //    const {_id} = req.params.id;

    //    let findupdate = await todolists.findOne(_id);

    let checkupdate = await todolists.updateOne({ _id: req.params.id }, { $set: req.body })

    console.log(checkupdate);

    res.status(200).send({ success: true, checkupdate });
})


//delete perticular id details
export const deleteperticulartodos = asynError(async (req, res, next) => {
    console.log(req.params.id);

    let findDelete = await todolists.deleteOne({ _id: req.params.id })

    res.status(200).send({ success: true, findDelete });
})

