//all server actions in this file

"use server";

import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"; //next/navigation NOT next/dist/server/api-utlls
import { resolve } from "styled-jsx/css";
import { z } from "zod";

//Get all Tasks in TaskList.jsx
export const getAllTasks = async () => {
  return prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

//create Task in TaskForm.jsx
export const createTask = async (formData) => {
  const content = formData.get("content");
  // some validation here

  await prisma.task.create({
    data: {
      content,
    },
  });
  // revalidate path
  revalidatePath("/tasks");
};

//Delete Task in DeleteForm.jsx which is invoked in TaskList.jsx
export const deleteTask = async (formData) => {
  const id = formData.get("id");
  await prisma.task.delete({ where: { id } });
  revalidatePath("/tasks");
};

//for getting the task to edit in EditForm.jsx
export const getTask = async (id) => {
  return prisma.task.findUnique({
    where: {
      id,
    },
  });
};

export const editTask = async (formData) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");

  await prisma.task.update({
    where: {
      id,
    },

    data: {
      content: content,
      completed: completed === "on" ? true : false, //if completed is on, then true then change the value in db
    },
  });

  redirect("/tasks");
  /* redirect used not revalitaedPath,
  after completing the update, redirects the user back to /tasks,
  'use client' needed in componenet EditForm for it to work.
  */
};

// fix params
export const createTaskCustom = async (prevState, formData) => {
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  const content = formData.get("content");
  const Task = z.object({
    content: z.string().min(3), //if less than 3 characters, there will be an error
  });
  // some validation here
  try {
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });
    // revalidate path
    revalidatePath("/tasks");
    return { message: "success" };
  } catch (error) {
    // can't return error
    return { message: "error" };
  }
};
