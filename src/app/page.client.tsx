"use client";
import LoginForm from "../components/auth/LoginForm";
import LogoutButton from "../components/auth/LogoutButton";
import ReflectionCardWithIconArea from "../components/reflection-all/ReflectionCardWithIconArea";
import { ReflectionAll } from "../api/reflection-api";
import { User } from "@prisma/client";

type RootPageProps = {
  currentUser?: User["id"];
  reflections: ReflectionAll[];
};

const RootPage: React.FC<RootPageProps> = ({ currentUser, reflections }) => {
  {
    return currentUser ? (
      <>
        <ReflectionCardWithIconArea reflections={reflections} />
        <LogoutButton />
      </>
    ) : (
      <>
        <LoginForm />
      </>
    );
  }
};

export default RootPage;
