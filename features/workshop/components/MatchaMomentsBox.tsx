"use client";

import Image from "next/image";
import OuterBox from "@/features/hackathon/components/OuterBox";
import styles from "@/app/hackathon/page.module.css";
import InnerBox from "@/features/hackathon/components/InnerBox";
import GButton from "@/features/hackathon/components/GButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import InViewAnimation from "@/features/shared/Animation/InViewAnimation";
import { insertToGoogleForm, updateRegisterCount } from "../api";
import { assertSendEmail } from "../mail";
import { Loader2Icon } from "lucide-react";

interface Props {
  textStyle: {
    header: string;
    subHeader: string;
    paragraph: string;
  };
  title: string;
  link: string;
}

const MatchaMomentsBox = ({
  textStyle: { header, subHeader, paragraph },
  title,
  link,
}: Props) => {
  const fontColor = {
    blue: "text-[#5A81BC]",
    purple: "text-[#8E7AAB]",
    black: "text-[#34312F]",
  };

  const [honorificPrefix, setHonorifixPrefix] = useState("");
  const [fullname, setFullname] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [date, setDate] = useState<string>();
  const [error, setError] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [userCount, setUserCount] = useState<number>(0);

  const formData = new FormData();

  const handleChange = (event: { target: { id: string; value: string } }) => {
    if (event.target.id === "honorific-prefix") {
      setHonorifixPrefix(event.target.value);
    }
    if (event.target.id === "fullname") {
      setFullname(event.target.value);
    }
    if (event.target.id === "nickname") {
      setNickname(event.target.value);
    }

    if (event.target.id === "tel") {
      setTel(event.target.value);
    }
    if (event.target.id === "email") {
      setEmail(event.target.value);
    }
    if (event.target.id === "date") {
      setDate(event.target.value);
    }
  };

  const validateForm = () => {
    if (!fullname || !nickname || !tel || !email || !date || !honorificPrefix) {
      setError(true);
      return false;
    }
    if (!tel.match("[0-9]{10}") || !/^\d+$/.test(tel)) {
      setError(true);
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError(true);
      return false;
    }
    setError(false);
    return true;
  };
  const router = useRouter();

  const onSubmit = async () => {
    if (validateForm() === false) return;
    formData.set("honorific-prefix", honorificPrefix);
    formData.set("fullname", fullname);
    formData.set("nickname", nickname);
    formData.set("tel", tel);
    formData.set("email", email);
    formData.set("date", date as string);

    setIsSubmitting(true);

    try {
      const dataGoogleForm = await insertToGoogleForm(link, formData);

      if (dataGoogleForm.Message === "Complete") {
        await updateRegisterCount("MatchaMoments", date as string)
          .then((count) => {
            setUserCount(count);
          })
          .catch((error) => console.error("Error updating user count:", error));

        await assertSendEmail({
          userName: fullname as string,
          workShop: "MatchaMoments",
          date: date as string,
          email,
        });

        router.push(`/workshop/${link}/submit`);
      } else {
        console.error("Submission failed:", dataGoogleForm.error);
      }
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <OuterBox>
      <InnerBox>
        <div className="flex flex-col justify-center items-center gap-3 border-b border-[#B9A5D6] pb-6">
          <div className="">
            <Image
              src="/assets/logo.svg"
              alt="logo"
              width={120}
              height={120}
              className="btn-hover"
            />
          </div>
          <h2
            className={`${header} ${fontColor.blue} md:text-[20px] lg:text-[24px] text-center text-[#5A81BC] font-bold`}
          >
            แบบฟอร์มลงทะเบียน
            <br className="md:hidden" /> {title}
          </h2>
        </div>
        <InViewAnimation>
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="font-medium text-[14px]">คำนำหน้าชื่อ</h2>
              <select
                id="honorific-prefix"
                className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4 `}
                value={honorificPrefix}
                onChange={handleChange}
              >
                <option value="" className="">
                  คำนำหน้าชื่อ
                </option>
                <option value="นาย">นาย</option>
                <option value="นาง">นาง</option>
                <option value="นางสาว">นางสาว</option>
              </select>
              {error && !honorificPrefix && (
                <p className="my-4 text-red-500 font-bold">
                  กรุณาเลือกคำนำหน้าชื่อ
                </p>
              )}
            </div>
            <div>
              <h2 className=" font-medium text-[14px]">ชื่อ-นามสกุล</h2>
              <input
                value={fullname}
                id="fullname"
                type="text"
                className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                placeholder="ชื่อ-นามสกุล"
                onChange={handleChange}
              />
              {error && !fullname && (
                <p className="my-4 text-red-500 font-bold">
                  กรุณากรอกชื่อ-นามสกุล
                </p>
              )}
            </div>
            <div>
              <h2 className=" font-medium text-[14px]">ชื่อเล่น</h2>
              <input
                value={nickname}
                id="nickname"
                type="text"
                className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                placeholder="ชื่อเล่น"
                onChange={handleChange}
              />
              {error && !nickname && (
                <p className="my-4 text-red-500 font-bold">กรุณากรอกชื่อเล่น</p>
              )}
            </div>

            <div>
              <h2 className=" font-medium text-[14px]">
                เบอร์โทรศัพท์ที่สามารถติดต่อได้
              </h2>
              <input
                value={tel}
                id="tel"
                type="text"
                className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                placeholder="เบอร์โทรศัพท์ที่สามารถติดต่อได้"
                onChange={handleChange}
              />
              {error &&
                (!tel || !tel.match("[0-9]{10}") || !/^\d+$/.test(tel)) && (
                  <p className="my-4 text-red-500 font-bold">
                    กรุณากรอกเบอร์โทรศัพท์ที่สามารถติดต่อได้
                  </p>
                )}
            </div>
            <div>
              <h2 className=" font-medium text-[14px]">
                email ที่สามารถติดต่อได้
              </h2>
              <input
                value={email}
                id="email"
                type="text"
                className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4`}
                placeholder="Email"
                onChange={handleChange}
              />
              {error && (!email || !/\S+@\S+\.\S+/.test(email)) && (
                <p className="my-4 text-red-500 font-bold">กรุณากรอกอีเมล</p>
              )}
            </div>
            <div>
              <h2 className="font-medium text-[14px]">
                วันและเวลาที่ต้องการเข้าร่วม
              </h2>
              <select
                id="date"
                value={date}
                className={`${styles.textBox} border-[#000] border-opacity-20 border bg-transparent bg-opacity-0 rounded-[4px] w-full p-4 `}
                onChange={handleChange}
              >
                <option value="" className="">
                  เลือกวันและเวลาที่ต้องการเข้าร่วม
                </option>
                <option value="22/4/2024, 10.00-12.00">
                  22/4/2024, 10.00-12.00
                </option>
                <option value="23/4/2024, 10.00-12.00">
                  23/4/2024, 10.00-12.00
                </option>
              </select>
              {error && !date && (
                <p className="my-4 text-red-500 font-bold">
                  กรุณาเลือกวันและเวลาที่ต้องการเข้าร่วม
                </p>
              )}
            </div>
          </div>
        </InViewAnimation>
      </InnerBox>
      <div className="flex flex-row justify-between items-center">
        <GButton
          title="ย้อนกลับ"
          type="TYPE1"
          command={`/workshop/${link}/consent`}
          symbol={true}
        />
        <button
          className={`${styles.btn_gradient} px-[50px] md:px-[60px] py-[15px] rounded-[8px] z-20`}
          onClick={onSubmit}
          disabled={isSubmitting}
        >
          <div className="text-white text-[14px] md:text-[16px] font-bold flex gap-2 items-center">
            {isSubmitting && <Loader2Icon className="w-5 h-5 animate-spin" />}
            <p>ส่งคำตอบ</p>
          </div>
        </button>
      </div>
    </OuterBox>
  );
};

export default MatchaMomentsBox;
