/* eslint-disable react/jsx-key */
"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "@/lib/form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useMultiStepForm } from "@/lib/useMultiStepForm";
import ConfirmSubmitData from "./ConfirmSubmitData";
import Link from "next/link";

const FormExhibition = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      nickname: "",
      university: "",
      student_id: "",
      phone: "",
      email: "",
      leader: false,
      members: 0,
      formType:'',
      teamName:'',
    },
  });
  
  const [members, setMembers] = useState(0);
  const [formType, setFormType] = useState<string | null>(null);
  const [teamName, setTeamName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const storedMembers = parseInt(localStorage.getItem("members") || "3", 10);
    if (!isNaN(storedMembers)) {
      setMembers(storedMembers);
    }
    const getFormType = localStorage.getItem("form-type") as string;
    setFormType(getFormType || ''); 
  
    const getTeamName = localStorage.getItem("team-name") as string;
    setTeamName(getTeamName || '');
  },[])
  


  const [formData, setFormData] = useState<z.infer<typeof formSchema>[]>([]);
  const { currentStepIndex, next, isLastStep } =
    useMultiStepForm(members);

    function onSubmit(values: z.infer<typeof formSchema>) {
      setIsSubmitting(true); // Set submitting state to true
    
      setFormData((prevData) => {
        const newData = [...prevData];
        if (newData.length === 0) {
          newData.push({ ...values, leader: true, formType, teamName });
        } else {
          newData.push({...values,formType,teamName});
        }
        localStorage.setItem("formData", JSON.stringify(newData));
        return newData;
      });
      console.log(values);
    
      setTimeout(() => {
        setIsSubmitting(false); // Reset submitting state after delay
        next(); // Move to the next step (ConfirmTeam)
      }, 1000); // Delay for 2 seconds
    }
    
  useEffect(() => {
    console.log(formData);
    console.log(members)
  }, [formData]);

  const handleClearStorage = () => {
    console.log("reset success");
    localStorage.clear();
    setFormData([]);
  };



  return (
    <section className="">
        {formData.length < members ? (
          <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-8 bg-white/70 px-7 py-7 rounded lg:w-[900px]">
              <h1 className="text-xl font-bold text-[#5a81bc] text-center">
                Exhibition แบบฟอร์มลงทะเบียน ข้อมูลผู้เข้าแข่งขันคนที่&nbsp;
                {currentStepIndex + 1 === 1
                  ? `${currentStepIndex + 1} (หัวหน้าทีม)`
                  : `${currentStepIndex + 1}`}
              </h1>
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ชื่อ-นามสกุล</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="ชื่อ-นามสกุล"
                        {...field}
                        autoComplete="on"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nickname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ชื่อเล่น</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="ชื่อเล่น"
                        {...field}
                        autoComplete="on"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="university"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>มหาวิทยาลัย</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="สถาบันการศึกษา"
                        {...field}
                        autoComplete="on"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="student_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>รหัสนักศึกษา</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="รหัสนักศึกษา"
                        {...field}
                        autoComplete="on"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>เบอร์ติดต่อ</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="เบอร์ติดต่อ"
                        {...field}
                        autoComplete="on"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>อีเมล</FormLabel>
                    <FormControl>
                      <Input placeholder="อีเมล" {...field} autoComplete="on" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='flex justify-between w-full mt-7'>
                <Button onClick={handleClearStorage} className="text-lg lg:px-8">
                <Link href="/form/choose-education-level">
                  Back
                </Link>
              </Button>
             {isLastStep ? (
              <Button className="text-lg lg:px-8">
              {isSubmitting ? 'Saving...': 'Finish'}
            </Button>
             ) : (
              <Button className="text-lg lg:px-8">
              {isSubmitting ? 'Saving...': 'Next'}
            </Button>
             )}
            </div>
          </form>
        </Form>  
        ) : (<ConfirmSubmitData />)}    
    </section>
  );
};

export default FormExhibition;
