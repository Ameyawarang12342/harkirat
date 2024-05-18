import { client } from "..";
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
  // Assuming client.query is your method to interact with the database
  const result = await client.query(
    `
        INSERT INTO todos (user_id, title, description, done)
        VALUES ($1, $2, $3, false)
        RETURNING id, title, description, done;
    `,
    [userId, title, description]
  );

  return result.rows[0];
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
  const result = await client.query(
    `
        UPDATE todos
        SET done = true
        WHERE id = $1
        RETURNING id, title, description, done;
    `,
    [todoId]
  );

  if (result.rows.length === 0) {
    return null;
  }

  return result.rows[0];
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
export async function getTodos(userId: number): Promise<ITodo[]> {
  const result = await client.query(
    `
        SELECT id, title, description, done
        FROM todos
        WHERE user_id = $1;
    `,
    [userId]
  );

  return result.rows;
}
