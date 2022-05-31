const items = [
  {name: "bread", price: 100},
  {name: "coffee", price: 200},
  {name: "soda", price: 150},
  {name: "cake", price: 280},
  {name: "colgate", price: 180},
]
  const filteredItems = items.filter((item) => {
  return item.price > 150
})
console.log(filteredItems)