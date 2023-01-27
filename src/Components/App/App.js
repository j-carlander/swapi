import './App.css';
import React from 'react';
import BannerImg from "../BannerImg/BannerImg";
import CarouselMenu from "../Carousel/Carousel";
import { Container } from "../Container/container";
import { Details } from "../Details/details";
import { Subtitle } from "../Subtitle/subtitle";
import { ResultList } from "../resultList/resultList";
import { FlexContainer } from "../FlexContainer/flexContainer";

async function fetchAPI(url) {
  let result = await fetch(url)
  // console.log(result);
  return await result.json();
}
console.log(fetchAPI("https://swapi.dev/api/people/"));

class App extends React.Component {
  render() {
    return (
      <div>
      <BannerImg />
      <CarouselMenu />
      <FlexContainer>
      <Container>
        <Subtitle title="Characters"/>
        <ResultList />
      </Container>
      <Container >
      <Subtitle title="Details" />
        <Details />
      </Container>
      </FlexContainer>
      </div>
    )
  }
}

export default App;
