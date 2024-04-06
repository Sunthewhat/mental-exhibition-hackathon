import { Storage } from "@google-cloud/storage";

import { NextResponse } from "next/server";
import { v4 } from "uuid";

export const POST = async (req: Request, _res: Response) => {
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
    // await writeFile(
    //   path.join(process.cwd(), "public/uploads/hackathon_pdf/" + uuid + ".pdf"),
    //   buffer
    // );

    //Upload File

    const serviceAccount = {
        "type": "service_account",
        "project_id": "awesome-gate-418214",
        "private_key_id": "84632efc0f937d97fd580dfd315f677c9c06d412",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQD4N15UXi888MdR\nVk/gJ09BpTx6Lw30b3HTOd30dFiKqsOjOzj3qwHkOX4IZ6FUpIkCyZ5hq6lPZJfP\n4Fl2kaTv+H6/mKCrPcUTvOuy90ti+A/20xz5BInoexGepBuhIl2UroZE1i4ihqQ4\n1BY0kkvz4glCx8Ot6MwDeaSauOtgEWRVLfF47Itk7i60YZlZw/Y1gUwWh+r8td4Q\nwDZkZC+9KlqNjWFINykClKm+uZcvqL4b+Fiafx7VbgBpGsk6doCT18jq5kqMR64X\nl9hY9XpC6MDdQCdlCf6fNLe379L+fiIyYgMwXWrbrbYYqTOJiTmr6OJI1OsLC11w\n5EZJkwWPAgMBAAECggEAAXDDfGEw4af9ZXccbuRA19RZ/dTeE4gTX11w8KU9ik3O\nutjHeNsmNKkyFmG7lEksKQxQff1IC0I9201QV5l6x+W88+cH2laObpHkcEfHyTg/\n/M0MLanIFHBPvDL0R21yoOqZCYyQp09OuVcJwJ5aEH1EU9M4Sym/CATMXsAp+txm\nt/o6FFllTrUDkclupJV7nCRE2hYV8GF5lOhF/3gWCfel8Tw//Phkm+LAgQsVnaK/\ncGwjfmL0T5VVi75ZLKxiL1XFm4ed/WsudlmuBReBFqNanTBsB7AD5T8RYpkTJfGc\nSALgS8Fv10QnCRGKMI4jf8SIvvtn261BB9NVNy55UQKBgQD81dCZxImyphgd9Wso\nuFDn4WMJHkVI7GNw24ff9wblvZIHB6hqJKA+hJUFndd4lwYmHlKoNaPyBvNiwyzp\nYg8kr5H+kgj5Jo2wXzRkdvqunHH/WVc5E4sJqjP3YKCqF4wD0NkmXX8Yq1Hiy69/\nq6YGirKjX80RiTgdf+uooHvHFwKBgQD7UsCyoh35NYh5NaaAU0kxlQqFl2B04Hpj\nhvx+/HPVEYfIuD873ubZQLp/seAa+GsgEMctAvS7XWntBVr4gsUDrnRFxNtlylnR\nnHi+E6kBZuUyrZ4R6ye8PbjBA8KnbmZpksnyKW28vNC9nOkmc/2jYAL4HMG7KZMN\n2r0hsHrASQKBgD7QeCTbuUITFcbLpDXXpPIXAt3PEXOOlx4AzH8OBj6pnE/2zRah\nxtYBZmygzFl/W924htyXhwWoSGtvBgdtf0mj/Od8LJKJy4XYAVI8ZQdggsnnzk21\n10Mtb/+zl/bqJrUD/A8WB29/kLaB2DYl1PenGb6RHIeQyco6b7fTNy09AoGBAJYn\nG8/eAdBphm78eczDdcB0zkOAbHWHxDeAZ4yq4b2T6q8mPUlU5FE6VfKC4GTctIwE\n2irvUC49IlMk1vQQlQqdCQTCF16aZc1REeZmMpwO0LLVfdIwz52stpxC1eJYmEFN\nHPBchh60JHaUr8t0kz4v17ZK4AglT6GAZW0iVkRZAoGBAIv98PVIV9hQZHd5LbWA\ns8WQXf8GLxYi6TdA6cw0irGhrsENAnEV+eWvsGFAsWKcc67lbrsJMd8gr2kMsH0F\ngh+NEBrCJJryCEQF/ozNgHO7+vzpyJ6K6dzJPuRZuQ/wQX7BWTIKLslkB+PSk7+n\nwa9c24BC0Gjv/+hZhkiSLt0h\n-----END PRIVATE KEY-----\n",
        "client_email": "mental-health-hackathon@awesome-gate-418214.iam.gserviceaccount.com",
        "client_id": "113132754625576896537",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/mental-health-hackathon%40awesome-gate-418214.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com" 
    }

    const storage = new Storage({
      projectId: 'awesome-gate-418214',
      credentials: {
        client_email: serviceAccount.client_email,
        private_key: serviceAccount.private_key.split(String.raw`\n`).join("\n"),
      },
    });

    const mental_bucket = storage.bucket("mental_health_hackathon");

    const pdfLink = teamName + "_" + ideaName + "_" + uuid + ".pdf";

    await mental_bucket.file(pdfLink).save(buffer);

    var prefilledLink = "";

    if (educationLevel == "university") {
      prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLScu8LO24DhzdTQ5GmRwSdE6slZW--IBl_PtWYnfzmjJdP49hg/formResponse?usp=pp_url&entry.366340186=%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B1%E0%B8%9A%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A1%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2&entry.1942455786=${teamName}&entry.1050700631=${teamMembers}&entry.1354654193=${members[0].fullname}&entry.302402170=${members[0].nickname}&entry.12963499=${members[0].university}&entry.70540467=${members[0].studentcode}&entry.1581605505=${members[0].tel}&entry.1840562896=${members[0].email}&entry.430373419=${members[1].fullname}&entry.602395810=${members[1].nickname}&entry.1502496436=${members[1].university}&entry.1331204658=${members[1].studentcode}&entry.831562516=${members[1].tel}&entry.753697664=${members[1].email}&entry.1958201112=${members[2].fullname}&entry.38006273=${members[2].nickname}&entry.1303890703=${members[2].university}&entry.1751344887=${members[2].studentcode}&entry.1695610248=${members[2].tel}&entry.630836712=${members[2].email}&entry.1678565771=${members[3].fullname}&entry.885507366=${members[3].nickname}&entry.2036993297=${members[3].university}&entry.935026579=${members[3].studentcode}&entry.930536639=${members[3].tel}&entry.486902545=${members[3].email}&entry.103399376=${members[4].fullname}&entry.28600277=${members[4].nickname}&entry.1471549863=${members[4].university}&entry.364303720=${members[4].studentcode}&entry.2085184311=${members[4].tel}&entry.629969188=${members[4].email}&entry.1509242684=${ideaName}&entry.483345436=${pdfLink}&entry.270267048=${slideLink}&submit=Submit"`;
    } else {
      prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLScu8LO24DhzdTQ5GmRwSdE6slZW--IBl_PtWYnfzmjJdP49hg/formResponse?usp=pp_url&entry.366340186=%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B1%E0%B8%9A%E0%B8%A1%E0%B8%B1%E0%B8%98%E0%B8%A2%E0%B8%A1%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%A2/%E0%B8%9B%E0%B8%A7%E0%B8%8A./%E0%B8%9B%E0%B8%A7%E0%B8%AA.&entry.1942455786=${teamName}&entry.1050700631=${teamMembers}&entry.1354654193=${members[0].fullname}&entry.302402170=${members[0].nickname}&entry.12963499=${members[0].university}&entry.70540467=${members[0].studentcode}&entry.1581605505=${members[0].tel}&entry.1840562896=${members[0].email}&entry.430373419=${members[1].fullname}&entry.602395810=${members[1].nickname}&entry.1502496436=${members[1].university}&entry.1331204658=${members[1].studentcode}&entry.831562516=${members[1].tel}&entry.753697664=${members[1].email}&entry.1958201112=${members[2].fullname}&entry.38006273=${members[2].nickname}&entry.1303890703=${members[2].university}&entry.1751344887=${members[2].studentcode}&entry.1695610248=${members[2].tel}&entry.630836712=${members[2].email}&entry.1678565771=${members[3].fullname}&entry.885507366=${members[3].nickname}&entry.2036993297=${members[3].university}&entry.935026579=${members[3].studentcode}&entry.930536639=${members[3].tel}&entry.486902545=${members[3].email}&entry.103399376=${members[4].fullname}&entry.28600277=${members[4].nickname}&entry.1471549863=${members[4].university}&entry.364303720=${members[4].studentcode}&entry.2085184311=${members[4].tel}&entry.629969188=${members[4].email}&entry.1509242684=${ideaName}&entry.483345436=${pdfLink}&entry.270267048=${slideLink}&submit=Submit"`;
    }

    await fetch(prefilledLink);

    return NextResponse.json({ Message: "Complete", status: 201 });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};

