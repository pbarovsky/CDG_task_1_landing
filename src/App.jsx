import sc from "./App.module.css";
import Banner from "./components/Banner";
import Form from "./components/Form/Form";
import Header from "./components/Header";
import About from "./components/About/About";
import Footer from "./components/Footer";

const App = () => (
  <div className={sc.content__wrapper}>
    <Header />
    <div className={sc.separator} />
    <Banner />
    <About />
    <div className={sc.form__background}>
      <Form />
    </div>
    <div className={sc.separator} />
    <Footer />
  </div>
);

export default App;
