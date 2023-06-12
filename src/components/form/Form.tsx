import axios from "axios";
import { useState } from "react";
import Button from "../buttons/Button";
import "./form.css";
import FormInputs from "./input/FormInput";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

type InputDetails = {
  [key: string]: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  agentLicence: string;
  address: string;
  practiceAreas: string;
  aboutMe: string;
};

const Form = ({
  setSHowForm,
}: {
  setSHowForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [values, setValues] = useState<InputDetails>({
    firstName: "",
    lastName: "",
    photoUrl: "",
    agentLicence: "",
    address: "",
    practiceAreas: "",
    aboutMe: "",
  });

  // Input attribute types
  type InputAttributes = {
    id: string;
    name: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    label: string;
  }[];

  // Input atrributes data and their respective ID'S
  // Replace with fields you intend to use in your application
  const inputs: InputAttributes = [
    {
      id: "1",
      name: "firstName",
      type: "text",
      placeholder: "Firstname",
      label: "Firstname",
      required: true,
    },
    {
      id: "2",
      name: "lastName",
      type: "text",
      placeholder: "Lastname",

      label: "Lastname",
      required: true,
    },
    {
      id: "3",
      name: "photoUrl",
      type: "text",
      placeholder: "Photo URL",
      label: "Photo URL",
      required: true,
    },
    {
      id: "4",
      name: "agentLicence",
      type: "text",
      placeholder: "Agent Licence",
      label: "Agent Licence",
      required: true,
    },
    {
      id: "5",
      name: "address",
      type: "text",
      placeholder: "Address",
      label: "Address",
      required: true,
    },
    {
      id: "6",
      name: "practiceAreas",
      type: "text",
      placeholder: "Practise Areas",
      label: "Practise Areas",
      required: true,
    },
    {
      id: "7",
      name: "aboutMe",
      type: "text",
      placeholder: "About",
      label: "About",
      required: true,
    },
  ];

  // Onsubmit
  // On the event type for this click handler
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Submit button clicked", e);
    console.log(values);
    // POST DATA TO THE BACKEND
    try {
      const res = await axios.post("/agents", values);
      console.log(res.data);
      setValues({
        firstName: "",
        lastName: "",
        photoUrl: "",
        agentLicence: "",
        address: "",
        practiceAreas: "",
        aboutMe: "",
      });
      toast.success("Success, agent has been added!");
      setTimeout(() => {
        setSHowForm(false);
      }, 4000);
    } catch (err) {
      console.log(err);
      toast.error("Sorry, something went wrong adding agent!");
    }
  };

  // onChange
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Input value has changed", e);
    setValues({ ...values, [e.target.name as any]: e.target.value });
    // console.log(values);
  };

  return (
    <div className="form-container">
      <form className="form-wrapper">
        <h3>Create New Agent</h3>
        {inputs.map((input) => (
          <FormInputs
            {...input}
            name={input.name}
            onChange={onChange}
            key={input.id}
            label={input.label}
            value={values[input.name]}
          />
        ))}
        <Button handleClick={handleSubmit} btnText="Submit" />
        <ToastContainer />
      </form>
    </div>
  );
};

export default Form;
