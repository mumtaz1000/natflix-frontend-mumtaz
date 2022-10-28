// Node modules
import { useEffect, useState } from "react";

// Project files
import NavigationBar from "components/NavigationBar";
import iContent from "interfaces/iContent";

export default function ContentDelete() {
  // Local state
  const [data, setData] = useState(new Array<iContent>());
  const [id, setId] = useState("");
  // Properties
  const END_POINT = "http://localhost:8080/api/content";
  // Methods

  function onSubmit(event: any) {
    event.preventDefault();
    console.log(END_POINT+"/"+id);
    fetch(END_POINT+"/"+id,{
        method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => onSuccess(data))
      .catch((error) => onFailure(error));
}


function onSuccess(data: iContent[]) {
    console.log("Successfully deleted data");
  }

  function onFailure(error: string) {
    console.error("COULD NOT Delete DATA ");
  }

  return (
    <div id="create-content">
      <NavigationBar />
      <form onSubmit={(event) => onSubmit(event)}>
      <h1>Enter the id to delete the content</h1>
      <input type="text" 
      placeholder='id'
      value={id}
      onChange={(event) => setId(event.target.value)}/>
      <button>Delete</button>
      </form>
    </div>
  );
}
