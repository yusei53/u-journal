"use client";
import Image from "next/image";
import LoginForm from "../components/auth/LoginForm";
import LogoutButton from "../components/auth/LogoutButton";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  {
    return session ? (
      <>
        <div>
          <Image
            src={session.user?.image ?? ""}
            alt={session.user?.name ?? ""}
            width={40}
            height={40}
          />
        </div>
        <LogoutButton />
      </>
    ) : (
      <>
        <LoginForm />
      </>
    );
  }
};

export default Home;
