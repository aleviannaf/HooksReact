import { useEffect, useState } from "react";

const UseEffectPage = () => {
  const [resourceType, setResourceType] = useState("post");

  const changeResourceType = (resourceType) => {
    setResourceType(resourceType);
  };

  useEffect(() => {

    const fetchResourceTypes = async () => {
      
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );
    
      const responseJSON = await response.json();
      console.log(responseJSON);
    };

    fetchResourceTypes();
  },[resourceType]);


  useEffect(()=>{
    //compenentDidMount
    console.log("componentDidMount");
    //compenentWillUnMount
    return()=>{
        console.log("componetWillUnmount")
    }
  })

  return (
    <div>
      <h2>{resourceType}</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={() => changeResourceType("posts")}>Posts</button>
        <button onClick={() => changeResourceType("comments")}>Comments</button>
        <button onClick={() => changeResourceType("todos")}>Todos</button>
      </div>
    </div>
  );
};

export default UseEffectPage;
