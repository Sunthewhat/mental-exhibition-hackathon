import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const ConfirmSubmitData = () => {
  const [formData, setFormData] = useState<any[]>([]);
  const [isConfirming, setIsConfirming] = useState(false);
  const [members, setMembers] = useState(0);
  const [formType, setFormType] = useState<string | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setFormData(parsedData); // Update state with parsed data
      } catch (error) {
        console.error("Error parsing stored data:", error);
      }
    }
    const storedMembers = parseInt(localStorage.getItem("members") || "3", 10);
    if (!isNaN(storedMembers)) {
      setMembers(storedMembers);
    }
    const getFormType = localStorage.getItem("form-type") as string;
    setFormType(getFormType || "");
  }, []); // Empty dependency array to run only on initial mount

  const handleClearStorage = () => {
    console.log("reset success");
    localStorage.clear();
    setFormData([]); // Update state to clear displayed data
  };

  return (
    <section className="space-y-6">
      <div className="bg-white/70 lg:w-[1000px] h-[500px] px-7 py-7 space-y-6 rounded">
        <div className="w-full flex flex-col items-center gap-2">
          <div className="mt-6">
            <Image src="/logo.png" alt="logo" width={120} height={120} />
          </div>
          <div className="space-y-4 text-center">
            <h1 className="text-xl font-bold text-[#5a81bc]">
              แบบฟอร์มลงทะเบียน Mental Health Hackathon Challenge
            </h1>
            <p>
              Innovation hackathon challenge
              <span className="ml-2 font-semibold text-[#5a81bc]">
                “นวัตกรรมเพื่อความตระหนักรู้ด้านสุขภาพจิตในสังคม”
              </span>
            </p>
          </div>
        </div>
        <hr className="p-[1px] bg-[#b9a5d6] w-full" />
        <div className="flex flex-col items-center gap-6 py-3">
          <h1 className="text-xl font-bold text-[#5a81bc]">
            ยืนยันสมาชิกในทีมจำนวน {members} คน
          </h1>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <Button onClick={handleClearStorage}>
          <Link href="/form/choose-education-level" className="text-lg">
            Reset
          </Link>
        </Button>
        <Button
          className="text-lg"
          onClick={() => {
            setIsConfirming(true); // Set confirming state to true
            // Simulate processing (replace with actual logic)
            setTimeout(() => {
              setIsConfirming(false); // Reset confirming state after delay
              // Redirect or navigate as intended
              if (formType === "exhibition") {
                window.location.href = "/form/form-proposal";
              } else {
                window.location.href = "/form/success";
              }
            }, 2000); // Delay for 2 seconds
          }}
          disabled={isConfirming} // Disable button while confirming
        >
          {formType === "exhibition" ? (
            <Link href="/form/form-proposal" className="text-lg">
              Go to proposal
            </Link>
          ) : (
            <Link href="/form/success" className="text-lg">
              ยืนยัน success
            </Link>
          )}
        </Button>
      </div>
    </section>
  );
};

export default ConfirmSubmitData;
