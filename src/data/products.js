const products = [
  {
    id: 1,
    name: "Samsung s24Ultra",
    description: "AI Phone Plus",
    stock: 5,
    image: "/image/s24-ultra.png",
    price: 3000000,
    category: "samsung"
  },
  {
    id: 2,
    name: "Samsung s25Ultra",
    description: "Smartphone Premium +",
    stock: 2,
    image: "/image/s25-ultra.png",
    price: 3900000,
    category: "samsung"
  },
  {
    id: 3,
    name: "iphone 15Pro Max",
    description: "5x Telephoto Pro",
    stock: 6,
    image: "/image/iphone15-pro.png",
    price: 3200000,
    category: "iphone"
  },
  {
    id: 4,
    name: "Iphone 16Pro Max",
    description: "Flagship Premium Max",
    stock: 16,
    image: "/image/iphone16-pro.png",
    price: 4000000,
    category: "iphone"
  },
  {
    id: 5,
    name: "Cargador Apple",
    description: "20W Fast Charge +",
    stock: 7,
    image: "/image/cargador-apple.png",
    price: 500000,
    category: "perifericos"
  },
  {
    id: 6,
    name: "Auriculares Samsung",
    description: "ANC Sound Plus",
    stock: 8,
    image: "/image/auricular-samsung.png",
    price: 700000,
    category: "perifericos"
  }
]

const getProducts = () => {
  return new Promise( (resolve) => {

    setTimeout(()=> {
      resolve(products)
    }, 3000)

  })
}

export default getProducts;