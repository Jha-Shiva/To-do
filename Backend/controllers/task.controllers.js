import Task from "../models/task.model.js";

export const createTask = async (req,res,next) =>{
    const {title, task} = req.body;
    console.log(req.user);
    // vlidate
    if(!title) res.status(400).json({message: 'please provide title'});

    const newTask = new Task({
        title,
        task,
        userId: req.user.id
    });

    const savedTask = await newTask.save();

    res.status(201).json({
        message: 'new created',
        savedTask
    })
};

export const updateTask = async (req,res,next)=>{

};

