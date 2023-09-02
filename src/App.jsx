import { BrowserRouter } from "react-router-dom";

import { About, Experience, Hero, Navbar, Tech, Works, StarsCanvas, MyStory, Contact } from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary' style={{background:"#2853a5"}}>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/*<Feedbacks />*/}
        <div className='relative z-0'>
          <MyStory />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
