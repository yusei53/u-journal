import { reflectionsCountAPI } from "@/src/api/reflections-count-api";
import { reflectionAPI } from "@/src/api/reflection-api";
import { notFound } from "next/navigation";
import ReflectionCardWithIconArea from "../reflection-all/ReflectionCardWithIconArea";

const page = async () => {
  const reflections = await reflectionAPI.getReflections();

  return <ReflectionCardWithIconArea reflections={reflections.reflections} />;
};

export default page;
