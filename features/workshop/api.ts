"use server";

import { Resend } from "resend";
import {
  ReserveConfirmation,
  ReserveConfirmationProps,
} from "./components/ReserveConfirmation";
import React from "react";

const resend = new Resend("re_FK3YiE8d_GocpWBxZspWgqxGFhxqs3kU7");

export const sendEmail = async ({
  userName,
  workShop,
  date,
  location,
  email,
}: ReserveConfirmationProps) => {
  if (!email) {
    throw Error("A target email is required.");
  }

  try {
    await resend.emails.send({
      // from: "Mental Exhibition <mentalexhibition@hackmindgallery-kmutt.com>",
      from: "[Mental Health Exhibition & Hackathon] <onboarding@resend.dev>",
      to: email,
      subject: "[reservation confirmed] ยืนยันการจองเวิร์คช็อป",
      react: React.createElement(ReserveConfirmation, {
        userName,
        workShop,
        date,
        location,
      }),
    });
  } catch (err) {
    console.log(err);
  }
};
