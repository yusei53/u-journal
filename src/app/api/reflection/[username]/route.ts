import { NextRequest, NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";

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

  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return NextResponse.json(
        { message: "ユーザーが見つかりません" },
        { status: 404 }
      );
    }

    const reflections = await prisma.reflection.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      select: {
        reflectionCUID: true,
        title: true,
        createdAt: true,
      },
    });

    return NextResponse.json({ reflections }, { status: 200 });
  } catch (error) {
    console.error("Error fetching reflections:", error);
    return NextResponse.json(
      { message: "投稿の取得に失敗しました" },
      { status: 500 }
    );
  }
}
