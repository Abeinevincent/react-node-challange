import type { FC } from "react";
import { useState, useEffect } from "react";
import Agent from "./Agent";
import { IAgent } from "../../types/Agent";
import axios from "axios";
import "./Agents.css";

const Agents = ({
  query
}: {
  query: string;
 
}) => {
  const [agents, setAgents] = useState<IAgent[]>([]);

  useEffect(() => {
    async function fetchInitialData() {
      const response = await axios.get("/agents");
      setAgents(response.data);
    }
    fetchInitialData();
  }, []);

  return (
    <div className="agents">
      {agents
        ?.filter((agent: any) =>
          agent?.practiceAreas.toLowerCase().includes(query)
        )
        .map((agent) => (
          <Agent
           
            key={agent.id}
            agent={agent}
           
          />
        ))}
    </div>
  );
};

export default Agents;
