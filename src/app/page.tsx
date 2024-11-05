"use client";
import Image from "next/image";
import LoginForm from "../components/auth/LoginForm";
import LogoutButton from "../components/auth/LogoutButton";
import { useSession } from "next-auth/react";
import { IconButton, Tooltip } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const Home = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  {
    return session ? (
      <>
        <div>
          <Image
            src={session.user?.image ?? ""}
            alt={session.user?.name ?? ""}
            width={40}
            height={40}
          />
        </div>
        <LogoutButton />
        <Tooltip
          title={"振り返りをする"}
          slotProps={{
            popper: {
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, -10],
                  },
                },
              ],
            },
          }}
        >
          <IconButton
            aria-label="振り返りをする"
            sx={{
              border: "1px solid #DCDFE3",
              borderRadius: 5,
            }}
            href="/post"
          >
            <AddOutlinedIcon />
          </IconButton>
        </Tooltip>
      </>
    ) : (
      <>
        <LoginForm />
      </>
    );
  }
};

export default Home;
