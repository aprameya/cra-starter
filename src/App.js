import { useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import { Home } from "./Home";
import { Login } from "./Login";
import "./styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

// export default function App() {
function App() {
		const { user } = useAuthenticator();

  if (user) {
    return <Home />;
  }

  return <Login />;
}

export default withAuthenticator(App);
