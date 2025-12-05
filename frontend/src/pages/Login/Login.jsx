import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./Login.scss";

export default function Login() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <>
      {isSignUp ? (
        <SignUp onSwitchToSignIn={() => setIsSignUp(false)} />
      ) : (
        <SignIn onSwitchToSignUp={() => setIsSignUp(true)} />
      )}
    </>
  );
}
