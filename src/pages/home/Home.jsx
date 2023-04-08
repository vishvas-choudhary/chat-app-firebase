import "./home.css";

import { Chat } from "../../components/chat/Chat";
import { Sidebar } from "../../components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}
