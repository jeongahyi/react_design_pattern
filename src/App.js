import { SplitScreen } from './components/SplitScreen';


const LeftHandComponent = ({ name }) => {
  return <h1 style={{backgroundColor: 'pink'}}>{name}</h1>;
}

const RightHandComponent = ({ message }) => {
  return <p style={{backgroundColor: 'beige'}}>{message}</p>;
}

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}
      // v1 pass components as props
      // left={LeftHandComponent}
      // right={RightHandComponent}
    >
      {/* v2 developer friendly : being able to pass in components as childeren to a layout
       instead of having to pass them in as props  */}
      <LeftHandComponent name="Jordy" />
      <RightHandComponent message="yo" />
    </SplitScreen>
  );
}

export default App;
