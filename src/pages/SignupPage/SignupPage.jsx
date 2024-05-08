import "./SignupPage.scss";
import { useState } from "react";

function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <main className="signup-page">
      <input onKeyUp={(e) => handleChange(e)} name="password" type="password" />
      <input onKeyUp={(e) => handleChange(e)} name="email" type="email" />
      <h1>Signup Page</h1>
    </main>
  );
}

export default SignupPage;
