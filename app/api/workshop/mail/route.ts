import { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import React from "react";
import {
  ReserveConfirmation,
  ReserveConfirmationProps,
} from "@/features/workshop/components/ReserveConfirmation";
import { getLocByWorkshop } from "@/features/workshop/helper";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "charana.sukr@mail.kmutt.ac.th",
    pass: "wsak vsfc pyyg atol",
  },
});

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { userName, workShop, date, email } =
    req.body as ReserveConfirmationProps;

  if (!email) {
    return res.status(400).json({ error: "A target email is required." });
  }

  const location = getLocByWorkshop(workShop);

  try {
    const options = {
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
    res
      .status(200)
      .json({ message: `Email (${workShop}) has been sent to user.` });
  } catch (err) {
    res.status(500).json({ error: `Error sending email (${workShop})` });
  }
}
