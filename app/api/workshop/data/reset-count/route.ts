import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PUT(){

try {
    await prisma.workshopBooking.updateMany({
      data: {
        userCount: 0,
      },
    });

    console.log('User count reset for all workshop bookings');
    return NextResponse.json({ message: 'User count reset for all workshop bookings' });
  } catch (error) {
    console.error('Error resetting user count:', error);
  } finally {
    await prisma.$disconnect();
  }
}