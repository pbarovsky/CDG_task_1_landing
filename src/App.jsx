import sc from "./App.module.css";
import { Banner } from "./ui/organisms/Banner";
import { Form } from "./ui/organisms/Form";
import { Header } from "./ui/organisms/Header";
import { About } from "./ui/organisms/About";
import { Footer } from "./ui/organisms/Footer";

const App = () => (
  <div className={sc.content__wrapper}>
    <Header />
    <Banner id="/" />
    <About id="about" />
    <div className={sc.form__background} id="form">
      <Form />
    </div>
    <div className={sc.separator} />
    <Footer />
  </div>
);

export default App;
