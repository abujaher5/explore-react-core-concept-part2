import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);

  const handleAdd = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };
  const handleRemove = () => {
    // const newTeam = team - 1; another way down
    setTeam(team - 1);
  };

  const teamStyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };
  return (
    <div style={teamStyle}>
      <h3>Players : {team} </h3>
      <button onClick={handleAdd} style={{ backgroundColor: "purple" }}>
        Add Player
      </button>
      <button onClick={handleRemove} style={{ backgroundColor: "yellow" }}>
        Remove Player
      </button>
    </div>
  );
}
