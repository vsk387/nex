import prisma from "@/utils/db";

const PrismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: "wake up",
    },
  });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTasks;
};

/*
in PrismaHandlers we have created a task  in model task using await prisma.task.create and then fetched it 
using allTasks= await prisma.task.FindMany({ordered by descending order of creation date})
*/
//PrismaHandlers fetches all the tasks, in this case ordered By descending order.

const PrismaExaple = async () => {
  const tasks = await PrismaHandlers();
  return (
    <div>
      <h1 className="text-7xl">PrismaExample</h1>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className="text-xl py-2">
            {task.content}
          </h2>
        );
      })}
    </div>
  );
};

/*in PrismExample we have fetched the tasks returned from PrismaHandler and stored i in tasks 
and outputed it using map. key is task.id and task.content is returned in <h2>
*/

export default PrismaExaple;
