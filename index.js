const productos = [
    {nombre: "aceite" , precio: 2700 },
    {nombre: "acondicionador" , precio: 3500},
    {nombre: "agua" , precio: 1500 },
    {nombre: "arroz" , precio: 2000},
    {nombre: "cerveza" , precio: 3500},
    {nombre: "dentifrico " , precio: 4500 },
    {nombre: "detergente" , precio: 3200},
    {nombre: "fideos" , precio: 1200},
    {nombre: "galletitas de agua" , precio: 1500},
    {nombre: "galletitas dulces" , precio: 2300},
    {nombre: "gaeosa" , precio: 3800},
    {nombre: "hamburguesas" , precio: 3000},
    {nombre: "harina" , precio: 2100},
    {nombre: "huevos" , precio: 2000},
    {nombre: "jabon" , precio: 2130},
    {nombre: "lavandina" , precio: 2000},
    {nombre: "leche" , precio: 2100},
    {nombre: "manteca" , precio:2140 },
    {nombre: "mayonesa" , precio:1800 },
    {nombre: "mermelada" , precio:3000 },
    {nombre: "pan rallado" , precio:1200 },
    {nombre: "sal" , precio:800 },
    {nombre: "salchichas" , precio:1800 },
    {nombre: "shampoo" , precio:3500 },
];
let carrito = []

let seleccion = prompt ("Hola, desea comprar algún producto? Si o No")

while(seleccion != "si" && seleccion != "no"){
    alert ("Por favor ingrese si o no")
    seleccion = prompt ("Hola, desea comprar algún prodcuto? Si o no?")
}

if (seleccion == "si"){
    alert("a continuación verá nuestro catalogos de prodcutos")
    let todoslosproductos = productos.map (
        (producto) => producto.nombre + " " + producto.precio + "$");
    alert (todoslosproductos.join (" - "))
}else if(seleccion == "no"){
    alert("Gracias por visitarnos, hasta pronto!  :)")
}

while (seleccion != "no"){
    let producto = prompt("Agregue a su carrito los productos que desea adquirir!")
    let precio = 0

    if (producto == "aceite"  || producto == "acondicionador"  || producto == "agua"  || producto == "arroz"  || producto == "cerveza"  || producto == "dentifrico"  || producto == "detergente"  || producto == "fideos"  || producto == "galletitas de agua"  || producto == "galletitas dulces"  || producto == "gaseosas"  || producto == "hamburguesas"  ||  producto == "harina"  || producto == "huevos"  || producto == "jabon"  || producto == "lavandina"  ||  producto == "leche"  || producto == "manteca"  ||   producto == "mayonesa"  || producto == "mermeladas"  ||  producto == "pan rallado"  || producto == "sal"  ||  producto == "salchichas"  || producto == "shampoo" ){
        switch(producto) {
            case "aceite" :
                precio = 2700;
                break;
            case "acondionador" :
                precio = 3500;
                break;
            case "agua" :
                precio = 1500;
                break;
            case "arroz" :
                precio = 2000;
             break;
             case "cerveza" :
                precio = 3500;
                break;
            case "dentrifico" :
                precio = 4500;
                break;
            case "detergente" :
                precio = 3200;
                break;
            case "fideos" :
                precio = 1200;
             break;
             case "galletitas de agua" :
                precio = 1500;
                break;
            case "galletitas dulces" :
                precio = 2300;
                break;
            case "gaseosa" :
                precio = 3800;
                break;
            case "hamburguesas" :
                precio = 3000;
             break;
             case "harina" :
                precio = 2100;
                break;
            case "huevos" :
                precio = 2000;
                break;
            case "jabon" :
                precio = 2130;
                break;
            case "lavandina" :
                precio = 2000;
             break;                                                            
             case "leche" :
                precio = 2100;
                break;
            case "manteca" :
                precio = 2140;
                break;
            case "mayonesa" :
                precio = 1800;
                break;
            case "mermelada" :
                precio = 3000;
             break;
             case "Pan rallado" :
                precio = 1200;
                break;
            case "sal" :
                precio = 800;
                break;
            case "salchichas" :
                precio = 1800;
                break;
            case "shampoo" :
                precio = 3500;
             break;      
             default:
            break;                                                                                                                                                                                                                                                                   
            }
        let unidades = parseInt(prompt("cuantas unidades llevará?"))

        carrito.push({producto, unidades, precio})
        console.log(carrito)
        } else {
            alert("no tenemos ese producto en stok")
        }

        seleccion = prompt("desea seguir comprando?")
        while (seleccion === "no"){
            alert("Gracias por la compra, hasta pronto!!! :) ")
            carrito.forEach((carritoFinal) => {
                console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
                total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
            })
        break;
        } 

} 
const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total}`)
    

          

    