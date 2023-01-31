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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [chosenCategory, setCategory] = useState(categories[currentSlide].name);
  const [categoryUrl, setUrl] = useState(categories[currentSlide].url);
  const [currentImage, setImage] = useState(categories[currentSlide].img);
  const [categoryResultList, setResultList] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  // const [detailsUrl, setDetailsUrl] = useState(
  //   "https://swapi.dev/api/people/1"
  // );
  const [details, setDetails] = useState();

  // function onCategoryClick(e) {
  //   console.log(e.target.closest("[data-url]"));
  //   let el = e.target.closest("[data-url]");
  //   setUrl(el.dataset.url);
  //   setCategory(el.dataset.name);
  //   setPageNumber(1);
  // }

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
        // onClick={onCategoryClick}
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
