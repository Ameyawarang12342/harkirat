import { Client } from "pg";

const client = new Client({
  host: "ep-throbbing-night-a51v6jzx.us-east-2.aws.neon.tech",
  port: 5432,
  database: "third-april",
  user: "shivanandasai",
  password: "kcuzaUW9EFx8",
});

async function createUsersTable() {
  await client.connect();
  const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
  console.log(result);
}

createUsersTable();

async function insertData() {
  try {
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
    const res = await client.query(insertQuery);
    console.log("Insertion success:", res); // Output insertion result
  } catch (err) {
    console.error("Error during the insertion:", err);
  } finally {
    await client.end(); // Close the client connection
  }
}

insertData();
