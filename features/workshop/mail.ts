"use client";

import { ReserveConfirmationProps } from "./components/ReserveConfirmation";

export const assertSendEmail = async (data: ReserveConfirmationProps) => {
  if (!data.email) {
    throw Error("A target email is required.");
  }

  try {
    await fetch("/api/workshop/mail", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(`Email (${data.workShop}) has been sent to user.`);
  } catch (err) {
    console.log(`Error sending email (${data.workShop}) `);
  }
};
