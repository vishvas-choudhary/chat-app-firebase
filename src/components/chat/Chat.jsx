import "./chat.css";

import Cam from "../../img/cam.png";
import Add from "../../img/add.png";
import More from "../../img/more.png";
import { Messages } from "../messages/Messages";
import { Input } from "../input/Input";
import { useContext } from "react";
import { ChatContext } from "../../ChatContext";

export function Chat() {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}
