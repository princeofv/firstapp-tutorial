import React from "react";

export default function SecondPage(props) {
  console.log("props.data", props.data);

  return (
    <div>
      <h1>Sucess Component</h1>
      <h2> UserName :{props.name}</h2>
      {/* <h3> Single data:{props.data[0].name}</h3> */}
      {props.data?.map((val, i) => (
        <>
          <h4>User Values from json Data:{val.name}</h4>
        </>
      ))}
    </div>
  );
}
