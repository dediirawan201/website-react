import { Navbar, Intro,IntoShape,AnimatedShapes } from '../src/components';
import './app.scss';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Intro />
      <IntoShape />
      <AnimatedShapes/>
      </div>
  );
} 

export default App;
