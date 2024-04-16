"use server";

import { render } from "@react-email/render";
import nodemailer from "nodemailer";

import {
  ReserveConfirmation,
  ReserveConfirmationProps,
} from "@/features/workshop/components/ReserveConfirmation";
import React from "react";
import { getLocByWorkshop } from "@/features/workshop/helper";

export const POST = async (req: Request, res: Response) => {
    const formData = await req.formData();  
    
    const userName = formData.get("userName") as string;
    const email = formData.get("email") as string;
    const workShop = formData.get("workShop") as string;
    const date = formData.get("date") as string;

  if (!email) {
    throw Error("A target email is required.");
  }
  
  const user = "charana.sukr@mail.kmutt.ac.th";
  const pass = "wsak vsfc pyyg atol";

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
    return Response.json({ Message: "Complete", status: 201 });
  } catch (err) {
    console.log(`Error sending email (${workShop}) `);
    return Response.json({ Message: "Error", status: 404 });
  }
};
