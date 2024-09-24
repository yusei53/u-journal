"use client";
import { AppBar, Box, Link, Toolbar } from "@mui/material";
import MenuButton from "./MenuButton";
import { signIn, signOut } from "next-auth/react";
import { User } from "next-auth";

type HeaderProps = {
  currentUser: User | null;
};

const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  return currentUser ? (
    <AppBar position="static" sx={{ backgroundColor: "#f0f7ff" }}>
      <Toolbar sx={{ position: "relative" }}>
        <Box marginLeft={{ md: "10vw", xs: "0px" }}>
          <Link underline="none" color="#32383F" marginX={"30px"} href="/">
            振り返り一覧
          </Link>
          <Link
            underline="none"
            color="#32383F"
            href="/"
            marginX={"30px"}
            marginLeft={"15px"}
          >
            カレンダー
          </Link>
        </Box>
        <Box position={"absolute"} right={"20px"}>
          <MenuButton onClick={() => {}} title="振り返る" />
          <MenuButton title="ログアウト" onClick={() => signOut()} />
        </Box>
      </Toolbar>
    </AppBar>
  ) : (
    <AppBar position="static" sx={{ backgroundColor: "#f0f7ff" }}>
      <Toolbar>
        <Box marginLeft={{ md: "0vw", xs: "0" }}>
          <MenuButton title="ログイン" onClick={() => signIn()} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
