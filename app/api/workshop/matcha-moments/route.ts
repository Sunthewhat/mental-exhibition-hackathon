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

  try {
    const formPrefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLScGF2yi0Q9sTRsrM3LedSYcGg4bbf-RaY584VSChH79hCFIVw/formResponse?usp=pp_url&entry.1024483988=${honorificPrefix}&entry.2039753881=${fullname}&entry.467966751=${nickname}&entry.1549112855=${tel}&entry.2037164155=${email}&entry.395983718=${date}&submit=Submit"`;
    try {
      await fetch(formPrefilledLink);
      console.log("Form (Matcha Moments) submitted to Google");
    } catch (error) {
      console.log("Error submitting form");
    }
    return NextResponse.json({ Message: "Complete", status: 201 });
  } catch (error) {
    return NextResponse.json({ Message: "Error", status: 404 });
  }
};
