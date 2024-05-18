import axios from "axios";

async function fetchData() {
  const response = await axios.get(
    "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
  );
  return response.data;
}

export default async function User() {
  const data = await fetchData();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded-xl shadow-xl">
          <div>Name: {data?.name}</div>
          Email: {data?.email}
        </div>
      </div>
    </div>
  );
}
