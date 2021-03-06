import { Navbar, Intro,IntoShape,AnimatedShapes,Feature,FeatureShape,Service,ServiceShape,Price,
PriceShape,Contact, Footer
} from '../src/components';
import './app.scss';

function App() {
  return (
    <>
    <div className="container">
      <Navbar />
      <Intro />
      <IntoShape />
      <AnimatedShapes/>
      </div>
      <div className="container">
      <Feature/>
      <FeatureShape/>
      <AnimatedShapes/>
      </div>
      <div className="container">
        <Service/>
        <ServiceShape/>
      </div>
      <div className="container">
        <Price/>
        <PriceShape/>
      </div>
      <div className="container">
        <Contact/>
        <Footer/>
      </div>
      </>
  );
} 

export default App;
