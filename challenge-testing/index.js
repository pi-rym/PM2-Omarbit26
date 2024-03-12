class CarritoCompra {

    constructor(){
        this.carrito = []
        
    }

    agregarProducto(producto){
        this.carrito.push(producto);
    }

    calcularTotal(){
        this.precioTotal = this.carrito.reduce((precioTotal, producto)=> {
            if(isNaN(precioTotal+producto.precio)){return undefined}
            else{return precioTotal+producto.precio}
        }, 0 )
        return this.precioTotal;
    }

    aplicarDescuento(porcentaje){
        this.calcularTotal();
        if(this.precioTotal>=30){this.precioTotal = this.calcularTotal()*(1-porcentaje/100);}
        return  this.precioTotal
    }
}   


module.exports={
    CarritoCompra
};