import { Reflection, reflectionAPI } from "@/src/api/reflection-api";
import { useRouter } from "next/navigation";

type usePinnedReflectionProps = {
  reflection: Reflection;
};

export const usePinnedReflection = ({
  reflection,
}: usePinnedReflectionProps) => {
  const router = useRouter();

  const handlePin = async () => {
    const result = await reflectionAPI.pinnedReflection({
      reflectionCUID: reflection.reflectionCUID,
      isPinned: !reflection.isPinned,
    });
    if (result === 401) {
      router.push(`/login`);
      return;
    } else {
      window.location.reload();
    }
  };

  return { handlePin };
};
