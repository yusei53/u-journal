import getCurrentUser from "./actions/getCurrentUser";
import GoogleLoginForm from "./components/GoogleLoginForm";
import Header from "./components/Header";
import LogoutButton from "./components/LogoutButton";

const Home = async () => {
  const currentUser = await getCurrentUser();
  return currentUser ? (
    <>
      <Header />
      <LogoutButton />
    </>
  ) : (
    <>
      <Header />
      <GoogleLoginForm />
    </>
  );
};

export default Home;
