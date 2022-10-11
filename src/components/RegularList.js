// 2. Reusable list component
export const RegularList = ({
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
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </>
  )
}