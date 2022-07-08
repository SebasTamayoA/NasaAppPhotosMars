import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Photos from "./components/Photos";
import Pagination from "./components/Pagination";
import PageNumber from "./components/PageNumber";


function App() {
const initialUrl =
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=fHoGoebRcBijOhUu4FDdJQHfu3deIJp8anGwYPPJ";

// mostrar cada pagina de fotos
const [url, setUrl] = useState(initialUrl);
// mostrar las fotos
const [photos, setPhotos] = useState([]);
// mostrar la pagina actual
const [page, setPage] = useState(1);
// mostrar el total de paginas
const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPhotos(data.photos);
        setTotalPages(data.photos.length);
      }
      );
  }
  , [url]);

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
      setUrl(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page - 1}&api_key=fHoGoebRcBijOhUu4FDdJQHfu3deIJp8anGwYPPJ`);
    }
  }

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
      setUrl(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page + 1}&api_key=fHoGoebRcBijOhUu4FDdJQHfu3deIJp8anGwYPPJ`);
    }
  }

  return (
    <>
    <Navbar brand="Mars Photos" />
    <br/>
    <div className="container">      
      <Pagination onPrevious={handlePrevious} onNext={handleNext} />
      <PageNumber page={page} totalPages={totalPages} />
      <Photos photos={photos} />
      <Pagination onPrevious={handlePrevious} onNext={handleNext} />
    </div>
    </>
  );
}

export default App;
