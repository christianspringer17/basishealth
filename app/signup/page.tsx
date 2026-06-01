import { redirect } from "next/navigation";
import { WAITLIST_HREF } from "@/lib/cta";

/** Checkout via MyDose — no patient intake form on-site */
export default function SignupPage() {
  redirect(WAITLIST_HREF);
}
