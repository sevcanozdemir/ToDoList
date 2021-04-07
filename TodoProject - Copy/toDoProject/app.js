

// let value;
// value=document;
// value=document.all;

// console.log(value)


//html elementleri üzerinde dolaşma

// const element=document.all;
// for(let i=0;i<element.length;i++){
//     console.log(element[i]);
// }
//html koleksiyonlarının üzerinde foreach yapamıyoruz
// -----------------------------------------------------
// const collections=Array.from(document.all);
// collections.forEach(function (collection){
//     console.log(collection)

// });

// -------------------------------------------

// let value;
// value=document.body;
// value=document.head;
// value=document.location;
// value=document.location.hostname;
// value=document.location.port;

// //Links

// value= document.links;
// value= document.links[1];
// value= document.links[document.links.length-1].getAttribute("class");

// value=document.links[document.links.length-1].getAttribute("href");



// //Form

// value=document.forms

// value=document.forms.length

// value=document.forms[0].id

// value=document.forms[0].getAttribute("id");


// console.log(value)

// //elementi id ye göre seçme

// let element
// element=document.getElementById("todo-form");
// element=document.getElementById("tasks-title");

// //elementi class a göre seçme


// element=document.getElementsByClassName("card-header")[0];

// element=document.getElementsByClassName("list-group-item");

// //elementi Tag e göre getirme

// element=document.getElementsByTagName("div")

// //Query Selector -CSS Selector

// element=document.querySelector("#todo-form")//id ye göre çağırma

// element=document.querySelector(".list-group-item")// class a göre getirir

// element=document.querySelectorAll(".list-group-item") //bütün bu class ları getitir


// // element=document.querySelectorAll("*");

// // element.forEach(function(el){
// //     console.log(el)
// // })

// // element=document.querySelectorAll("li")



// // console.log(element)



// // console.log(clearTodos.id)
// // console.log(clearTodos.className)
// // console.log(clearTodos.href)
// // console.log(clearTodos.innerHTML)
// // console.log(clearTodos.style)

// //element özelliklerini değiştirme 

// const clearTodos=document.querySelector("#clear-todos");

// clearTodos.className="btn btn-primary";
// clearTodos.style.color="#000";
// clearTodos.style.marginLeft="50px";
// clearTodos.href="https://www.google.com.tr";
// clearTodos.target="_blank";
// clearTodos.textContent="Temizleyin"

// //Elementin çocuklarını alma 

// let element2=document.querySelector("li:last-child")

// element2=document.querySelector("li:nth-child(2)")

// element2=document.querySelector("li:nth-child(odd)")

// element2=document.querySelectorAll("li:nth-child(odd)")

// console.log(element2)

// const elements=document.querySelectorAll(".list-group-item");

// elements.forEach(function(el){
//     console.log(el)
// })


// let value;
// const toDoList=document.querySelector(".list-group");

// // const todo=document.querySelector(".list-group-item:nth-child(2)")

// const cardrow=document.querySelector(".card.row")


// value=toDoList.children;

// value=toDoList.children[2].textContent="Değişti"

// value=cardrow.children[1].children[0].children;

// value=cardrow;
// value=cardrow.parentElement.parentElement.parentElement;

// const todo=document.querySelector(".list-group-item:nth-child(1)")

// value=todo;
// value=todo.previousElementSibling;
// value=todo.nextElementSibling.nextElementSibling;

// console.log(value)

// ------------------------------------

//Element Oluşturma

// const newLink=document.createElement("a")
// const cardbody=document.getElementsByClassName("card-body")[1];

// newLink.id="clear-todo";
// newLink.className="btn btn-danger";
// newLink.target="_blank"
// newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"))

// cardbody.appendChild(newLink)
// console.log(newLink);
//-----------------------------------------------------

// const todoList=document.querySelector("ul.list-group");
// const todos=document.querySelectorAll("li.list-group-item");

// console.log(todoList)

// todoList.removeChild(todoList.lastElementChild);
// todoList.removeChild(todoList.firstChild)
// // todoList.removeChild(todos[2])
// todos[1].remove();

//---------------------------------------------------------

//replace

// const cardbody =document.querySelectorAll(".card-body")[1];
// const newElement=document.createElement("h3");
// console.log(newElement);

// newElement.className="card-title";
// newElement.id="tasks-title";
// newElement.textContent="Yeni Todolar";

// const oldElement=document.querySelector("#tasks-title");

// console.log(oldElement)

// cardbody.replaceChild(newElement,oldElement);

//------------------------------------------------
//DOM Events
// const filterInput=document.querySelector("#filter")

//1.Yöntem

// filterInput.onfocus=function(){
//     console.log("Inputa tıkladınız")
// }

//2.Yöntem- Tercih edilen yöntem
// filterInput.addEventListener("focus",function(e){
//     console.log(e)
//     console.log(e.type);
//     console.log(e.target.className)
//     console.log(e.target.classList)
//     console.log(e.target.placeholder)
//     console.log(e.target.value)
// });

//Submit Eventi

// const todoForm=document.querySelector("#todo-form")
// // console.log(todoForm)
// todoForm.addEventListener("submit",submitForm)

// function submitForm(e){
//     console.log("Submit eventi")

//     //Sayfanın yenilenmesini engeller
//     e.preventDefault();
// }

