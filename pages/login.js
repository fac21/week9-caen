import { useCookies } from "react-cookie";
import Layout from "../components/layout";

const Login = () => {
  const [cookie, setCookie] = useCookies(["user"]);

  const handleSignIn = async () => {
    try {
      const response = await yourLoginFunction(username); //handle API call to sign in here.
      const data = response.data;

      setCookie("user", JSON.stringify(data), {
        path: "/",
        maxAge: 3600, // Expires after 1hr
        sameSite: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Layout>
        <label htmlFor="username">
          <input type="text" placeholder="enter username" />
        </label>
      </Layout>
    </>
  );
};

export default Login;
