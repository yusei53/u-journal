import prisma from "@/src/lib/prisma";
import getCurrentUser from "@/src/utils/actions/get-current-user";
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

    const now = new Date();
    const jstDate = new Date(now.getTime() + 9 * 60 * 60 * 1000); // UTCに9時間を加える

    const reflection = await prisma.reflection.create({
      data: {
        title,
        content,
        createdAt: jstDate, // JSTの日時を使用
        userId: currentUser.id,
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
