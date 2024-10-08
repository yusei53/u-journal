import prisma from "@/src/lib/prisma";
import getCurrentUser from "@/src/utils/actions/get-current-user";
import { toJST } from "@/src/utils/date-helper";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const reflections = await prisma.reflection.findMany();
    return NextResponse.json({ reflections });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error get posts" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, content } = await req.json();

    const currentUser = await getCurrentUser();

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse("認証されていません", { status: 401 });
    }

    if (!currentUser.username) {
      return new NextResponse("ユーザーネームが設定されていません", {
        status: 400,
      });
    }
    const now = new Date();
    const jstDate = toJST(now);

    const reflection = await prisma.reflection.create({
      data: {
        title,
        content,
        createdAt: jstDate,
        username: currentUser.username,
      },
    });
    return NextResponse.json(reflection, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error creating posts" },
      { status: 500 }
    );
  }
}
