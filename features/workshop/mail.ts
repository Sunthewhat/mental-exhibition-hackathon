"use server";

import { render } from "@react-email/render";
import nodemailer from "nodemailer";

import {
  ReserveConfirmation,
  ReserveConfirmationProps,
} from "./components/ReserveConfirmation";
import React from "react";
import { getLocByWorkshop } from "./helper";

export const assertSendEmail = async ({
  userName,
  workShop,
  date,
  email,
}: ReserveConfirmationProps) => {
  if (!email) {
    throw Error("A target email is required.");
  }

  const user = process.env.NODEMAILER_EMAIL;
  const pass = process.env.NODEMAILER_PASS;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });

  const location = getLocByWorkshop(workShop);
  try {
    const options = {
      // from: "Mental Exhibition <mentalexhibition@hackmindgallery-kmutt.com>",
      from: "[Mental Health Exhibition & Hackathon] <mentalexhibition@mail.kmutt.ac.th>",
      to: email,
      subject: "[reservation confirmed] ยืนยันการจองเวิร์คช็อป",
      html: render(
        React.createElement(ReserveConfirmation, {
          userName,
          workShop,
          date,
          location,
        })
      ),
    };

    await transporter.sendMail(options);
    console.log(`Email (${workShop}) has been sent to user.`);
  } catch (err) {
    console.log(`Error sending email (${workShop}) `);
  }
};
