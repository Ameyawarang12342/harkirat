import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
interface IUser {
  username: string;
  password: string;
  name: string;
}
export async function createUser(
  username: string,
  password: string,
  name: string
): Promise<IUser> {
  const result = await client.query(
    `
    INSERT INTO users (username, password, name)
    VALUES ($1, $2, $3)
    RETURNING username, password, name;
  `,
    [username, password, name]
  );

  return result.rows[0];
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number): Promise<IUser | null> {
  const result = await client.query(
    `
    SELECT username, password, name
    FROM users
    WHERE id = $1;
  `,
    [userId]
  );

  if (result.rows.length === 0) {
    return null; // User not found
  }

  return result.rows[0];
}