//Klavye Eventleri


//Klavye üzerindeki tüm tusların tetiklenmesini istiyorsak 


//-------keydaown kullanalım
// console.log(filterInput)
// filterInput.addEventListener("keydown",run);

// function run(e){
//     console.log(e.key)
// }



//------keyup elimizi çektiğimizd tetiklenir

// filterInput.addEventListener("keyup",run);

// function run(e){
//     console.log(e.key)
// }

//--------keypresss-

// filterInput.addEventListener("keypress",run);

// function run(e){
//     console.log(e.target.value)
// }


//-------------------------------------------------------
//bir todo girin yerine yazdığımız yazıyla todolist(title) değişecek 
//yazdığımız yazı olacak

// const title=document.querySelector(".card-header");

// console.log(title.textContent)

// const todoInput=document.querySelector("#todo");

// todoInput.addEventListener("keyup",changeText);

// function changeText(e){
//     title.textContent=e.target.value;
// }

//----------------------------------------------------

//Mouse Events

// const cardbody=document.querySelectorAll(".card-body")[1];

// const title=document.querySelector("#tasks-title");

// title.addEventListener("click",run)

// function run(e){
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.textContent);
//     console.log(e.target.innerHTML)
// }


//Mouse sol tusuna iki kez tık yaptığımızda tetklenir


// title.addEventListener("dbclick",run)

// function run(e){
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.textContent);
//     console.log(e.target.innerHTML)
// }

// cardbody.addEventListener("mouseover",mo)

// function mo(e){
//     console.log(e);
// }

//mouseup ise tıklayıp çektiğinizde tetiklenir

//...........................................................

//input eventleri

// const todoEnter=document.querySelector("#todo");
// const filter=document.querySelector("#filter");

// filter.addEventListener("focus",run);

// function run(e){
//     console.log(e.target.id)
// }

//------Kopyalama

// filter.addEventListener("copy",run);
// function run(e){
//     console.log("Kopyalama işlemi yaptınız")
// }

//------Yapıştırma

// filter.addEventListener("paste",run);
// function run(e){
//     console.log("yapıştırma işlemi yaptınız")
// }

//------Kesme

// filter.addEventListener("cut",run);
// function run(e){
//     console.log("kesme işlemi yaptınız")
// }

//------Seçme

// filter.addEventListener("select",run);
// function run(e){
//     console.log("seçme işlemi yaptınız")
// }


//--------Proje başlayalım----------------

const form = document.querySelector("#todo-form");

const todoInput = document.querySelector("#todo");

const todoList = document.querySelector(".list-group");

const firstCardBody = document.querySelectorAll(".card-body")[0];

const secondCardBody = document.querySelectorAll(".card-body")[1];

const filter = document.querySelector("#filter");

const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTododToUI)//sayfa yenilendiğinde fonksiyon tetiklenir
    secondCardBody.addEventListener("click",deleteTodo)
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);

}

function clearAllTodos(e){
    if(confirm("Tüm Todoları silmek istediğinizden emin misiniz?")){
        while(todoList.firstElementChild !=null){
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
    }
}

function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    listItems.forEach(function (listItem) {
      const text = listItem.textContent.toLowerCase();
      if (text.indexOf(filterValue) === -1) {
        listItem.setAttribute("style", "display:none !important");
      } else {
        listItem.setAttribute("style", "display:block");
      }
    });
  }

function deleteTodo(e){
    if(e.target.className==="fas fa-trash-alt"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFtomStorage(e.target.parentElement.parentElement.textContent)
        showAlert("success","Todo başarıyla silindi");
    }
}

function deleteTodoFtomStorage(deleteTodo){
    let todos=getTodosFromStorage();
    todos.forEach(function(todo,index){
        if(todo==deleteTodo){
            todos.splice(index,1);
        }
    });

    localStorage.setItem("todos",JSON.stringify(todos));
}

function loadAllTododToUI(){
    let todos=getTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoUI(todo)
    });
}

function addTodo(e) {
    const newTodo = todoInput.value.trim();

    if (newTodo === "") {
        showAlert("danger", "lütfen bir todo giriniz")
    }
    else {
        addTodoUI(newTodo);
        addTodoStorage(newTodo)
        showAlert("success","Todo eklendi...")
    }

    e.preventDefault();
}

function addTodoStorage(newTodo){
   let todos=getTodosFromStorage();
   todos.push(newTodo);
   localStorage.setItem("todos",JSON.stringify(todos));
}

function getTodosFromStorage(){
    let todos;
    if(localStorage.getItem("todos")==null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    return todos;

}

function showAlert(type, message) {
    // <div class="alert alert-primary" role="alert">
    //    This is a primary alert—check it out!
    // </div>
    const alert = document.createElement("div");
    alert.textContent = message;
    alert.className = `alert alert-${type}`
    firstCardBody.appendChild(alert);

    setTimeout(function(){
        alert.remove();
    },1000);

}

function addTodoUI(newTodo) {
    //<li class="list-group-item d-flex justify-content-between">
    //  Todo 1
    //     < a href = "#" class="delete-item">
    //        <i class="fas fa-trash-alt"></i>
    //     </>
    //</li >
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between"
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fas fa-trash-alt'></i>";
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);
    todoInput.value = "";
}