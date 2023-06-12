import { FC, useEffect, useState } from "react";
import "./App.css";

import Agents from "../Agents/Agents";
import Button from "../buttons/Button";
import Form from "../form/Form";
import FormInputs from "../form/input/FormInput";
import SingleAgent from "../Agents/SingleAgent";

const App: FC = () => {
  const [showForm, setSHowForm] = useState(false);

  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.toLocaleLowerCase());
  };

  return (
    <div className="app">
      {/* DISPLAY FORM BUTTON */}
      {!showForm && (
        <Button
          handleClick={() => setSHowForm(true)}
          btnText={"Join the Team"}
        />
      )}

      {/* SEARCH AGENTS INPUT */}
      {!showForm && (
        <div
          style={{
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FormInputs
            name="search"
            onChange={handleChange}
            label=""
            placeholder="Search by practice areas.."
          />
        </div>
      )}

      {/* LIST OF AGENTS */}
      {!showForm && <Agents query={query} />}

      {/* CREATE AGENT FORM */}
      {showForm && <Form setSHowForm={setSHowForm} />}
    </div>
  );
};

export default App;
