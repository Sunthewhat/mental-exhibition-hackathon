
import path from "path";
import fs, { appendFile, writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import { v4 } from "uuid";



export const POST = async (req: Request, res: Response) => {

  const prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSdG_0L_Q8sDfHZt5KinU-qEU9clXgmP5lHcEq0sFXfUFh0ryg/formResponse?usp=pp_url&entry.95667307=%E0%B8%AB%E0%B8%A5%E0%B8%B8%E0%B8%A2/08&entry.326307922=124&entry.1944262504=213123&entry.1020872492=21312&entry.1496408093=23123&entry.1212692667=312312&entry.1898813614=2313&submit=Submit`;
  await fetch(prefilledLink)
  console.log("Sent to google form");

  const formData = await req.formData();

  const file = formData.get("pdf") as File; 
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  try {
    var uuid = v4();
    // await writeFile(
    //   path.join(process.cwd(), "public/hackathon_pdf/" + uuid + ".pdf"),
    //   buffer
    // );
    return NextResponse.json({ Message: "/hackathon_pdf/"+uuid, status: 201 });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
  

  }

  