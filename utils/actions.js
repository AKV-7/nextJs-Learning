'use server';

import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import z from "zod";

export const createTask = async (prevState , formData) => {
  

  await new Promise((resolve) => setTimeout(resolve,2000));
  const content = formData.get("content");

  const Task  = z.object({
      content: z.string().min(5)
  }) ;

    try {

      Task.parse({
        content
      }) ;

          await prisma.task.create({
            data: {
              content,
            },
          });
          revalidatePath("/todo-list");
          return {message: 'Success!' ,status :200}
    } catch (error) {
                return { message: error.errors[0]?.message || "Error!" ,status: 400};

    }


};


export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export const deleteTask =  async (formData) => {
  const id = formData.get('id'); 
  await prisma.task.delete({
    where: {id}
  })

    revalidatePath("/todo-list");

}

export const getTask = async (id) => {
  return await prisma.task.findUnique({
    where: {id},
  });
 };



export const EditTask = async (formData) => {
  
};
