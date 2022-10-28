// Node modules
import { useEffect, useState } from "react";

// Project files
import NavigationBar from "components/NavigationBar";
import StatusEmpty from "components/StatusEmpty";
import StatusError from "components/StatusError";
import StatusLoading from "components/StatusLoading";
import eStatus from "interfaces/eStatus";
import iContent from "interfaces/iContent";
import ContentUpdateForm from 'components/ContentUpdateForm';

export default function ContentUpdate() {
   // Local state
   const [data, setData] = useState(new Array<iContent>());
   const [status, setStatus] = useState(eStatus.LOADING);
   // Properties
   const END_POINT = "http://localhost:8080/api/content";
   // Methods
   useEffect(() => {
     fetch(END_POINT)
       .then((response) => response.json())
       .then((data) => onSuccess(data))
       .then(() => console.log("Hello!"))
       .catch((error) => onFailure(error));
   }, []);
 
   function onSuccess(data: iContent[]) {
     setData(data);
     setStatus(eStatus.READY);
   }
 
   function onFailure(error: string) {
     console.error("COULD NOT DATA ");
     setStatus(eStatus.ERROR);
   }
   // Safeguards
   if (status === eStatus.LOADING) return <StatusLoading />;
   if (status === eStatus.ERROR) return <StatusError />;
   if (data.length === 0) return <StatusEmpty />;
 
   return (
     <div id="create-content">
       <NavigationBar />
       
       <ContentUpdateForm endpoint={END_POINT} />
     </div>
   );
}
