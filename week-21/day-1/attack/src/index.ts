import axios from "axios";

async function sendAttack(otp: string) {
  let data = JSON.stringify({
    email: "shivanandasoi@gmail.com",
    otp: "123123",
    newPassword: "123123",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/reset-password",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
}

sendAttack("123890");
