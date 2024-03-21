import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
     <div className="p-4 flex flex-col gap-5">
       <Link href='/form/pdpa'>
        <Button>PDPA</Button>
      </Link>
      <Link href='/form/form-hackathon'>
        <Button>Form-Hackathon</Button>
      </Link>
      <Link href='/form/form-exhibition'>
        <Button>Form-Exhibition</Button>
      </Link>
      <Link href='/form/choose-education-level'>
        <Button>Choose Education Level</Button>
      </Link>
      <Link href='/form/detail'>
        <Button>Detail</Button>
      </Link>
      <Link href='/form/team-and-members'>
        <Button>Team and Member</Button>
      </Link>
     </div>
  );
}
