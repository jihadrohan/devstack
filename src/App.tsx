import { Suspense } from "react";
import Banner from "./Components/banner"
import Icon from "./Components/Icon";
import Nav from "./Components/nav"
import type { Type } from "./type/type";
import Footer from "./Components/Footer";

const iconsFetch = async() : Promise<Type[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}
const iconsPromise = iconsFetch();

function App() {
  return (
    <>
      <Nav ></Nav>
      <Banner></Banner>
      <Suspense fallback = {<h2>Loading...</h2>}>
        <Icon iconsPromise = {iconsPromise}></Icon>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
