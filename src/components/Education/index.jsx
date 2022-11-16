import React from "react";
import Common from "../common";
import "./index.scss";
const data = {
  title: "Education",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE214OhgerEUyJpmwyE_q_fet4704OVoIO-FZDxKqhg-fYgRQXEHN8ZeBqSZVmT82cBeU&usqp=CAU",
  title2: "ThuyLoi University, Major: System Information.",
  date: "9-2019 - 6-2023",
};
function Education(props) {
  return (
    <div>
      <Common data={data} />
    </div>
  );
}

export default Education;
