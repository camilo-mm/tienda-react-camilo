
const products = [
    {
      id: "cam01", 
      name: "camiseta 01",
      category: "camisetas",
      description: "camiseta para hombre",
      stock: 10,
      img: "../src/assets/img/product-001-a.jpg",
      categoryId: "1"
    },
    {
      id: "cam02", 
      name: "camiseta 02",
      category: "jeans",
      description: "camiseta para mujer",
      stock: 8,
      img: "../src/assets/img/product-002-a.jpg",
      categoryId: "2"
    },
    {
      id: "cam03", 
      name: "camiseta 03",
      category: "camisetas",
      description: "camiseta para niño",
      stock: 12,
      img: "../src/assets/img/product-003-a.jpg",
      categoryId: "3"
    },
]

export const gfetch = () => {
   return new Promise((res, rej) =>{
    const condition = true
    if (condition){
        setTimeout(()=>{
            res(products)
        }, 500)
    } else{
        rej("no se encontró")
    }
   })
}