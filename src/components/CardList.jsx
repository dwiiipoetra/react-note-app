import React from "react";
import Card from "./Card";
const CardList = ({ datas, removeData }) => {
  console.log(datas);
  // const CardList = (props) => {bisa juga memakai cara ini
  let newDatas = [];
  let insideData = [];
  let count = 1;
  for (let i = 0; i < datas.length; i++) {
    insideData.push(datas[i]);
    if (count % 4 === 0) {
      newDatas.push(insideData);
      insideData = [];
      count = 1;
    } else if (i === datas.length - 1) {
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
                myDatas={datas}
                myRemoveData={removeData}
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
