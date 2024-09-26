"use client";
import { AppBar, Box, Link, Toolbar } from "@mui/material";
import MenuButton from "./MenuButton";
import { signIn, signOut } from "next-auth/react";
import { User } from "next-auth";

type HeaderProps = {
  currentUser: User | null;
};

const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#f0f7ff" }}>
      <Toolbar sx={{ display: "flex" }}>
        {currentUser ? (
          <>
            <Box marginLeft={{ md: 30 }} flexGrow={1}>
              <Link underline="none" color="#32383F" marginX={5} href="/">
                振り返り一覧
              </Link>
              <Link underline="none" color="#32383F" href="/" marginX={2}>
                カレンダー
              </Link>
            </Box>
            <MenuButton onClick={() => {}} title="振り返る" />
            <MenuButton title="ログアウト" onClick={() => signOut()} />
          </>
        ) : (
          <Box>
            <MenuButton title="ログイン" onClick={() => signIn()} />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
