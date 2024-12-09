import { Reflection, reflectionAPI } from "@/src/api/reflection-api";
import { useRouter } from "next/navigation";

type useupdatePinnedReflectionProps = {
  reflection: Reflection;
};

export const useUpdatePinnedReflection = ({
  reflection,
}: useupdatePinnedReflectionProps) => {
  const router = useRouter();

  const handleUpdatePinned = async () => {
    const result = await reflectionAPI.updatePinnedReflection({
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

  return { handleUpdatePinned };
};
