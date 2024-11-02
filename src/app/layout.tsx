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
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="u-journal" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
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
