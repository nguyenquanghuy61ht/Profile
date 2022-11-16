import React from "react";
import "./index.scss";
function Common({ data }) {
  return (
    <div className="box">
      <h3 className="title">{data?.title}</h3>
      {data.img && (
        <div className="box-title">
          {data.img && <img src={data.img} alt="icon" />}
          <p>
            <strong>{data?.title2}</strong>
          </p>
        </div>
      )}
      <span className="date">{data?.date}</span>
      <div className="text-content">
        {data.list?.map((elm, idx) => {
          return <p key={idx}>{elm}</p>;
        })}
      </div>
      <div className="detail">
        {data.list2?.map((elm, idx) => {
          return (
            <div key={idx}>
              {" "}
              <h4>{elm.title3}</h4>
              <div>
                {elm.list3?.map((elm) => {
                  return <p>{elm}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Common;
