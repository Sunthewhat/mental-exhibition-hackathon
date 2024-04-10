import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  const formData = await req.formData();
  if (!formData) {
    return NextResponse.json(
      { error: "Form error, Something went wrong." },
      { status: 400 }
    );
  }
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const studentId = formData.get("studentId");
    const phone = formData.get("tel");
    const faculty = formData.get("faculty");
    const department = formData.get("department");
    const branch = formData.get("branch");
    const exhibitLink = formData.get("exhibitLink");
    const explain = formData.get("explain");
    const technical = formData.get("technical");
    const art_name = formData.get("art_name");
    console.log(firstName, lastName, email, studentId, phone, faculty, department, branch, exhibitLink, explain, technical)
    

  try {
    const formExhibitionPrefilledLink = 
    `https://docs.google.com/forms/d/e/1FAIpQLSe6mqLIBv4MIIqGvX0j0amwTxG4h_hg1aLLjBXlmS9LNPgG0w/formResponse?usp=pp_url&entry.1771345572=${firstName}&entry.35827299=${lastName}&entry.803557986=${studentId}&entry.1578367867=${faculty}&entry.419704599=${department}&entry.2096572232=${branch}&entry.350807439=${phone}&entry.1836947651=${email}&entry.515840015=${art_name}&entry.1465306126=${explain}&entry.1961102311=${technical}&entry.833656862=${exhibitLink}&submit=Submit`;
    try {
        await fetch(formExhibitionPrefilledLink);
        console.log("Form submitted to Google")
    } catch (error) {
        console.log("Error submitting form")
    }
    return NextResponse.json({ Message: "Complete", status: 201 });
  } catch (error) {
    return NextResponse.json({ Message: "Error", status: 404 });
  }

};

// https://docs.google.com/forms/d/e/1FAIpQLSe6mqLIBv4MIIqGvX0j0amwTxG4h_hg1aLLjBXlmS9LNPgG0w/viewform?entry.1771345572=%7Bname%7D&entry.35827299=%7Blastname%7D&entry.803557986=%7Bstudent_number%7D&entry.1578367867=%7Bmajor%7D&entry.419704599=%7Bdepartment%7D&entry.2096572232=%7Bbranch%7D&entry.350807439=%7Bphone%7D&entry.1836947651=%7Bmail%7D&entry.1465306126=%7Bexplain%7D&entry.1961102311=%7Btech%7D&entry.833656862=%7Bart_link%7D