import axios from "axios";
import client from "@/db";

// we should not call this localhost here,
// to make it better, we call the backend logic here,
// because this is a server component and we can have backend logic here as well the frontend logic in the return block
// async function fetchData() {
//   try {
//     const resposne = await axios.get("http://localhost:3000/api/user"); //<-- Check this
//     return resposne.data;
//   } catch (e) {
//     console.error("ERROR:::", e);
//   }
// }

async function fetchData() {
  try {
    const user = await client.user.findFirst({}); // <-- Better approach
    return {
      name: user?.username,
      email: user?.username,
    };
  } catch (e) {
    console.log(e);
  }
}

export default async function details() {
  const data = await fetchData();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {data?.name}</div>
          {data?.email}
        </div>
      </div>
    </div>
  );
}
