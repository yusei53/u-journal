"use client";
import Image from "next/image";
import GoogleLoginForm from "../components/auth/GoogleLoginForm";
import LogoutButton from "../components/auth/LogoutButton";
import DisplayContent from "../components/reflection/view";
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
        <DisplayContent />
      </>
    ) : (
      <GoogleLoginForm />
    );
  }
};

export default Home;
