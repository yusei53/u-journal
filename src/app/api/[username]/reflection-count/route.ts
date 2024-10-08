import { NextRequest, NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { username: string } }
) {
  try {
    const { username } = params;

    const totalReflections = await prisma.reflection.count({
      where: {
        username,
      },
    });

    const reflectionsDateByUsername = await prisma.reflection.findMany({
      where: {
        username,
      },
      select: {
        createdAt: true,
      },
    });

    // 日付ごとにグループ化して投稿数を集計(groupBy)
    const countPerDate = reflectionsDateByUsername.reduce((acc, reflection) => {
      const date = reflection.createdAt.toISOString().split("T")[0];
      if (!acc[date]) {
        acc[date] = 1;
      } else {
        acc[date]++;
      }
      return acc;
    }, {} as Record<string, number>);

    // 配列に変換
    const countReflectionsPerDate = Object.entries(countPerDate).map(
      ([date, countReflections]) => ({ date, countReflections })
    );

    return NextResponse.json(
      {
        totalReflections, // 全体の投稿数
        countReflectionsPerDate, // 日付ごとの投稿数
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching contributions:", error);
    return NextResponse.json(
      { message: "Contributions data could not be retrieved" },
      { status: 500 }
    );
  }
}
