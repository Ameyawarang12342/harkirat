import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
interface ITodo {
  title: string;
  description: string;
  done: boolean;
  id: number;
}

export async function createTodo(
  userId: number,
  title: string,
  description: string
): Promise<ITodo> {
  const createdTodo = await prisma.todo.create({
    data: {
      title,
      description,
      done: false,
      user: {
        connect: { id: userId },
      },
    },
  });
  return {
    title: createdTodo.title,
    description: createdTodo.description,
    done: createdTodo.done,
    id: createdTodo.id,
  };
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number): Promise<ITodo | null> {
  const updatedTodo = await prisma.todo.update({
    where: {
      id: todoId,
    },
    data: {
      done: true,
    },
  });

  if (!updatedTodo) {
    return null;
  }

  return {
    title: updatedTodo.title,
    description: updatedTodo.description,
    done: updatedTodo.done,
    id: updatedTodo.id,
  };
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number): Promise<ITodo | null> {
  const todos = await prisma.todo.findMany({
    where: {
      userId: userId,
    },
  });

  return todos.map((todo: ITodo) => ({
    title: todo.title,
    description: todo.description,
    done: todo.done,
    id: todo.id,
  }));
}
