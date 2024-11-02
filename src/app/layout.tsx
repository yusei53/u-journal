import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextAuthProvider, ReactQueryProvider } from "../providers";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "u-journal ",
  description: "日々の振り返りを手助けする振り返りプラットフォーム",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <NextAuthProvider>
          <ReactQueryProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Container maxWidth="md" sx={{ my: 6 }}>
                {children}
              </Container>
            </ThemeProvider>
          </ReactQueryProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
