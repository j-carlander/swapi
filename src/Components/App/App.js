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
import { SearchField } from "../SearchField/SearchField";
import vehicles from "../../img/vehicles2.png";
import people from "../../img/person2.png";
import films from "../../img/movies2.png";
import planet from "../../img/planet2.png";
import species from "../../img/species2.png";
import starships from "../../img/starship2.png";

function App() {
  const peopleRef = useRef(null);
  const planetsRef = useRef(null);
  const filmsRef = useRef(null);
  const speciesRef = useRef(null);
  const vehiclesRef = useRef(null);
  const starshipsRef = useRef(null);

  const categories = [
    {
      name: "People",
      img: people,
      url: "https://swapi.dev/api/people/",
      ref: peopleRef,
    },
    {
      name: "Planets",
      img: planet,
      url: "https://swapi.dev/api/planets/",
      ref: planetsRef,
    },
    {
      name: "Films",
      img: films,
      url: "https://swapi.dev/api/films/",
      ref: filmsRef,
    },
    {
      name: "Species",
      img: species,
      url: "https://swapi.dev/api/species/",
      ref: speciesRef,
    },
    {
      name: "Vehicles",
      img: vehicles,
      url: "https://swapi.dev/api/vehicles/",
      ref: vehiclesRef,
    },
    {
      name: "Starships",
      img: starships,
      url: "https://swapi.dev/api/starships/",
      ref: starshipsRef,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [chosenCategory, setCategory] = useState(categories[currentIndex].name);
  const [categoryUrl, setUrl] = useState(categories[currentIndex].url);
  const [currentImage, setImage] = useState(categories[currentIndex].img);
  const [categoryResultList, setResultList] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [currentRef, setRef] = useState(categories[currentIndex].ref);
  const [details, setDetails] = useState();
  const [resetSearchField, setResetSearchField] = useState(true);

  function onCategoryChange(value) {
    let nextIndex = currentIndex;

    if (value === "next") {
      nextIndex++;
      if (nextIndex >= categories.length) nextIndex = 0;
    }
    if (value === "prev") {
      nextIndex--;
      if (nextIndex < 0) nextIndex = categories.length - 1;
    }
    if (value >= 0 && value < categories.length) {
      nextIndex = value;
    }

    setResultList();
    setCurrentIndex(nextIndex);
    setUrl(categories[nextIndex].url);
    setImage(categories[nextIndex].img);
    setCategory(categories[nextIndex].name);
    setRef(categories[nextIndex].ref);
    setDetails();
    setPageNumber(1);
    setResetSearchField(true);
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

  function onSearch(value) {
    setResetSearchField(false);
    let url = categoryUrl + "?search=" + value;
    setUrl(url);
  }
  function onResetSearch() {
    setResetSearchField(true);
    setUrl(categories[currentIndex].url);
  }

  useEffect(() => {
    fetchAPI(categoryUrl, setResultList).catch(console.error);
  }, [categoryUrl]);

  return (
    <div>
      <BannerImg />
      <CarouselMenu
        categories={categories}
        name={chosenCategory}
        img={currentImage}
        currentRef={currentRef}
        currentIndex={currentIndex}
        onCategoryChange={onCategoryChange}
        // onCategoryClickBtn={onCategoryChange}
      />

      <FlexContainer>
        <Container>
          <Subtitle title={chosenCategory} />
          <SearchField
            chosenCategory={chosenCategory}
            onSearch={onSearch}
            onResetSearch={onResetSearch}
            resetSearchField={resetSearchField}
          />
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
