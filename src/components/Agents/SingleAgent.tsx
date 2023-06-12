import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./singleagent.css";

const SingleAgent = () => {
  const [agent, setAgent] = useState<any>({});

  const { id } = useParams();

  const getAgentById = async () => {
    try {
      const res = await axios.get(`/agents/${id}`);
      console.log(res.data);
      setAgent(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAgentById();
  }, []);

  return (
    <div className="container">
      <header>
        <div className="avatar-holder">
          <img
            src={agent?.photoUrl}
            className="avatar"
            alt={agent?.firstName}
          />
        </div>
        <h2 className="agent-name">
          {agent?.firstName + " " + agent?.lastName}
        </h2>
      </header>
      <div className="body-modified">{agent?.aboutMe}</div>

      <footer>
        <div className="full-width-flex-box">
          <div className="one-third-flex-box">
            <span>{agent?.address}</span>
          </div>
          <div className="one-third-flex-box">
            <span>Areas of Practice: {agent?.practiceAreas}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SingleAgent;
