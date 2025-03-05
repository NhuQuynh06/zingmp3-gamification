import Modal from "./components/modal.module.scss";
import LandingPage from "./components/LandingPage";



export default async function Home() {
  // call api check user login
  const res = await fetch("http://localhost:3000/api/user");
  const data = await res.json();
  const id = !!data.user?.id;
  const isSuccess = !!data.user?.isSuccess;
  const message = data.user?.message

  return (
    <LandingPage id={id} message={message} isSuccess={isSuccess} />
  );
}
