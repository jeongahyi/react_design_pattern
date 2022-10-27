export const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
console.log(resourceName);
console.info(ItemComponent);
return (
  <>
    {/* ...{ [resourceName]: item } -> person={item} */}
    {items.map((item, i) => (
      <>
      <h3>{i + 1}</h3>
      <ItemComponent key={i} {...{ [resourceName]: item }} />
      </>
    ))}
  </>
)
}