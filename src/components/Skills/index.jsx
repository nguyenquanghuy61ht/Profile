import React from 'react';
import Common from '../common';
const data = {
  title: "Skills",
  list2: [
    {
      title3: "Front-end:",
      list3: [
        "HTML, CSS, SCSS, Javascript,ReactJs, Redux,Redux-toolkit,Axios API",
      ],
    },
    {
      title3: "Back-end:",
      list3: ["PHP , Node.js"],
    },
    {
      title3: "Database:",
      list3: ["SQL Server, MySQL,MongoDB."],
    },
    {
      title3: "Tools:",
      list3: ["Git"],
    },
  ],
};

function Skill(props) {
    return <Common data={data} />;
}

export default Skill;