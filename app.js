class ProductManager{
    static id = 0
    products
    constructor(){
        this.products = []
    }
  addProducts(title, description, price, thumbnail, code, stock){
    const newProduct = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        id: ProductManager.id
    }

    const validateCode = this.products.find((product)=>product.code === newProduct.code)

    if(validateCode){
        console.log('El codigo ya esta en uso');
    }else{
        this.products.push(newProduct)
        ProductManager.id++
    }

  };
  
  

  getProducts(){
    return this.products
  }
  getById(id){
    return this.products.find((product)=> product.id === id)
  }
}

const manager = new ProductManager('KIOSKII')
const producto1 = manager.addProducts('Mayonesa','adereso',500,'pic',123,4)
const producto2 = manager.addProducts('Ketchup','adereso',600,'pic',1234,4)
console.log(manager.getById(0));
console.log(manager.getProducts());

