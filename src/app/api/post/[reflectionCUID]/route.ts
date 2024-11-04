import prisma from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import getCurrentUser from "@/src/utils/actions/get-current-user";

export async function GET(
  req: NextRequest,
  { params }: { params: { reflectionCUID: string } }
) {
  try {
    const { reflectionCUID } = params;

    const currentUser = await getCurrentUser();

    const reflection = await prisma.reflection.findUnique({
      where: { reflectionCUID },
      select: {
        title: true,
        content: true,
        charStamp: true,
        isPublic: true,
        createdAt: true,
        userId: true,
        user: {
          select: { image: true },
        },
      },
    });

    if (!reflection) {
      return NextResponse.json(
        { message: "Reflection not found" },
        { status: 404 }
      );
    }

    // 公開されている場合、または、ログインユーザーが所有者の場合はデータを返す
    if (
      reflection.isPublic ||
      (currentUser && currentUser.id === reflection.userId)
    ) {
      return NextResponse.json({
        userImage: reflection.user.image,
        title: reflection.title,
        content: reflection.content,
        charStamp: reflection.charStamp,
        isPublic: reflection.isPublic,
        createdAt: reflection.createdAt,
      });
    }

    // 公開されておらず、かつログインユーザーが所有者でない場合は 404 を返す
    return NextResponse.json(
      { message: "このページは見ることができません" },
      { status: 404 }
    );
  } catch (error) {
    console.error("Error fetching reflection:", error);
    return NextResponse.json(
      { message: "Error fetching reflection" },
      { status: 500 }
    );
  }
}
