import { parseOnlyLetterAndSpace, parseLength } from "../services/input-parser";
import {
  checkAtLeastLength,
  checkEmailPattern,
  checkIsfilled,
  checkIsTrue
} from "../services/input-validator";

const registrationModel = [
  {
    name: "fist-name",
    label: "First name",
    type: "text",
    parseFun: parseOnlyLetterAndSpace,
    validators: [
      {
        id: "name-length",
        isValidFun: expression => checkAtLeastLength(expression, 3),
        alert: "Frist name is too short"
      }
    ]
  },
  {
    name: "name",
    label: "Name",
    type: "text",
    parseFun: parseOnlyLetterAndSpace,
    validators: [
      {
        id: "name-length",
        isValidFun: expression => checkAtLeastLength(expression, 3),
        alert: "Name is too short"
      }
    ]
  },
  {
    name: "mail",
    label: "Email",
    type: "text",
    validators: [
      {
        id: "mail-pattern",
        isValidFun: checkEmailPattern,
        alert: "Email is not valid"
      },
      {
        id: "email-required",
        isValidFun: checkIsfilled,
        alert: "Email is empty"
      }
    ]
  },
  {
    name: "profession",
    label: "Profession",
    type: "select",
    options: [
      { value: "", name: "None" },
      { value: "ingenier", name: "Ingenier" },
      { value: "senior", name: "Dev Senior" },
      { value: "architect", name: "Architect" }
    ],
    validators: [
      {
        id: "education-required",
        isValidFun: checkIsfilled,
        alert: "Profession is not selected"
      }
    ]
  },
  {
    name: "sex",
    label: "Sex",
    type: "radio",
    options: [
      { value: "male", name: "Male" },
      { value: "female", name: "Female" }
    ],
    validators: [
      {
        id: "sex-required",
        isValidFun: checkIsfilled,
        alert: "Sex is not selected"
      }
    ]
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    parseFun: expression => parseLength(expression, 2000),
    validators: [
      {
        id: "description-required",
        isValidFun: checkIsfilled,
        alert: "Description is empty"
      }
    ]
  },
  {
    name: "terms",
    label: "Agree to terms and conditions",
    type: "checkbox",
    validators: [
      {
        id: "terms-required",
        isValidFun: checkIsTrue,
        alert: "You must agree before submitting"
      }
    ]
  }
];

export default registrationModel;
