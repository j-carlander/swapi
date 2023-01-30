import "./App.css";
import React, { useState, useEffect } from "react";
import BannerImg from "../BannerImg/BannerImg";
import CarouselMenu from "../Carousel/Carousel";
import { Container } from "../Container/container";
import { Details } from "../Details/details";
import { Subtitle } from "../Subtitle/subtitle";
import { ResultList } from "../resultList/resultList";
import { FlexContainer } from "../FlexContainer/flexContainer";
import { fetchAPI } from "../FetchData/fetchData";
import vehicles from "../../img/vehicles.png";
import people from "../../img/person.png";
import films from "../../img/movies.png";
import planet from "../../img/planet.png";
import species from "../../img/spicies.png";
import starships from "../../img/starship.png";
// async function fetchAPI(url) {
//   let result = await fetch(url);
//   // console.log(result);
//   return await result.json();
// }
// console.log(fetchAPI("https://swapi.dev/api/people/"));

const categories = [
  { name: "People", img: people, url: "https://swapi.dev/api/people/" },
  { name: "Planets", img: planet, url: "https://swapi.dev/api/planets/" },
  { name: "Films", img: films, url: "https://swapi.dev/api/films/" },
  { name: "Species", img: species, url: "https://swapi.dev/api/species/" },
  { name: "Vehicles", img: vehicles, url: "https://swapi.dev/api/vehicles/" },
  {
    name: "Starships",
    img: starships,
    url: "https://swapi.dev/api/starships/",
  },
];

function App() {
  const [chosenCategory, setCategory] = useState(categories[0].name);
  const [categoryUrl, setUrl] = useState(categories[0].url);
  const [categoryResultList, setResultList] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [detailsUrl, setDetailsUrl] = useState(
    "https://swapi.dev/api/people/1"
  );
  const [details, setDetails] = useState();

  function onCategoryClick(e) {
    console.log(e.target.closest("[data-url]"));
    let el = e.target.closest("[data-url]");
    setUrl(el.dataset.url);
    setCategory(el.dataset.name);
    setPageNumber(1);
  }

  function onChangePage(e) {
    let el = e.target;
    if (el.dataset.value === "next") setPageNumber(pageNumber + 1);
    if (el.dataset.value === "prev") setPageNumber(pageNumber - 1);

    setUrl(el.dataset.url);
  }

  function onShowDetails(e) {
    setDetailsUrl(e.target.dataset.url);
  }

  useEffect(() => {
    fetchAPI(categoryUrl, setResultList).catch(console.error);
  }, [categoryUrl]);

  useEffect(() => {
    fetchAPI(detailsUrl, setDetails).catch(console.error);
  }, [detailsUrl]);

  return (
    <div>
      <BannerImg />
      <CarouselMenu categories={categories} onClick={onCategoryClick} />
      <FlexContainer>
        <Container>
          <Subtitle title={chosenCategory} />
          <ResultList
            result={categoryResultList}
            onChangePageBtn={onChangePage}
            onShowDetailsBtn={onShowDetails}
            pageNumber={pageNumber}
          />
        </Container>
        <Container>
          <Subtitle title="Details" />
          <Details category={chosenCategory} details={details} />
        </Container>
      </FlexContainer>
    </div>
  );
}

export default App;
