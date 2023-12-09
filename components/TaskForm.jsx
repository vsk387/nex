import { revalidatePath } from "next/cache";
import React from "react";
import { createTask } from "@/utils/actions";
//from actions.js in util (we relocated it there)

//formData is web api/interface that we can use right out the bat. content 'name' of the <input />
//server side
//TaskForm used to create a task
//form action- where the url will get sent, so the form input will get sent to createtask fn. in actions.js
const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here!"
          name="content"
          required
        />
        <button type="submit" className="btn btn-primary join-item">
          Create Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
