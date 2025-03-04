import { NextResponse } from "next/server";

// Simulated user data (Replace this with a real database or authentication check)
const mockUser = {
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
  role: "admin",
  isSuccess: true,
};

export async function GET() {
  // Simulating user authentication (replace with real auth check)
  const isAuthenticated = true; // Change this based on session/cookie logic

  if (!isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({ user: mockUser });
}