import React from "react";

//import "uikit/dist/css/uikit.min.css";
import RegisterForm from "./components/register-form";

function Contact() {
  return (
    <div id="contactus">
      <section id="contact-section">
        <div className="app">
          <RegisterForm />
        </div>
      </section>
    </div>
  );
}

export { Contact };
