const {CarritoCompra} = require("../index");


describe("La clase Carrito Compra", () =>{

    beforeEach(()=>{
        micarrito = new CarritoCompra();
        micarrito2 = new CarritoCompra();
    })

    it("Deberia ser una clase",()=>{
        expect(typeof CarritoCompra.prototype.constructor).toBe('function')
    })

    it("Mi carrito deberia ser una instancia de la case CarritoCompra",()=>{
        expect(micarrito instanceof CarritoCompra).toBe(true)
    })

    it("Mi carrito2 deberia ser una instancia de la case CarritoCompra",()=>{
        expect(micarrito instanceof CarritoCompra).toBe(true)
    })


})

const mockGetProducto = jest.fn((precio)=>{
    return  {precio:precio,
            descripcion:{
                nombre:"detergente",
                marcar:"Ace",},
            } 
})


describe("La funcion agregarProducto", ()=>{
    beforeEach(()=>{
        micarrito = new CarritoCompra();
        mockNewProducto = mockGetProducto(30);
    })

    it("Deber ser un metodo de Carrito",()=>{
        expect(typeof micarrito.agregarProducto).toBe('function')
    })

    it("La funcion callback debería ejecutarse al menos una vez",()=>{
        const mockProducto1 = mockGetProducto();
        micarrito.agregarProducto(mockProducto1);
        expect(mockGetProducto).toHaveBeenCalled()
    })

    it("La funcion deberia agregar el producto",()=>{
        const l_inicial = micarrito.carrito.length
        micarrito.agregarProducto(mockNewProducto);
        expect(micarrito.carrito.length).toBeGreaterThan(l_inicial);
    })
})



describe("La funcion calcularTotal", ()=>{
    beforeEach(()=>{
        micarrito = new CarritoCompra();
        
    })

    it("Deber ser un metodo de Carrito",()=>{
        expect(typeof micarrito.calcularTotal).toBe('function')
    })

    it("La funcion debe retornar 50 cuando se agrega dos productos de 20 y 30",()=>{
        
        mockNewProducto = mockGetProducto(30);
        mockNewProducto2 = mockGetProducto(20);
        micarrito.agregarProducto(mockNewProducto);
        micarrito.agregarProducto(mockNewProducto2);

        console.log(micarrito.carrito[0])
        expect(micarrito.calcularTotal()).toBe(50);
    })

    it("La funcion debera retornar undefined si algun producto no tiene precio(undefined)",()=>{
        mockNewProducto = mockGetProducto(undefined);
        mockNewProducto2 = mockGetProducto(20);
        mockNewProducto3 = mockGetProducto(null);

        micarrito.agregarProducto(mockNewProducto);
        micarrito.agregarProducto(mockNewProducto2);
        micarrito.agregarProducto(mockNewProducto3);

        expect(micarrito.calcularTotal()).toBe(undefined);
    })

})


describe("La funcion aplicarDescuento", ()=>{

    beforeEach(()=>{
        micarrito = new CarritoCompra();
    })

    it("Deber ser un metodo de Carrito",()=>{
        expect(typeof micarrito.aplicarDescuento).toBe('function')
    })

    it("La funcion debe aplicar un descuento de 10% a un precio total 50",()=>{
        mockNewProducto = mockGetProducto(30);
        mockNewProducto2 = mockGetProducto(20);
        micarrito.agregarProducto(mockNewProducto);
        micarrito.agregarProducto(mockNewProducto2);
        expect(micarrito.aplicarDescuento(10)).toBe(45)
    })

    it("La funcion no debe aplicar a valores totales menores a 30",()=>{
        mockNewProducto = mockGetProducto(10);
        mockNewProducto2 = mockGetProducto(10);
        micarrito.agregarProducto(mockNewProducto);
        micarrito.agregarProducto(mockNewProducto2);
        expect(micarrito.aplicarDescuento(10)).toBe(20);

    })



})

