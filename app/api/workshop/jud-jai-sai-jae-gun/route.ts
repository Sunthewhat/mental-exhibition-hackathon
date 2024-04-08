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
    console.log("Jud jai sai jae gun")
    

    try {
      const formPrefilledLink = `
      https://docs.google.com/forms/d/e/1FAIpQLSeOKr-R_iFup1i1MaiaFst627hvuo2p-MrClpM4QAHMvzxqcw/formResponse?entry.557529203=${honorificPrefix}&entry.903081128=${fullname}&entry.951481137=${nickname}&entry.1974091713=${tel}&entry.1249898435=${email}&entry.369189809=${date}&submit=Submit"`;
      try {
          await fetch(formPrefilledLink);
          console.log("Form (Jud Jai) submitted to Google")
      } catch (error) {
          console.log("Error submitting form")
      }
      return NextResponse.json({ Message: "Complete", status: 201 });
    } catch (error) {
      return NextResponse.json({ Message: "Error", status: 404 });
    }

};
