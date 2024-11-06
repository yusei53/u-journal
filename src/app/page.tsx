"use client";
import Image from "next/image";
import LoginForm from "../components/auth/LoginForm";
import LogoutButton from "../components/auth/LogoutButton";
import { useSession } from "next-auth/react";
import ReflectionCardWithIconArea from "../components/reflection-all/ReflectionCardWithIconArea";
import { useReflections } from "../hooks/reflection/useReflections";
import Loading from "./loading";

const Home = () => {
  const { data: session, status } = useSession();
  const { data: reflections, isLoading, error } = useReflections();
  if (reflections === undefined) {
    return <div>振り返りが見つかりません</div>;
  }

  if (status === "loading" || isLoading) {
    return <Loading />;
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
        <ReflectionCardWithIconArea reflections={reflections} />
      </>
    ) : (
      <>
        <LoginForm />
      </>
    );
  }
};

export default Home;
