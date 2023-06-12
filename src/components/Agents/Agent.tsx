import axios from "axios";
import type { FC } from "react";
import { IAgent } from "../../types/Agent";
import Button from "../buttons/Button";
import {useNavigate} from "react-router-dom"

import "./Agent.css";

const Agent = ({ agent }: { agent: IAgent }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/agents/${agent.id}`)
  };

  return (
    <div className="container">
      <header>
        <div className="avatar-holder">
          <img src={agent.photoUrl} className="avatar" alt={agent.firstName} />
        </div>
        <h2 className="agent-name">{agent.firstName + " " + agent.lastName}</h2>
      </header>
      <div className="body">{agent.aboutMe}</div>
      <div>
        <Button btnText="Read More" handleClick={handleClick} />
      </div>
      <footer>
        <div className="full-width-flex-box">
          <div className="one-third-flex-box">
            <span>{agent.address}</span>
          </div>
          <div className="one-third-flex-box">
            <span>Areas of Practice: {agent.practiceAreas}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Agent;
