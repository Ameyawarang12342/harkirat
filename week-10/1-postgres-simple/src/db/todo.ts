interface TODO {
  id: number;
  title: string;
  description: string;
  done: boolean;
  // Additional properties if present in your database schema
}

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
export async function createTodo(userId: number, title: string, description: string) {
        const text = 'INSERT INTO todos (user_id, title, description) VALUES ($1, $2, $3) RETURNING *'
        const values = [userId, title, description]
        const res = await client.query(text, values)
        if(res.rows[0]) {
            return res.rows[0]
        }
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
export async function updateTodo(todoId: number) {
        const text = `UPDATE todos SET done = true WHERE id = $1 RETURNING *`
        const values = [todoId]
        const res = await client.query(text, values)
        if(res.rows[0]) {
            return res.rows[0]
        }
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
export async function getTodos(userId: number) {
        const text = "SELECT * FROM todos WHERE user_id = $1"
        const values = [userId]

        const res = await client.query(text, values)
        return res.rows
}