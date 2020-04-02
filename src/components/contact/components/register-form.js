import React from "react";
import FormPanel from "./form-panel";
import registerFormModel from "../models/registration-model";

import "uikit/dist/css/uikit.min.css";
function RegisterForm() {
  const submitCallback = e =>
    alert(
      registerFormModel.map(m => m.label + ": " + m.value + ",\n").join("")
    );

  return (
    <div className="uk-container uk-container-small">
      <FormPanel
        title="Contact Form"
        btnName="Register"
        submitCallback={submitCallback}
        model={registerFormModel}
      />
    </div>
  );
}

export default RegisterForm;
