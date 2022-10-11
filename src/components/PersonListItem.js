export const PersonListItem = ({ person }) => {
  const { name, age } = person;
  console.log('personlistitem');
  return (
    <p>Name: {name}, Age: {age} years</p>
  );
}