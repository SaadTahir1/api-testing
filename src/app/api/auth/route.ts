import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json(); // ✅ Read request body properly
    console.log("Received body:", body);

    const { username, password } = body;

    if (username === "admin" && password === "password") {
      console.log("Login successful");
      return NextResponse.json({ token: "fake-jwt-token" }, { status: 200 });
    } else {
      console.log("Invalid credentials");
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }
}
