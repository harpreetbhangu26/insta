"use client";

import { useSession, signIn, signOut } from "next-auth/react";
function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }

  return (
    <div>
      Not signed in ??
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
}

export default LoginButton;
