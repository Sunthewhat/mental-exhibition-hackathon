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

const FormProposal = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [proposalForm, setProposalForm] = useState();


  const formSchema = z.object({
    ideaName: z.string().min(1, { message: "Team name is required" }),
    linkSlide: z.string().min(1, { message: "Team name is required" }),
    fileUpload: typeof window === 'undefined' ? z.any() : z.instanceof(FileList)
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ideaName: "",
      linkSlide: "",
      fileUpload: null,
    },
  });
  const fileRef = form.register("fileUpload");

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true); // Set submitting state to true

    setTimeout(() => {
      setIsSubmitting(false); // Reset submitting state after delay
      window.location.href = "/form/success"; // Redirect to the next page
    }, 1000); // Delay for 2 seconds
  }

  return (
    <section className="space-y-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 lg:mx-auto"
        >
          <div className="bg-white/70 lg:w-[1000px]  px-7 py-5 space-y-6 rounded">
            <div className="flex flex-col gap-6 py-6">
              <h1 className="text-xl font-bold text-[#5a81bc] text-center">
                Proposal Form
              </h1>
              <div className="flex flex-col gap-8 text-sm mx-auto lg:w-[800px]">
                <ul>
                  <p>แนบลิงก์นวัตกรรมหรือแนวคิดที่ใช้ในการแก้ไขปัญหา โดย</p>
                  <li>- ส่งเป็นไฟล์ Presentation (PDF) </li>
                  <li>- จำนวนไม่เกิน 10 หน้า </li>
                  <li>- ขนาดไม่เกิน 10 MB</li>
                </ul>
                <ul>
                  <p>สิ่งที่ควรจะมีเนื้อหาใน Presentation</p>
                  <li>
                    - Pain point พร้อมข้อมูลอ้างอิงเพื่อสนับสนุน Pain point
                  </li>
                  <li>- Solution (แนวคิดหรือนวัตกรรมที่ใช้ในการแก้ไขปัญหา)</li>
                  <li>- ความเป็นไปได้ในการทำงานจริง</li>
                  <li>- Business Model Canvas (Optional)</li>
                </ul>
              </div>

              <div className="mx-auto lg:w-[800px] mt-3 space-y-6 text-base lg:text-lg">
                <FormField
                  control={form.control}
                  name="ideaName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Idea name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="idea name"
                          {...field}
                          type="text"
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fileUpload"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">
                      แนบไฟล์ (.pdf)
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="เลือกลิงก์สไลด์"
                          {...fileRef}
                          type="file"
                          accept="application/pdf"
                          className="w-full"
                          onChange={(event) => {
                            field.onChange(event.target?.files?.[0] ?? undefined);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="linkSlide"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        แนบลิงก์สไลด์ (Google, Drive, Onedrive และอื่น ๆ )
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your answer"
                          {...field}
                          type="text"
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
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

export default FormProposal;
