import React from "react";
import { CardWrapper } from "./CardWrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
  return (
    <CardWrapper
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
      headerLabel="Opps! Somthing went wrong!"
      showSocial={false}
    >
      <div className="flex items-center justify-center">
        <ExclamationTriangleIcon className="w-8 h-8" />
      </div>
    </CardWrapper>
  );
};
