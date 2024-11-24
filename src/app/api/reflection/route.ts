import prisma from "@/src/lib/prisma";
import getCurrentUser from "@/src/utils/actions/get-current-user";
import { toJST } from "@/src/utils/date-helper";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const page = parseInt(req.nextUrl.searchParams.get("page") || "1", 10);
    const reflectionsPerPage = 14;
    const offset = (page - 1) * reflectionsPerPage;
    const reflectionCount = await prisma.reflection.count({
      where: { isPublic: true },
    });
    const totalPage = Math.ceil(reflectionCount / reflectionsPerPage);
    const reflections = await prisma.reflection.findMany({
      where: { isPublic: true },
      orderBy: { createdAt: "desc" },
      take: reflectionsPerPage,
      skip: offset,
      select: {
        title: true,
        reflectionCUID: true,
        charStamp: true,
        createdAt: true,
        content: true,
        isPublic: true,
        user: {
          select: {
            username: true,
            image: true,
          },
        },
      },
    });

    if (!reflections) {
      return NextResponse.json(
        { message: "振り返りが見つかりません" },
        { status: 404 }
      );
    }
    return NextResponse.json({
      reflections,
      totalPage,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error get posts" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, content, charStamp, isPublic } = await req.json();

    const currentUser = await getCurrentUser();

    if (!currentUser?.id) {
      return new NextResponse("認証されていません", { status: 401 });
    }
    const now = new Date();
    const jstDate = toJST(now);

    const reflection = await prisma.reflection.create({
      data: {
        title,
        content,
        charStamp,
        isPublic,
        createdAt: jstDate,
        userId: currentUser.id,
      },
    });

    revalidateTag(`reflections-${currentUser.username}`);
    revalidateTag("reflections-all");

    return NextResponse.json(reflection, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error creating posts" },
      { status: 500 }
    );
  }
}
