"use client";
import Image from "next/image";
import LoginForm from "../components/auth/LoginForm";
import LogoutButton from "../components/auth/LogoutButton";
import { useSession } from "next-auth/react";
import ReflectionCardWithIconArea from "../components/reflection-all/ReflectionCardWithIconArea";
import { reflectionAPI } from "../api/reflection-api";

const Home = async () => {
  const { data: session, status } = useSession();
  const reflections = await reflectionAPI.getReflections();

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
        <ReflectionCardWithIconArea reflections={reflections.reflections} />
      </>
    ) : (
      <>
        <LoginForm />
      </>
    );
  }
};

export default Home;
