import { redirect } from "next/navigation";
import { WAITLIST_HREF } from "@/lib/cta";

export default function AccountPage() {
  redirect(WAITLIST_HREF);
}
