import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Background from "./assets/bg1.jpg";

const App = () => {
  return (
    <>
      <Header
        title="This is new Pokemon Card Game!"
        descr="Triple bible card game bla bla lba"
      />
      <Layout title="First layout" descr="Bingaboom" urlBg={Background} />
      <Layout
        title="Second layout"
        descr="Colored background"
        colorBg="#e2e2e2"
      />
      <Layout title="Third layout" descr="Badaboom" urlBg={Background} />

      <Footer />
    </>
  );
};

export default App;
