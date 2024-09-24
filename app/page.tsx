import getCurrentUser from "./actions/getCurrentUser";
import GoogleLoginForm from "./components/GoogleLoginForm";
import GoogleLogoutButton from "./components/GoogleLogoutButton";

const Home = async () => {
  const currentUser = await getCurrentUser();
  return currentUser ? (
    <>
      <GoogleLogoutButton />
    </>
  ) : (
    <>
      <GoogleLoginForm />
    </>
  );
};

export default Home;
