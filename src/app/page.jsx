import { cookies } from "next/headers";
import Image from "next/image";
import styles from "./page.module.scss";
import Popup from "./components/popup";
import LandingPage from "./components/LandingPage";



export default async function Home() {
  // call api check user login
  const res = await fetch("http://localhost:3000/api/user");
  const data = await res.json();
  const id = !!data.user.id;
  const isSuccess = !!data.user.isSuccess;
  console.log("id", id, "isSuccess", isSuccess);

  return (
    <>
      {id && isSuccess ? (
        <LandingPage />
      ) : isSuccess === false ? (
        <p>Không đủ điều kiện nhận gói Plus</p>
      ) : id === false(
        <p>Đăng nhập để nhận gói Plus miễn phí</p>
      )}
    </>
  );
}
