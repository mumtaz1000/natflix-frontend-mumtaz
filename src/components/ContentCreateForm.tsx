import React, { useState } from 'react'
import iContent from "interfaces/iContent";

interface iProps {
    endpoint: string;
}
export default function ContentCreateForm({endpoint}: iProps) {

    //Local state
  const [data, setData] = useState(new Array<iContent>());
  const [newTitle, setNewTitle] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const[summary, setSummary] = useState("");
  const[logoUrl, setLogoUrl] = useState("");
  const[bannerUrl, setBannerUrl] = useState("");
  const[thumbnailUrl, setThumbnailUrl] = useState("");

  // Properties
  const METHOD = "POST";
  const HEADERS = {"Content-type":"application/json; charset=UTF-8"}

  // Methods
  function onSubmit(event: any) {
    event.preventDefault();
    fetch(endpoint,{
        method:METHOD,
        body: JSON.stringify({
            title: newTitle,
            category: category,
            type: type,
            summary: summary,
            logoUrl: logoUrl,
            bannerUrl: bannerUrl,
            thumbnailUrl: thumbnailUrl,
            completed: false,
        }),
        headers: HEADERS,
    })
      .then((response) => response.json())
      .then((data) => onSuccess(data))
      .catch((error) => onFailure(error));
}


function onSuccess(data: iContent[]) {
    console.log("Success");
  }

  function onFailure(error: string) {
    console.error("COULD NOT STORE DATA ");
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <h1>Create new content</h1>
      <input type="text" 
      placeholder='Title'
      value={newTitle}
      onChange={(event) => setNewTitle(event.target.value)}/>

    <input type="text" 
      placeholder='Category'
      value={category}
      onChange={(event) => setCategory(event.target.value)}/>

<input type="text" 
      placeholder='Type'
      value={type}
      onChange={(event) => setType(event.target.value)}/>

<input type="text" 
      placeholder='Summary'
      value={summary}
      onChange={(event) => setSummary(event.target.value)}/>

    <input type="text" 
      placeholder='logoUrl'
      value={logoUrl}
      onChange={(event) => setLogoUrl(event.target.value)}/>

<input type="text" 
      placeholder='bannerUrl'
      value={bannerUrl}
      onChange={(event) => setBannerUrl(event.target.value)}/>

<input type="text" 
      placeholder='thumbnailUrl'
      value={thumbnailUrl}
      onChange={(event) => setThumbnailUrl(event.target.value)}/>

      <button>Create new content</button>
      </form>
  )
}
