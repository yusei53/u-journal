import prisma from "@/lib/prisma";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const allReflectionPosts = await prisma.post.findMany();
    return NextResponse.json(allReflectionPosts);
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

    const response = await prisma.post.create({
      data: {
        title,
        content,
        userId: currentUser.id,
      },
    });

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error creating posts" },
      { status: 500 }
    );
  }
}
