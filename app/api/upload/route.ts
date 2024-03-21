import { saveFile } from '@/lib/savePDF';

export async function POST(req: Request) {
    const data = await req.formData();
    const url = await saveFile(data.get('pdf') as File);
    return new Response(url , { status: 200 });
  }