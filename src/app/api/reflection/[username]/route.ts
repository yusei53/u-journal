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
      { message: "ユーザーが見つかりません" },
      { status: 404 }
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
    const page = parseInt(req.nextUrl.searchParams.get("page") || "1", 10);
    const reflectionsPerPage = 14;
    const offset = (page - 1) * reflectionsPerPage;

    const reflectionCount = await prisma.reflection.count({
      where: { userId },
    });

    const totalPage = Math.ceil(reflectionCount / reflectionsPerPage);

    const userWithReflections = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        image: true,
        reflections: {
          orderBy: { createdAt: "desc" },
          take: reflectionsPerPage,
          skip: offset,
          select: {
            title: true,
            reflectionCUID: true,
            charStamp: true,
            createdAt: true,
            isPublic: true,
          },
        },
      },
    });

    if (!userWithReflections) {
      return NextResponse.json({ status: 404 });
    }

    return NextResponse.json({
      reflections: userWithReflections.reflections,
      userImage: userWithReflections.image,
      totalPage,
    });
  } catch (error) {
    console.error("Error fetching user reflections:", error);
    return NextResponse.json(
      { message: "振り返りの取得に失敗しました" },
      { status: 500 }
    );
  }
}
