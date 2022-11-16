import React from 'react';
import Common from '../common';
const data = {
  title: "Work experience",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBfyFU2TprxZq64RTFrb_HuUGlXhFFpl3A0udWP7uwkcZYmqJd4QXcpOv2PYnRuW_LV2o&usqp=CAU",
  title2: "Globits Company, Front-end internship",
  date: "6-2022 - 8-2022",
  list: [
    "Learn about reactjs,redux,mobx.",
    "Working with resfull Api ,axios.",
    "Practice CRUD.",
  ],
};
function Experience(props) {
    return <Common data={data}/>;
}

export default Experience;