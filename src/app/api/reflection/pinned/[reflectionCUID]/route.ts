import { NextRequest, NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { reflectionCUID: string } }
) {
  try {
    const { reflectionCUID } = params;

    const response = await prisma.reflection.update({
      where: {
        reflectionCUID,
      },
      data: {
        isPinned: true,
      },
    });

    return NextResponse.json(
      { message: "Reflection pinned successfully", data: response },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error patch reflection:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
