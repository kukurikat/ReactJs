function List(listtoget) {
  listtoget.sort((a, b) => a.name.localeCompare(b.name));
  const list = listtoget.items;
  const finalList = list.map((item, index) => (
    <li key={index}>
      {item.name} calories: {item.callories}
    </li>
  ));
  return <ul>{finalList}</ul>;
}

export default List;
