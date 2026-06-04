"use client";

import Link from "next/link";
import { FormEvent, useId, useState } from "react";

export function AccountLoginForm() {
  const formId = useId();
  const emailId = `${formId}-email`;
  const passwordId = `${formId}-password`;

  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNotice("Patient portal sign-in is coming soon.");
  }

  function handleForgotClick() {
    setNotice("Password reset will be available when the patient portal launches.");
  }

  return (
    <div className="account-auth w-full max-w-[22rem]">
      <div className="account-auth__header">
        <h1 className="account-auth__title">Welcome back</h1>
        <p className="account-auth__subtitle">
          Enter your email and password to sign in to your patient portal.
        </p>
      </div>

      <form className="account-auth__form" onSubmit={handleSubmit} noValidate>
        <div className="account-auth__field-wrap">
          <label className="sr-only" htmlFor={emailId}>
            Email
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email"
            className="account-auth__field"
          />
        </div>

        <div className="account-auth__field-wrap account-auth__field-wrap--password">
          <label className="sr-only" htmlFor={passwordId}>
            Password
          </label>
          <input
            id={passwordId}
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="Password"
            className="account-auth__field account-auth__field--password"
          />
          <button
            type="button"
            className="account-auth__toggle"
            onClick={() => setShowPassword((v) => !v)}
            aria-pressed={showPassword}
            aria-controls={passwordId}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <Link
          href="/account"
          className="account-auth__forgot"
          onClick={(e) => {
            e.preventDefault();
            handleForgotClick();
          }}
        >
          Forgot your password?
        </Link>

        <div className="account-auth__actions">
          <button type="submit" className="account-auth__submit">
            Login
          </button>
        </div>

        {notice ? (
          <p className="account-auth__notice" role="status">
            {notice}
          </p>
        ) : null}
      </form>
    </div>
  );
}
