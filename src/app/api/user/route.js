import { NextResponse } from "next/server";

// const mockUser = {
//   id: "",
//   isSuccess: true,
//   message: "Đăng nhập để nhận gói Plus miễn phí",
// };

const mockUser = {
  id: "1",
  isSuccess: true,
  message: "Nhận gói Plus miễn phí",
};

// const mockUser = {
//   id: "1",
//   isSuccess: false,
//   message: "Không đủ điều kiện nhận gói Plus",
// };

export async function GET() {
  // Simulating user authentication (replace with real auth check)
  const isAuthenticated = true; // Change this based on session/cookie logic

  if (!isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({ user: mockUser });
}
