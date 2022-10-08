import { SplitScreen } from './SplitScreen';


const LeftHandComponent = () => {
  return <h1 style={{backgroundColor: 'pink'}}>Left!</h1>;
}

const RightHandComponent = () => {
  return <p style={{backgroundColor: 'beige'}}>Right!</p>;
}

function App() {
  return (
    <SplitScreen
      // pass two components
      left={LeftHandComponent}
      right={RightHandComponent} />
  );
}

export default App;
