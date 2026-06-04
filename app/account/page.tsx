import { AccountLoginForm } from "@/components/account/AccountLoginForm";
import { AccountPageShell } from "@/components/account/AccountPageShell";

export const metadata = {
  title: "Account",
  description: "Sign in to your Basis patient portal.",
};

export default function AccountPage() {
  return (
    <AccountPageShell>
      <AccountLoginForm />
    </AccountPageShell>
  );
}
