import { useState } from "react";

function RecentChats() {
  const [rahilName, updateRahil] = useState("Rahil");
  return (
    <div>
      <h2>Recent Chats</h2>
      <RecentChatTile name={rahilName} />
      <RecentChatTile name="Umang" />
      <button onClick={() => updateRahil("Patel")}>Click Here</button>
    </div>
  );
}

function RecentChatTile(props) {
  return (
    <div style={{ backgroundColor: "grey" }}>
      <h2>Hello {props.name}</h2>
    </div>
  );
}

export default RecentChats;
