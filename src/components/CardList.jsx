import React from "react";
import Card from "./Card";

const CardList = (props) => {
  // const CardList = ({ datas }) => {
  // console.log(props.datas);
  let newDatas = [];
  let insideData = [];
  let count = 1;
  for (let i = 0; i < props.datas.length; i++) {
    insideData.push(props.datas[i]);
    if (count % 4 === 0) {
      newDatas.push(insideData);
      insideData = [];
      count = 1;
    } else if (i === props.datas.length - 1) {
      newDatas.push(insideData);
      insideData = [];
    } else {
      count++;
    }
  }
  return (
    <>
      {/* reconstruct array */}
      {newDatas.map((data, index) => {
        return (
          <div className="columns is-mobile" key={index}>
            {data.map((d, i) => (
              // <Card key={i} {...d} />
              <Card
                key={d.id}
                id={d.id}
                title={d.title}
                body={d.body}
                createdAt={d.createdAt}
                archived={d.archived}
                datass={props.datas}
              />
            ))}
          </div>
        );
      })}

      {/* with spread operator */}
      {/* {datas.map((data, i) => (
        <div className="columns is-mobile">
          <Card key={data.id} {...data} />
        </div>
      ))} */}
    </>
  );
};

export default CardList;
