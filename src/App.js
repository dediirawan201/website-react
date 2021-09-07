import { Navbar, Intro,IntoShape,AnimatedShapes,Feature,FeatureShape,Service,ServiceShape} from '../src/components';
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
      </>
  );
} 

export default App;
