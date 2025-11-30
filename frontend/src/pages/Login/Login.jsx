import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";
import { toast } from "react-toastify";
import "./Login.scss";

export default function Login() {
  const { signInWithGoogle, signUpWithEmail, signInWithEmail, user } =
    useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      const errorMessage = "Google sign-in failed.";
      toast.error(errorMessage);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmail(email, password);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      const errorMessage = "Invalid credentials!";
      toast.error(errorMessage);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUpWithEmail(email, password);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      const errorMessage = "Sign up failed.";
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Sign in</h2>
        <form onSubmit={handleSignIn} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="login-actions">
            <button className="google" type="submit">
              Sign In
            </button>
            <button type="button" onClick={handleSignUp} className="google">
              Create account
            </button>
          </div>
        </form>

        <div className="divider">or</div>

        <button className="google" onClick={handleGoogle}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
