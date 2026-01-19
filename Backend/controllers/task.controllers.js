import mongoose from "mongoose";
import Task from "../models/task.model.js";

export const createTask = async (req,res,next) =>{
    const {/*title,*/ task, isCompleted} = req.body;

    //validate user
    if(!req.user) res.status(400).json({message: 'please login-in'})
    // vlidate
    // if(!title) res.status(400).json({message: 'please provide title'});

    const newTask = new Task({
        // title,
        task,
        isCompleted,
        userId: req.user.id
    });

    const savedTask = await newTask.save();

    res.status(201).json({
        message: 'new created',
        savedTask
    })
};

export const updateTask = async (req,res,next)=>{
    const { /*title,*/ task, isCompleted } = req.body;

    try {
        const updatedTask = await Task.findOneAndUpdate({_id: req.params.taskId, userId: req.user.id},
           {
            $set : {
                // title,
                task,
                isCompleted
            },
        },
        {new: true}
        );
        if(!updatedTask){
            return res.status(403).json({ message: 'you are not authorized'})
        }
        console.log(req.body.isCompleted);
        res.status(200).json({ updatedTask })
        
    } catch (error) {
        res.status(400).json({ message: 'something went wrong' })
    }
};

export const toggleTask = async (req, res, next)=>{
    const { taskId } = req.params;

    if(!mongoose.Types.ObjectId.isValid(taskId)){
        return res.status(400).json({message : 'Invalid task Id'})
    };

    try {
        const task = await Task.findOne({
            _id: taskId,
            userId: req.user.id
        });

        if(!task){
            return res.status(403).json({message: 'Not authorized'})
        };

        task.isCompleted = !task.isCompleted;
        await task.save();

        res.status(200).json({
            message: 'task toggled',
            task
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server error'})
    }
};

export const getTask = async (req, res, next)=>{
    // get task
    const allTask = await Task.find({
        // ...(req.query.userId && {userId: req.query.userId})
        userId: req.user.id
    });
    // count total Task
    const totalTask = await Task.countDocuments({userId: req.user.id});
    // send response
    res.status(200).json({
        totalTask,
        allTask
    })
};

export const deleteTask = async (req, res, next) =>{
    const { taskId } = req.params
    console.log(req.params);
    if(!req.user?.id){
        return res.status(401).json({ message: 'Not authorized' });
    };

    try {
        const task = await Task.findOne({
            _id: taskId,
            userId: req.user.id
        });

        if(!task){
            return res.status(404).json({ message: 'task not found'})
        };

        await task.deleteOne();
        
        res.status(200).json({ 
            message: 'task deleted successfully',
            taskId
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'server error' });
    }
};