// import { NextRequest, NextResponse } from "next/server";
// import client from "@/db";

// export async function POST(req: NextRequest) {
//   // extract the body
//   const body = await req.json();

//   // extract the query params
//   console.log(req.nextUrl.searchParams.get("name"));

//   // extract the headers
//   console.log(req.headers.get("authorization"));

//   // store in DB
//   await client.user.create({
//     data: {
//       username: body.username,
//       password: body.password,
//     },
//   });

//   return Response.json({
//     message: "You are logged IN",
//   });
// }

// // export async function GET() {
// //   return NextResponse.json({
// //     email: "shivanandasai.38@gmail.com",
// //     name: "Shivananda Sai",
// //   });
// // }

// You can delete this as we are using server actions instead of this route
