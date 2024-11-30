import { NextRequest, NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";
import getCurrentUser from "@/src/utils/actions/get-current-user";

export async function GET(
  request: NextRequest,
  { params }: { params: { reflectionCUID: string } }
) {
  try {
    const { reflectionCUID } = params;

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
      return NextResponse.json(
        { message: "Reflection not found" },
        { status: 404 }
      );
    }

    //MEMO: ほんとはここで公開非公開の設定したいけどcurrentUserのidが取れないからコンポーネントでやってる
    // if (reflection.userId !== currentUser?.id && !reflection.isPublic) {
    //   return NextResponse.json(
    //     { message: "Unauthorized access to this reflection" },
    //     { status: 403 }
    //   );
    // }

    return NextResponse.json({
      ...reflection,
      createdAt: reflection.createdAt.toISOString(),
    });
  } catch (error) {
    console.error("Error fetching reflection:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { reflectionCUID: string } }
) {
  try {
    const { reflectionCUID } = params;

    const currentUser = await getCurrentUser();

    if (!currentUser?.id) {
      return new NextResponse("認証されていません", { status: 401 });
    }

    const reflection = await prisma.reflection.delete({
      where: { reflectionCUID },
    });

    if (!reflection) {
      return NextResponse.json(
        { message: "Reflection not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Reflection deleted" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting reflection:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
