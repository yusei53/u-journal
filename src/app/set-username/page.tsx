"use client";

import SetUserNamePage from "@/src/components/pages/SetUsernamePage";
import { useUsername } from "@/src/hooks/username/useUsername";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

const Page = () => {
  return (
    <>
      <SetUserNamePage />
    </>
  );
};

export default Page;
