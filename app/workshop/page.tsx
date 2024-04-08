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
            workShop: "workshop-01",
            date: "26/4/2023-10:00",
            location: "LX12",
          });
        }}
      >
        Click to send email
      </Button>
    </div>
  );
};

export default page;
