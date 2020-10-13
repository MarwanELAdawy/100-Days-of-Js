//add an eventListener to the from
const form = document.querySelector('#itemForm'); // select form
const itemInput = document.querySelector('#itemInput'); // select input box from form
const itemList = document.querySelector('.item-list');
const feedback = document.querySelector('.feedback');
const clearButton = document.querySelector('#clear-list');

let todoItems = [];

const handleItem = (itemName)=>{
    const items = itemList.querySelectorAll('.item');
    items.forEach((item)=>{
        if(item.querySelector('.item-name').textContent === itemName){
            item.querySelector('.complete-item').addEventListener('click', ()=>{
                item.querySelector('.item-name').classList.toggle('completed');
                this.classList.toggle('visibility');
            });
            item.querySelector('.edit-item').addEventListener('click', ()=>{
                itemInput.value = itemName;
                itemList.removeChild(item);
                todoItems = todoItems.filter((item)=>{
                    return item !== itemName;
                });
            });
            item.querySelector('.delete-item').addEventListener('click', ()=>{
                debugger;
                itemList.removeChild(item);
                todoItems = todoItems.filter((item)=>{
                    return item !== itemName;
                });
                showFeedback('item delete', 'success');
            })
        }
    })
}

const removeItem = (item)=>{
    console.log(item);
    const removeIndex = (todoItems.indexOf(item));
    console.log(removeIndex);
    todoItems.splice(removeIndex, 1);
}

const getList = (todoItems)=>{
    itemList.innerHTML = '';
        todoItems.forEach((item)=>{
            itemList.insertAdjacentHTML('beforeend', `<div class="item my-3"><h5 class="item-name text-capitalize">${item}</h5><div class="item-icons"><a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a><a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a><a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a></div></div>` );
            handleItem(item);
        });
}
const getLocalStorage = ()=>{
    const todoStorage = localStorage.getItem('todoItems');
    if (todoStorage === 'undefined' || todoStorage === null){
        todoItems = [];
    } else {
        todoItems = JSON.parse(todoStorage);
        getList(todoItems);
    }
}

const setLocalStorage = (todoItems)=>{
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

getLocalStorage();

form.addEventListener('submit', (e)=>{ 
    e.preventDefault();
    const itemName = itemInput.value;
    if (itemName.length === 0){
        feedback.innerHTML = 'Please Enter Valid Value';
        feedback.classList.add('showItem', 'alert-danger');
        setTimeout(
            ()=>{feedback.classList.remove('showItem');}, 3000);
    } else {
        todoItems.push(itemName);
        setLocalStorage(todoItems);
        getList(todoItems);
    }
    
    itemInput.value = '';
    });
clearButton.addEventListener('click', ()=>{
    todoItems = [];
    localStorage.clear();
    getList(todoItems);
})



  

