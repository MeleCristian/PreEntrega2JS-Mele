const Productos =[
   {
    producto:"Maceta",
    precio: 1000,
   },
   {
    producto:"FiguraDeAccion",
    precio: 5000,
   },
   {
    producto:"Taza",
    precio: 1000,
   },
   {
    producto:"Mate",
    precio: 1500,
   }
]

let carrito=[]

const mostrarProductos = document.querySelector('.productos');
Productos.forEach(produ => {

    mostrarProductos.innerHTML+= `<div class=" card"> 
    <div class= "titulo-producto"> ${produ.producto} </div>
    <div class="precio-producto">${produ.precio}</div>
    <button type="button" class="btn-comprar btn btn-primary" data-id="${produ.producto}">Comprar</button>`
})



mostrarProductos.addEventListener("click", e=>{
    if(e.target.classList.contains("btn-comprar"))
    {
        agregarAlCarrito(e.target.parentElement)
        const limpiarCarrito=document.querySelector(".carrito")
        const mostrarCarrito =document.querySelector(".carrito")
        limpiarCarrito.innerHTML=""
        var suma=0;
        carrito.forEach(produ=>{
            mostrarCarrito.innerHTML+=
            `<div class="row">
            <div class="col-5">${produ.producto}</div>
            <div class="col-5">${produ.precio}</div>
            <div class="invisible">${produ.id}</div>
            <button class="col-2 btn-eliminar btn btn-danger">eliminar</div>
            </div>
            `
            suma= suma+ Number(produ.precio)
            })
        
            document.querySelector(".totalPago").textContent=suma
    }
})


function agregarAlCarrito(element){
    
    
    if(carrito.length==0){
        const agregar ={
            producto: element.querySelector(".titulo-producto").textContent,
            precio: element.querySelector(".precio-producto").textContent,
            id:0,
        }
        carrito.push(agregar)
    }else{
        const lengthh=carrito.length-1
        const ultimoId=carrito[lengthh].id+1
        const agregar ={
            producto: element.querySelector(".titulo-producto").textContent,
            precio: element.querySelector(".precio-producto").textContent,
            id:ultimoId,
        }
        carrito.push(agregar)
    }
    
}


const eliminarProductos= document.querySelector(".carrito")
eliminarProductos.addEventListener("click", e=>{
    if(e.target.classList.contains("btn-eliminar"))
    {
        eliminarCarrito(e.target.parentElement)  
        const limpiarCarrito=document.querySelector(".carrito")
        const mostrarCarrito =document.querySelector(".carrito")
        limpiarCarrito.innerHTML=""
        var suma=0;
        carrito.forEach(produ=>{
            mostrarCarrito.innerHTML+=
            `<div class="row">
            <div class="col-5">${produ.producto}</div>
            <div class="col-5">${produ.precio}</div>
            <div class="invisible">${produ.id}</div>
            <button class="col-2 btn-eliminar btn btn-danger">eliminar</div>
            </div>
            `
            suma= suma+ Number(produ.precio)
            })
        
            document.querySelector(".totalPago").textContent=suma   
    }
})

function eliminarCarrito(element){
    const eliminar=element.querySelector(".invisible").textContent
    carrito.forEach((e,index)=>{
        if(e.id==eliminar)
        {
            
            carrito.splice(index,1)
        }
    })

}


const vaciarCarrito= document.querySelector(".limpiar")
vaciarCarrito.addEventListener("click", e=>{
    carrito=[];
    const mostrarCarrito=document.querySelector(".carrito")
    mostrarCarrito.innerHTML=""
    const totalPago= document.querySelector(".totalPago")
    totalPago.innerHTML="0"
})
