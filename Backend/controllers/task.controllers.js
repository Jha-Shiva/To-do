import Task from "../models/task.model.js";

export const createTask = async (req,res,next) =>{
    const {title, task} = req.body;

    //validate user
    if(!req.user) res.status(400).json({message: 'please login-in'})
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
    const { title, task } = req.body;

    try {
        const updatedTask = await Task.findOneAndUpdate({_id: req.params.taskId, userId: req.params.userId},
           {
            $set : {
                title,
                task
            },
        },
        {new: true}
        );
        if(!updatedTask){
            return res.status(401).json({ message: 'you are not authorized'})
        }
        res.status(200).json({ updatedTask })
        
    } catch (error) {
        res.status(400).json({ message: 'something went wrong' })
    }
};

export const getTask = async (req, res, next)=>{
    // get task
    const allTask = await Task.find({
        // ...(req.query.userId && {userId: req.query.userId})
        userId: req.user.id
    });
    // count total Task
    const totalTask = await Task.countDocuments()
    // send response
    res.status(200).json({
        totalTask,
        allTask
    })
};