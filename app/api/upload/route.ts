import path from "path";
import fs, { appendFile, writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import { v4 } from "uuid";

export const POST = async (req: Request, res: Response) => {
  const formData = await req.formData();

  const file = formData.get("pdf") as File;

  const educationLevel = formData.get("educationLevel") as string;
  const teamName = formData.get("teamName") as string;
  const teamMembers = formData.get("teamMembers") as string;
  const ideaName = formData.get("ideaName") as string;
  const slideLink = formData.get("slideLink") as string;
  const membersJSONString = formData.get("members");
  const members = JSON.parse(membersJSONString as string);

  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  try {
    var uuid = v4();
    await writeFile(
      path.join(process.cwd(), "public/hackathon_pdf/" + uuid + ".pdf"),
      buffer
    );

    const pdfLink = "/hackathon_pdf/"+uuid+".pdf";

    var prefilledLink = "";
    
    if (educationLevel == 'university') {
      prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLScu8LO24DhzdTQ5GmRwSdE6slZW--IBl_PtWYnfzmjJdP49hg/formResponse?usp=pp_url&entry.366340186=%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B1%E0%B8%9A%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A1%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2&entry.1942455786=${teamName}&entry.1050700631=${teamMembers}&entry.1354654193=${members[0].fullname}&entry.302402170=${members[0].nickname}&entry.12963499=${members[0].university}&entry.70540467=${members[0].studentcode}&entry.1581605505=${members[0].tel}&entry.1840562896=${members[0].email}&entry.430373419=${members[1].fullname}&entry.602395810=${members[1].nickname}&entry.1502496436=${members[1].university}&entry.1331204658=${members[1].studentcode}&entry.831562516=${members[1].tel}&entry.753697664=${members[1].email}&entry.1958201112=${members[2].fullname}&entry.38006273=${members[2].nickname}&entry.1303890703=${members[2].university}&entry.1751344887=${members[2].studentcode}&entry.1695610248=${members[2].tel}&entry.630836712=${members[2].email}&entry.1678565771=${members[3].fullname}&entry.885507366=${members[3].nickname}&entry.2036993297=${members[3].university}&entry.935026579=${members[3].studentcode}&entry.930536639=${members[3].tel}&entry.486902545=${members[3].email}&entry.103399376=${members[4].fullname}&entry.28600277=${members[4].nickname}&entry.1471549863=${members[4].university}&entry.364303720=${members[4].studentcode}&entry.2085184311=${members[4].tel}&entry.629969188=${members[4].email}&entry.1509242684=${ideaName}&entry.483345436=${pdfLink}&entry.270267048=${slideLink}&submit=Submit"`
    }else {
      prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLScu8LO24DhzdTQ5GmRwSdE6slZW--IBl_PtWYnfzmjJdP49hg/formResponse?usp=pp_url&entry.366340186=%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B1%E0%B8%9A%E0%B8%A1%E0%B8%B1%E0%B8%98%E0%B8%A2%E0%B8%A1%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%A2/%E0%B8%9B%E0%B8%A7%E0%B8%8A./%E0%B8%9B%E0%B8%A7%E0%B8%AA.&entry.1942455786=${teamName}&entry.1050700631=${teamMembers}&entry.1354654193=${members[0].fullname}&entry.302402170=${members[0].nickname}&entry.12963499=${members[0].university}&entry.70540467=${members[0].studentcode}&entry.1581605505=${members[0].tel}&entry.1840562896=${members[0].email}&entry.430373419=${members[1].fullname}&entry.602395810=${members[1].nickname}&entry.1502496436=${members[1].university}&entry.1331204658=${members[1].studentcode}&entry.831562516=${members[1].tel}&entry.753697664=${members[1].email}&entry.1958201112=${members[2].fullname}&entry.38006273=${members[2].nickname}&entry.1303890703=${members[2].university}&entry.1751344887=${members[2].studentcode}&entry.1695610248=${members[2].tel}&entry.630836712=${members[2].email}&entry.1678565771=${members[3].fullname}&entry.885507366=${members[3].nickname}&entry.2036993297=${members[3].university}&entry.935026579=${members[3].studentcode}&entry.930536639=${members[3].tel}&entry.486902545=${members[3].email}&entry.103399376=${members[4].fullname}&entry.28600277=${members[4].nickname}&entry.1471549863=${members[4].university}&entry.364303720=${members[4].studentcode}&entry.2085184311=${members[4].tel}&entry.629969188=${members[4].email}&entry.1509242684=${ideaName}&entry.483345436=${pdfLink}&entry.270267048=${slideLink}&submit=Submit"`
    }

    await fetch(prefilledLink);

    return NextResponse.json({ Message: "Complete", status: 201 });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};
