import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// getUserCount
export async function GET() {
  try {
    const result = await prisma.workshopBooking.findMany();
    return NextResponse.json(result);
  } catch (error) {
    console.log("Error :", error);
    return NextResponse.json({ error });
  }
}

// Creae new workshopBooking Table
export async function POST() {
  try {
    await prisma.workshopBooking.createMany({
      data: [
        { title: "MyCupOfTea_22", userCount: 0 },
        { title: "MyCupOfTea_23", userCount: 0 },
        { title: "LaLaiSao_22", userCount: 0 },
        { title: "LaLaiSao_23", userCount: 0 },
        { title: "JudJaiSaiJaeGun_22", userCount: 0 },
        { title: "JudJaiSaiJaeGun_23", userCount: 0 },
        { title: "MatchaMoments_22", userCount: 0 },
        { title: "MatchaMoments_23", userCount: 0 },
      ],
    });
    return NextResponse.json({ message: "Success" });
  } catch (error) {
    console.error("Error initializing table:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

export async function DELETE() {
  try {
    await prisma.workshopBooking.deleteMany();
    return NextResponse.json({ message: "Delete Success" });
  } catch (error) {
    console.log("Error :", error);
  }
}

export async function PUT(req: Request) {
  try {
    const { title, date } = await req.json();
    console.log("Received title:", title);
    const realTitle = title +"_"+ date.toString().substring(0, 2);

    // Fetch the existing workshop booking
    const existingBooking = await prisma.workshopBooking.findUnique({
      where: { title: realTitle },
    });

    // Increment the userCount by 1
    const updatedUserCount = await prisma.workshopBooking.update({
      where: { title: realTitle },
      data: {
        userCount: existingBooking?.userCount
          ? existingBooking.userCount + 1
          : 1,
      },
    });

    console.log(`userCount of (${title}) :`, updatedUserCount.userCount);
    console.log("Update userCount success");

    return NextResponse.json({
      message: `Workshop booking ${title} updated`,
      updatedUserCount,
    });
  } catch (error) {
    console.error("Error handling PUT request:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}