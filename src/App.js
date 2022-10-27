import { SplitScreen } from './components/SplitScreen';
import { RegularList } from './components/RegularList';
import { PersonListItem } from './components/PersonListItem';
import { DetailPersonListItem } from './components/DetailPersonListItem';
import { DetailProductListItem } from './components/DetailProductListItem';
import { ProductListItem } from './components/ProductListItem';
import { NumberedList } from './components/NumberedList';
import { Modal } from './components/Modal';

// lists and list items
const customers = [{
  name: 'John Doe',
  age: 54,
  hairColor: 'brown',
  hobbies: ['swimming', 'bicycling', 'video games'],
}, {
  name: 'Brenda Smith',
  age: 33,
  hairColor: 'black',
  hobbies: ['golf', 'mathematics'],
}, {
  name: 'Jane Garcia',
  age: 27,
  hairColor: 'blonde',
  hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
  name: 'Flat-Screen TV',
  price: '$300',
  description: 'Huge LCD screen, a great deal',
  rating: 4.5,
}, {
  name: 'Basketball',
  price: '$10',
  description: 'Just like the pros use',
  rating: 3.8,
}, {
  name: 'Running Shoes',
  price: '$120',
  description: 'State-of-the-art technology for optimum running',
  rating: 4.2,
}];

const LeftHandComponent = ({ name }) => {
  return <h1 style={{backgroundColor: 'pink'}}>{name}</h1>;
}

const RightHandComponent = ({ message }) => {
  return <p style={{backgroundColor: 'beige'}}>{message}</p>;
}

function App() {
  return (
    <>
      {/* 3. modal + style */}
      <Modal>
        <DetailProductListItem product={products[0]} />
      </Modal>
      {/* 2. Lists and list items */}
      <RegularList
        items={customers}
        resourceName="person"
        itemComponent={PersonListItem}
      />
      <NumberedList
        items={customers}
        resourceName="person"
        itemComponent={DetailPersonListItem}
      />
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={ProductListItem}
      />
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={DetailProductListItem}
      />
      {/* 1. use children */}
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
    </>
  );
}

export default App;
