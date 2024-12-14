import { PCFooter } from "@/src/components/shared/footer/pc";
import { Container } from "@mui/material";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Container maxWidth="md" sx={{ my: 6 }}>
        {children}
      </Container>
      <PCFooter />
    </>
  );
}
