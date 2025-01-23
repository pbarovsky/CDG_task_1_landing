import sc from "./App.module.css";
import { Banner } from "./components/ui/organisms/Banner";
import { Form } from "./components/ui/organisms/Form";
import { Header } from "./components/ui/organisms/Header";
import { About } from "./components/ui/organisms/About";
import { Footer } from "./components/ui/organisms/Footer";

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
