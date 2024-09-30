import React from "react";
import GoogleLoginForm from "../components/auth/GoogleLoginForm";
import LogoutButton from "../components/auth/LogoutButton";
import DisplayContent from "../components/view";
import getCurrentUser from "../utils/actions/get-current-user";

const Home = async () => {
  const currentUser = await getCurrentUser();
  return currentUser ? (
    <>
      <LogoutButton />
      <DisplayContent />
    </>
  ) : (
    <>
      <GoogleLoginForm />
    </>
  );
};

export default Home;
