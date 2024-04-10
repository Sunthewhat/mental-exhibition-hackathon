"use client";
import { Button } from "@/components/ui/button";
import { sendEmail } from "@/features/workshop/api";

import React from "react";

const page = () => {
  return (
    <div>
      <Button
        onClick={() => {
          sendEmail({
            userName: "Teprawin",
            workShop: "JudJaiSaiJaeGun",
            date: "26/4/2023, 10.00-13.00",
            email: "ninemaster12gt@gmail.com",
          });
        }}
      >
        Click to send email
      </Button>
    </div>
  );
};

export default page;
