import MobileFooter from "@/src/components/shared/footer/MobileFooter";
import { Container } from "@mui/material";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Container maxWidth="md" sx={{ my: 6 }}>
        {children}
      </Container>
      <MobileFooter username="" />
    </>
  );
}
