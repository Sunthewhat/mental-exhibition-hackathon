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
    console.log("Matcha Moments")
    

    try {
      const formPrefilledLink = `
      https://docs.google.com/forms/d/e/1FAIpQLSeMpl2ckTRVDxp5FpYtsAPtNJnTZyEeuqGNHhdoSLk6GMmEBA/formResponse?entry.135497847=${honorificPrefix}&entry.756827464=${fullname}&entry.1512792564=${nickname}&entry.1429941899=${tel}&entry.1239316635=${email}&entry.1281071974=${date}&submit=Submit"`;
      try {
          await fetch(formPrefilledLink);
          console.log("Form (Matcha Moments) submitted to Google")
      } catch (error) {
          console.log("Error submitting form")
      }
      return NextResponse.json({ Message: "Complete", status: 201 });
    } catch (error) {
      return NextResponse.json({ Message: "Error", status: 404 });
    }

};
