"use server";
import prisma from "@/src/lib/prisma";
import getCurrentUser from "./get-current-user";

export type ReflectionDetailV2 = {
  title: string;
  content: string;
  charStamp: string;
  isPublic: boolean;
  createdAt: string;
  userId: string;
  user: {
    image: string | null;
    username: string | null;
  };
};

export const getReflectionByCUID = async (
  reflectionCUID: string
): Promise<ReflectionDetailV2 | null> => {
  try {
    const currentUser = await getCurrentUser();

    const reflection = await prisma.reflection.findUnique({
      where: {
        reflectionCUID,
      },
      select: {
        title: true,
        content: true,
        charStamp: true,
        isPublic: true,
        createdAt: true,
        userId: true,
        user: {
          select: { image: true, username: true },
        },
      },
    });

    if (!reflection) {
      return null;
    }

    if (reflection.userId !== currentUser?.id && !reflection.isPublic) {
      return null;
    }

    return {
      ...reflection,
      createdAt: reflection.createdAt.toISOString(),
    };
  } catch (error) {
    console.error("Error fetching user ID:", error);
    return null;
  }
};
