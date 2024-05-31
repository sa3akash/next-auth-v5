import { logout } from "@/actions/logout";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form action={logout}>
        <Button type="submit">Singout</Button>
      </form>
    </div>
  );
};

export default SettingsPage;
