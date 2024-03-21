"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ChooseMemberAndTeam = () => {
  const [formType, setFormType] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    const getFormType = localStorage.getItem("form-type");
    setFormType(getFormType);
  }, []);

  const [selectedChoice, setSelectedChoice] = useState("");
  const handleRadioChange = (e: any) => {
    setSelectedChoice(e.target.value);
  };

  const formSchema = z.object({
    teamName: z.string().min(1, { message: "Team name is required" }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    localStorage.setItem("team-name", values.teamName);
    setIsSubmitting(true); // Set submitting state to true

    setTimeout(() => {
      setIsSubmitting(false); // Reset submitting state after delay
      window.location.href = getLink(); // Redirect to the next page
    }, 1000); // Delay for 2 seconds
  }

  const getLink = () => {
    if (selectedChoice === "") {
      return "error";
    } else if (selectedChoice === "member_3") {
      localStorage.setItem("members", "3");
      if (localStorage.getItem("form-type") === "hackathon") {
        return "/form/form-hackathon";
      } else {
        return "/form/form-exhibition";
      }
    } else if (selectedChoice === "member_4") {
      localStorage.setItem("members", "4");
      if (localStorage.getItem("form-type") === "hackathon") {
        return "/form/form-hackathon";
      } else {
        return "/form/form-exhibition";
      }
    } else if (selectedChoice === "member_5") {
      localStorage.setItem("members", "5");
      if (localStorage.getItem("form-type") === "hackathon") {
        return "/form/form-hackathon";
      } else {
        return "/form/form-exhibition";
      }
    } else {
      return "error";
    }
  };

  return (
    <section className="space-y-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 lg:mx-auto"
        >
          <div className="bg-white/70 lg:w-[1000px]  px-7 py-7 space-y-6 rounded">
            <div className="flex flex-col gap-6 py-6">
              <h1 className="text-xl font-bold text-[#5a81bc] text-center">
                {formType === "exhibition"
                  ? "ระดับอุดมศึกษา"
                  : "ระดับมัธยมปลาย"}
              </h1>
              <ul className="mx-auto lg:w-[800px] mb-6">
                <li>- มีสมาชิกในทีม 3-5 คน</li>
                <li>
                  - สมาชิกอย่างน้อย 3
                  คนต้องศึกษาอยู่ในมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี{" "}
                </li>
                <li>- สมาชิกอีก 2 คน สามารถมาจากระดับมัธยมศึกษาตอนปลายได้</li>
              </ul>

              <FormField
                control={form.control}
                name="teamName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-lg">
                      Team name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="team name"
                        {...field}
                        type="text"
                        className="w-full lg:w-[800px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <ul className="space-y-4">
                <h1 className="font-semibold text-lg">จำนวนสมาชิกในทีม</h1>
                <li className="flex items-center">
                  <input
                    id=""
                    type="radio"
                    value="member_3"
                    name="default-radio"
                    className="w-4 h-4 lg:w-5 lg:h-5 border-gray-300"
                    onChange={handleRadioChange}
                  />
                  <label
                    htmlFor=""
                    className="ms-2 ml-3 text-sm lg:text-base font-medium"
                  >
                    3
                  </label>
                </li>
                <li className="flex items-center">
                  <input
                    id=""
                    type="radio"
                    value="member_4"
                    name="default-radio"
                    className="w-4 h-4 lg:w-5 lg:h-5 border-gray-300"
                    onChange={handleRadioChange}
                  />
                  <label
                    htmlFor=""
                    className="ms-2 ml-3 text-sm lg:text-base font-medium"
                  >
                    4
                  </label>
                </li>
                <li className="flex items-center">
                  <input
                    id=""
                    type="radio"
                    value="member_5"
                    name="default-radio"
                    className="w-4 h-4 lg:w-5 lg:h-5 border-gray-300"
                    onChange={handleRadioChange}
                  />
                  <label
                    htmlFor=""
                    className="ms-2 ml-3 text-sm lg:text-base font-medium"
                  >
                    5
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <Button>
              <Link href="/form/choose-education-level" className="text-lg">
                ย้อนกลับ
              </Link>
            </Button>
            {isSubmitting ? (
              <Button className="text-lg lg:px-10">Saveing...</Button>
            ) : (
              <Button className="text-lg lg:px-10">ถัดไป &gt;</Button>
            )}
          </div>
        </form>
      </Form>
    </section>
  );
};

export default ChooseMemberAndTeam;
