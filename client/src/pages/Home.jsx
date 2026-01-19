import React, { useEffect, useState } from 'react'
import BackgroundWrapper from '../component/BackgroundWrapper'

const Home = () => {
  const [ task, setTask ] = useState({
    task : "",
    isCompleted: false
  });
  const [ allTasks, setAllTasks ] = useState([]);

  const handleChange = (e)=>{
    setTask(prev => ({...prev, [e.target.name]: e.target.value}))
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();

    if (!task.task.trim()) return;

    const res = await fetch('/api/v1/task/create', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: "include",
      body: JSON.stringify(task)
    })

    const data = await res.json();

    setAllTasks( prev=> [data.savedTask, ...prev]);
    setTask({task: "", isCompleted: false})
    // console.log(data);
  };

  useEffect(()=>{
    const fetchTasks = async () =>{
      try {
      const res = await fetch('/api/v1/task/getTasks',{
        credentials: "include"
      });

      if(!res.ok){
        throw new Error(`HTTP error! status: ${res.status}`);
      };

      const data = await res.json() || 'Their is no tasks yet !';
      setAllTasks(data.allTask);
    } catch (error) {
      console.log(error);
    }};
    fetchTasks()
  },[])
  // console.log(allTasks);
  // console.log(allTasks.allTask);

  // toggle task
  const toggleTask = async (id) => {
    const prevTasks = allTasks; // store snapshot
    setAllTasks((prev) =>
      prev.map((task) =>
        task._id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );

    try {
      await fetch(`/api/v1/task/update/${id}/toggle`, {
        method: "PATCH",
        credentials: "include"
      });
    } catch (err) {
      setAllTasks(prevTasks); // rollback
      console.error(err);
    }
};

  return (
    <BackgroundWrapper image={"/leaves.png"}>
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-40">
        {/* Past Task */}
        <div className="min-h-screen border-2 p-4 order-2 rounded-xl bg-white/10 dark:bg-black/10 md:order-1 sm:w-125">
          <div className="">
            <h2 className='text-lg text-blue-500 font-semibold mb-3'>Completed Task</h2>
            <div className="w-full h-screen border-2 p-2 rounded-xl">
              {/* Past Task will be added here*/}
              {allTasks.length === 0 ? (
                <p className="text-gray-400 text-sm">No Task Yet</p>
              ) : (
                allTasks.filter(task=> task.isCompleted).map((task) => (
                  <div
                    key={task._id}
                    className="border-2 my-2 p-2 rounded-xl flex gap-3 items-center hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="rounded-full"
                      checked={task.isCompleted}
                      onChange={()=> toggleTask(task._id)}
                    />
                    <p
                      className={`${task.isCompleted ? "line-through text-gray-400" : "text-gray-800 dark:text-gray-200"}`}
                    >
                      {task.task}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        {/* Current and Add new Task */}
        <div className="order-1 md:order-2">
          {/* add new task */}
          <div className="sm:w-115 p-3">
            <form action="" onSubmit={handleSubmit}>
              <div className="border-2 rounded-xl flex gap-4 hover:bg-gray-100 dark:hover:bg-gray-700 ">
                <button
                  type="submit"
                  className="ml-1 px-2 text-2xl font-semibold  self-center text-blue-400"
                >
                  +
                </button>
                <input
                  type="text"
                  placeholder="Add Task"
                  className="grow rounded-xl p-3 outline-none placeholder-blue-400/50"
                  name="task"
                  onChange={handleChange}
                  value={task.task}
                />
              </div>
            </form>
          </div>
          {/* current task */}
          <div className="mt-4 border-2 p-2 rounded-xl">
            <h2 className="text-lg font-semibold text-blue-500 mb-3">
              Current Task
            </h2>

            <div className="space-y-2">
              {allTasks
                .filter((task) => !task.isCompleted)
                .map((task) => (
                  <div
                    className="border-2 my-2 p-2 rounded-xl flex gap-3 items-center hover:bg-gray-100 dark:hover:bg-gray-700"
                    key={task._id}
                  >
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={task.isCompleted}
                      className="cursor-pointer"
                      onChange={()=>toggleTask(task._id)}
                    />
                    <p>{task.task}</p>
                  </div>
                ))}
              {/* Empty state */}
              {allTasks.filter((task) => !task.isCompleted).length === 0 && (
                <p className="text-sm text-gray-400">No current tasks 🎉</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
}

export default Home