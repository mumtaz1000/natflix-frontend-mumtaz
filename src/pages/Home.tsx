// Fake data (replace this with a real fetch)
//import fakeFetch from "scripts/fakeFetch";

// Node modules
import { useEffect, useState } from "react";

// Project files
import BannerHome from "components/HeroHome";
import ContainerCards from "components/ListCards";
import NavigationBar from "components/NavigationBar";
import StatusEmpty from "components/StatusEmpty";
import StatusError from "components/StatusError";
import StatusLoading from "components/StatusLoading";
import eStatus from "interfaces/eStatus";
import iContent from "interfaces/iContent";

export default function Home() {
  // Local state
  const [status, setStatus] = useState(eStatus.LOADING);
  const [data, setData] = useState(new Array<iContent>());

  // Properties
  const endPoint = "http://localhost:8080/api/content";
  const series = data.filter((item) => item.type_id === 1);
  const movies = data.filter((item) => item.type_id === 2);
  const documentaries = data.filter((item) => item.type_id === 3);

  // Methods
  useEffect(() => {
    fetch(endPoint)
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
    console.error(error);
    setStatus(eStatus.ERROR);
  }

  // Safeguards
  if (status === eStatus.LOADING) return <StatusLoading />;
  if (status === eStatus.ERROR) return <StatusError />;
  if (data.length === 0) return <StatusEmpty />;

  const Cards = data.map((item) => <ul><li key={item.id}>{item.title}</li></ul>);
  return (
    <div id="home">
      <NavigationBar />
      <BannerHome item={data[0]} />
      {Cards}
    </div>
  );
}
