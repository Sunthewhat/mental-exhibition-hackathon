import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";
import { dateToString, parseDate, periodToString } from "../helper";

const iconUrl = "https://hackmindgallery-kmutt.com/assets/hackathon/logo.png";

export interface ReserveConfirmationProps {
  email?: string;
  userName: string;
  workShop: string;
  date: string;
  location: string;
}

export const ReserveConfirmation = ({
  userName,
  workShop,
  date,
  location,
}: ReserveConfirmationProps) => {
  const { day, hour, minute } = parseDate(date);

  const dateThai = dateToString(day, true);
  const dateEng = dateToString(day, false);
  const periodThai = periodToString(hour, minute, true);
  const periodEng = periodToString(hour, minute, false);

  return (
    <Html>
      <Head />
      <Preview>
        เรียน ผู้สมัคร. ทีมงาน Mental Health Exhibition & Hackathon
        ขอยืนยันการจองเวิร์คช็อปของคุณ &quot;{workShop}&quot; ในวันที่{" "}
        {dateThai} ตั้งแต่เวลา {periodThai} ที่ {location}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={iconUrl}
            width="101"
            height="100"
            alt="Mental logo"
            style={logo}
          />
          <Text style={header}>
            [Mental Health Exhibition & Hackathon ]
            <br />
            Reservation Confirmed ยืนยันการจองเวิร์คช็อป{" "}
          </Text>

          <Text style={paragraph}>เรียน ผู้สมัคร, {userName}</Text>

          <Text style={paragraph}>
            ทีมงาน Mental Health Exhibition & Hackathon
            ขอยืนยันการจองเวิร์คช็อปของคุณ &quot;{workShop}&quot; ในวันที่{" "}
            {dateThai} ตั้งแต่เวลา
            <br />
            {periodThai} ที่ {location}`
          </Text>

          <Text style={paragraph}>
            ขอให้ท่านมายืนยันตัว 5-10
            นาทีก่อนเวลาจองเพื่อลงทะเบียนและรับชั่วโมงกิจกรรมก่อนเข้าร่วมกิจกรรมของเรา{" "}
          </Text>

          <Text style={paragraph}>
            🌸 นอกจากกิจกรรมเวิร์คช็อปที่ท่านจองแล้วนั้น
            ยังมีกิจกรรมอีกมากมายในหัวข้อสุขภาพจิต อาทิ
            การนำเสนอผลวานนวัตกรรมเพื่อสุขภาพจิต นิทรรศการงานศิลปะจากนักศึกษา
            บูธความรู้และกิจกรรม กิจกรรม talk show
            และเวิร์คช็อปอีกมากมายตั้งแต่วันที่ 22 - 23 เมษายน ชั้น 1 และ 4
            อาคารการเรียนรู้พหุวิทยาการ (LX)
          </Text>

          <Text style={paragraph}>
            สามารถติดตามรายละเอียดกิจกรรมได้ทาง
            <br />
            https://hackmindgallery-kmutt.com
            <br />
            IG : Hackmindgallery.kmutt
            <br />
            Facebook : How to train in Bangmod
          </Text>

          <br />
          <Text style={footer}>
            ขอให้มีวันที่ดีนะคะ ⭐️
            <br />
            ทีมงาน Mental Health Exhibition & Hackathon 🌸
          </Text>

          <Hr style={hr} />

          <Text style={paragraph}>Dear Applicants, {userName}</Text>

          <Text style={paragraph}>
            We would like to send you a confirmation of Workshop &quot;
            {workShop}
            &quot; {dateEng} from {periodEng} at {location}. Please come and
            show up yourself 5-10 minutes before the period to claim your
            activity hours and preparation.
          </Text>

          <Text style={paragraph}>
            Moreover, we also have many more workshops and activities for you.
            You can enjoy the Mental Health Artworks Exhibition and Talk Show
            Stage from 20-23 April at LX Building.
          </Text>

          <Text style={paragraph}>
            For more information, please contact:
            <br />
            Website: https://hackmindgallery-kmutt.com/
            <br />
            IG: Hackmindgallery.kmutt
            <br />
            Facebook: How to Train in Bangmod
          </Text>

          <br />
          <Text style={footer}>
            Have a great day 🤍
            <br />
            Sincerely,
            <br />
            Mental Health Exhibition & Hackathon Staff 🌸
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "232, 206, 204",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 32px",
};


const logo = {
  margin: "10px auto",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
};
const header = {
  fontSize: "20px",
  lineHeight: "26px",
  fontWeight: 500,
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "22px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "16px",
  lineHeight: "22px",
};
