
import path from "path";
import fs, { appendFile, writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import { v4 } from "uuid";



export const POST = async (req: Request, res: Response) => {

  const prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSeisXSSnIgj40V5_zvJbmj18qzNcYnjuqSGA1zDJWyTDD-sbA/formResponse?usp=pp_url&entry.3338809=%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%9E%E0%B9%80%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%97%E0%B8%B3%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%88%E0%B8%99%E0%B9%82%E0%B8%A2%E0%B8%9A%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B8%E0%B9%89%E0%B8%A1%E0%B8%84%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%AA%E0%B9%88%E0%B8%A7%E0%B8%99%E0%B8%9A%E0%B8%B8%E0%B8%84%E0%B8%84%E0%B8%A5%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%9A%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A2&entry.1074003173=%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B1%E0%B8%9A%E0%B8%A1%E0%B8%B1%E0%B8%98%E0%B8%A2%E0%B8%A1%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%A2/%E0%B8%9B%E0%B8%A7%E0%B8%8A./%E0%B8%9B%E0%B8%A7%E0%B8%AA.&entry.1738580510=afdsfa&entry.1088984327=3&entry.2092238618=fadsf&entry.345067144=afdsf&entry.1122129402=adfsadf&entry.1093082736=fadfads&entry.1550610923=asdfadsf&entry.416472573=adfasdfsdaf&entry.916735898=adfasdfsdaf&entry.2096266230=adfasdfsdaf&entry.1376184245=adfasdfsdaf&entry.1245284820=adfasdfsdaf&entry.1558967097=adfasdfsdaf&entry.1573341874=adfasdfsdaf&entry.1152629801=adfasdfsdaf&entry.1044899895=adfasdfsdaf&entry.275731210=adfasdfsdaf&entry.845462045=adfasdfsdaf&entry.688762263=adfasdfsdaf&entry.717812639=adfasdfsdaf&entry.1923315949=-&entry.279312377=3&entry.730232560=-&entry.1678688082=-&entry.2108934126=-&entry.398598474=-&entry.1497922860=-&entry.1903088331=-&entry.1587717203=-&entry.426705871=-&entry.2125615904=-&entry.1760135185=-&entry.1778560632=-&entry.1363551203=-&entry.688267512=-&entry.175069340=-&entry.441977493=-&entry.1899444650=adfasdfsdaf&entry.1761295364=adfasdfsdaf&entry.1672473860=adfasdfsdaf&submit=Submit`;

  await fetch(prefilledLink)

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

  