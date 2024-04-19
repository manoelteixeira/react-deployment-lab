// src/App.jsx
import Header from "./Components/header/Header";
import Splash from "./Components/splash/Splash";
import Footer from "./Components/Footer/Footer";
import Article from "./Components/article/Article";
import "./App.scss";
import articleData from "./data";

function App() {
  return (
    <>
      <Header />
      <Splash />
      <main>
        {articleData.map((item, idx) => {
          return <Article key={idx} article={item} />;
        })}
      </main>
      <Footer />
    </>
  );
}

export default App;
