"use client";
//use client needed for redirect to work.
import { editTask } from "@/utils/actions";
import React from "react";

const EditForm = ({ task }) => {
  const { id, completed, content } = task;

  return (
    <form
      action={editTask}
      className="max-w-sm border border-base-300 rounded-lg"
    >
      <input type="hidden" name="id" value={id} />
      {/*content*/}
      <input
        type="text"
        required
        defaultValue={content}
        name="content"
        className="input input-bordered w-full"
      ></input>
      {/*completed*/}
      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block bnt-sm">
        edit
      </button>
    </form>
  );
};

export default EditForm;
