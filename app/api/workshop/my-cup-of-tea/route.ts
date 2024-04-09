import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  const formData = await req.formData();
  if (!formData) {
    return NextResponse.json(
      { error: "Form error, Something went wrong." },
      { status: 400 }
    );
  }
    const fullname = formData.get("fullname");
    const nickname = formData.get("nickname");
    const tel = formData.get("tel");
    const email = (formData.get("email") as string).toLowerCase();
    const date = formData.get("date");
    const honorificPrefix = formData.get("honorific-prefix");
    console.log(fullname, nickname, tel, email, date, honorificPrefix)
    

    try {
      const formPrefilledLink = `
      https://docs.google.com/forms/d/e/1FAIpQLSepeTynwhSBBcATIaQiKtMOl4WWN_NA3EOP8JinGhioJ2HOzg/formResponse?entry.366340186=${honorificPrefix}&entry.1366755232=${fullname}&entry.1208376864=${nickname}&entry.1654184147=${tel}&entry.2014963006=${email}&entry.149043736=${date}&submit=Submit"`;
      try {
          await fetch(formPrefilledLink);
          console.log("Form (Cup tea) submitted to Google")
      } catch (error) {
          console.log("Error submitting form")
      }
      return NextResponse.json({ Message: "Complete", status: 201 });
    } catch (error) {
      return NextResponse.json({ Message: "Error", status: 404 });
    }

};
