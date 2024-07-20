import React from 'react'
import prisma from "@/utils/db";

const getAllTasks = async () => {

  // await prisma.task.create({
  //   data: {
  //     content : "buy milk"
  //   }
  // })

  // await prisma.task.update({
  //   where: { id: "20a32737-56cb-4f34-a4a4-dddcda0ba27d" },
  //   data: {
  //     content: "buy milk completed!",
  //   },
  // });

  // await prisma.task.delete({
  //   where: { id: "20a32737-56cb-4f34-a4a4-dddcda0ba27d" },
  // });

  const allTasks = await prisma.task.findMany(); 
  return allTasks; 
}



const Prisma = async () => {

  const tasks = await getAllTasks() ; 
  return <div>
    <h1 className =" text-7xl"> Tasks </h1>
    {tasks?.map((task) => (
      <h1 key= {task.id} className=" text-xl py-2"> {task.content}</h1>
    ))}
    </div>;
}

export default Prisma
