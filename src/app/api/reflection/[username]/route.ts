import { NextRequest, NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";
import { getUserIdByUsername } from "@/src/utils/actions/get-userId-by-username";

export async function GET(
  req: NextRequest,
  { params }: { params: { username: string } }
) {
  const username = params.username;

  if (!username) {
    return NextResponse.json(
      { message: "ユーザー名が指定されていません" },
      { status: 400 }
    );
  }

  const userId = await getUserIdByUsername(username);

  if (!userId) {
    return NextResponse.json(
      { message: "ユーザーが見つかりません" },
      { status: 404 }
    );
  }

  try {
    const userWithReflections = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        image: true,
        reflections: {
          orderBy: { createdAt: "desc" },
          select: {
            reflectionCUID: true,
            title: true,
            charStamp: true,
            createdAt: true,
          },
        },
      },
    });
    if (!userWithReflections) {
      return NextResponse.json(
        { message: "ユーザーが見つかりません" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        reflections: userWithReflections.reflections,
        userImage: userWithReflections.image,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching reflections:", error);
    return NextResponse.json(
      { message: "投稿の取得に失敗しました" },
      { status: 500 }
    );
  }
}
