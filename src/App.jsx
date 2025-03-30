import List from "./List";

function App() {
  const fruits = [
    { name: "banana", callories: 100 },
    { name: "apple", callories: 200 },
    { name: "orange", callories: 300 },
  ];
  const vegetables = [
    { name: "carrot", callories: 50 },
    { name: "broccoli", callories: 70 },
    { name: "spinach", callories: 30 },
  ];
  return (
    <>
      <List listtoget={fruits} />
    </>
  );
}

export default App;
