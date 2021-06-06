var tableBodyList = [];
var id=0;
const ModalProductos = document.getElementById('ModalProductos');

async function firstLoad() {
    fetch('http://localhost:3000')
    .then(response => response.json())
    .then(jsondata => {
        tableBodyList = jsondata.prods;
        insertTable();
    })
}

async function insertTable(){
  var insideTBody = '';
  var cont = 1;

  var tBody = document.getElementById('tableBody');
        //console.log(jsondata.prods);
        tableBodyList.forEach(producto => {
          insideTBody += `<tr>`
            + `<td id="`+producto._id+`">` +cont+ `</td>` 
            + `<td>` +producto.nombre+ `</td>` 
            + `<td>` +producto.descripcion+ `</td>`
            + `<td>` +producto.categoria+ `</td>`
            + `<td>` +producto.subcategoria+ `</td>`
            + `<td>` +producto.stock+ `</td>` 
            + `<td>`
            +   `<a class="btnDelete btn btn-danger">Eliminar</a>`
            +   `<a class="btnEdit btn btn-info" type="button" data-toggle="modal" data-target="#ModalProductos">Editar</a>`
            + `</td>`
            + `</tr>`
            cont = cont + 1;
        })
        tBody.innerHTML = insideTBody
}
async function pinsert(){

  var pname = document.getElementById('pname').value;
  var pdesc = document.getElementById('pdesc').value;
  var pcat = document.getElementById('pcat').value;
  var psubcat = document.getElementById('psubcat').value;
  var pstock = document.getElementById('pstock').value;
  //console.log(pname,pdesc,pcat,psubcat,pstock);
  fetch('http://localhost:3000/add/', {
    method: 'POST',
    body: JSON.stringify({
      nombre: pname,
      descripcion: pdesc,
      categoria: pcat,
      subcategoria: psubcat,
      stock: pstock
    }),
    headers: {
      "Content-type": "application/json"
    }
  })
  .then(response => response.json())
  .then(jsondata => {
      tableBodyList.push(jsondata)
      insertTable();
  })
}

const on = (element, event, selector, handler) => {
  element.addEventListener(event, e =>{
    if(e.target.closest(selector)){
      handler(e)
    }
  })
}

on(document, 'click', '.btnDelete', e => {
  const file = e.target.parentNode.parentNode
  const id = file.firstElementChild.id
  fetch('http://localhost:3000/delete/'+id)
  .then(res => res.json())
  .then( ()=> {
    tableBodyList = tableBodyList.filter(x => x._id != id)  ;
    insertTable();
  })
})

on(document, 'click', '.btnEdit', e => {
  const file = e.target.parentNode.parentNode;
  id = file.firstElementChild.id;
  const name = file.children[1].innerHTML;
  const description = file.children[2].innerHTML;
  const cate = file.children[3].innerHTML;
  const subcat = file.children[4].innerHTML;
  const stock = file.children[5].innerHTML;
  ename.value = name
  edesc.value = description
  ecat.value = cate
  esubcat.value = subcat
  estock.value = stock
})

async function ProductEdit() {
  fetch('http://localhost:3000/edit/'+id, {
    method: 'POST',
    body: JSON.stringify({
      nombre: ename.value,
      descripcion: edesc.value,
      categoria: ecat.value,
      subcategoria: esubcat.value,
      stock: estock.value
    }),
    headers: {
      "Content-type": "application/json"
    }
  })
  .then(response => response.json())
  .then(jsondata => {
      tableBodyList = jsondata.prods;
      insertTable();
      location.reload();
  })
  //ModalProductos.hide();
}





