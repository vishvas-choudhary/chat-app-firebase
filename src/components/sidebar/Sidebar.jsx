import "../../pages/home/home.css";

import { Navbar } from "../navbar/Navbar";
import { Search } from "../search/Search";
import { Chats } from "../chats/Chats";

export function Sidebar() {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
}
