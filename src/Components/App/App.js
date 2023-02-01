import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import BannerImg from "../BannerImg/BannerImg";
import CarouselMenu from "../Carousel/Carousel";
import { Container } from "../Container/container";
import { Details } from "../Details/details";
import { Subtitle } from "../Subtitle/subtitle";
import { ResultList } from "../resultList/resultList";
import { FlexContainer } from "../FlexContainer/flexContainer";
import { fetchAPI } from "../FetchData/fetchData";
import vehicles from "../../img/vehicles2.png";
import people from "../../img/person2.png";
import films from "../../img/movies2.png";
import planet from "../../img/planet2.png";
import species from "../../img/species2.png";
import starships from "../../img/starship2.png";
// async function fetchAPI(url) {
//   let result = await fetch(url);
//   // console.log(result);
//   return await result.json();
// }
// console.log(fetchAPI("https://swapi.dev/api/people/"));

function App() {
const peopleRef = useRef(null);
const planetsRef = useRef(null);
const filmsRef = useRef(null);
const speciesRef = useRef(null);
const vehiclesRef = useRef(null);
const starshipsRef = useRef(null);

const categories = [
  { name: "People", img: people, url: "https://swapi.dev/api/people/", ref:peopleRef },
  { name: "Planets", img: planet, url: "https://swapi.dev/api/planets/", ref:planetsRef },
  { name: "Films", img: films, url: "https://swapi.dev/api/films/", ref:filmsRef },
  { name: "Species", img: species, url: "https://swapi.dev/api/species/", ref:speciesRef },
  { name: "Vehicles", img: vehicles, url: "https://swapi.dev/api/vehicles/", ref:vehiclesRef },
  {
    name: "Starships",
    img: starships,
    url: "https://swapi.dev/api/starships/", ref:starshipsRef
  },
];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [chosenCategory, setCategory] = useState(categories[currentSlide].name);
  const [categoryUrl, setUrl] = useState(categories[currentSlide].url);
  const [currentImage, setImage] = useState(categories[currentSlide].img);
  const [categoryResultList, setResultList] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [currentRef, setRef] = useState(categories[currentSlide].ref);
  const [details, setDetails] = useState();

  function onCategorySlide(value) {
    let nextSlideValue = currentSlide;

    if (value === "next") {
      nextSlideValue++;
      if (nextSlideValue > 5) nextSlideValue = 0;
    }
    if (value === "prev") {
      nextSlideValue--;
      if (nextSlideValue < 0) nextSlideValue = categories.length - 1;
    }
    setCurrentSlide(nextSlideValue);
    setUrl(categories[nextSlideValue].url);
    setImage(categories[nextSlideValue].img);
    setCategory(categories[nextSlideValue].name);
    setRef(categories[nextSlideValue].ref);
    setDetails();
  }

  function onChangePage(e) {
    let el = e.target;
    if (el.dataset.value === "next") setPageNumber(pageNumber + 1);
    if (el.dataset.value === "prev") setPageNumber(pageNumber - 1);

    setUrl(el.dataset.url);
  }

  function onShowDetails(details) {
    setDetails(details);
  }

  useEffect(() => {
    fetchAPI(categoryUrl, setResultList).catch(console.error);
  }, [categoryUrl]);

  // useEffect(() => {
  //   fetchAPI(detailsUrl, setDetails).catch(console.error);
  // }, [detailsUrl]);

  return (
    <div>
      <BannerImg />
      <CarouselMenu
        categories={categories}
        name={chosenCategory}
        img={currentImage}
        currentRef={currentRef}
        onCategorySlideBtn={onCategorySlide}
      />
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
