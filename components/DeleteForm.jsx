import { deleteTask } from "@/utils/actions";

//id of the task
//form to delete a task fr
const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-error btn-xs">delete</button>
    </form>
  );
};
export default DeleteForm;
