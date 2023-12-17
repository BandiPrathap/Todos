
let taskListItemsE1 = document.getElementById("todoListItems");
let addBtnE1=document.getElementById("addBtn");

let todoList=[];
let count=todoList.length;

function appendTaskIntoList(){
	let todoItem=document.getElementById("taskInput");
	let taskInputValue=todoItem.value;
	
	if(taskInputValue===""){
		alert("please enter task");
		return;
	}

	count=count+1;
		
	let newTodo={
		name:taskInputValue,
		uniqueId:count
		};
	todoList.push(newTodo);
    addTask(newTodo);
	todoItem.value="";
}

addBtnE1.onclick=function(){
	appendTaskIntoList();

};

function Ondelete(todoId){
	let todoTask=document.getElementById(todoId);
	taskListItemsE1.removeChild(todoTask);
	
	let deleteTodo=todoList.findIndex(function(eachtodo){
		let eachtodoId="todo"+eachtodo.uniqueId;
		if(eachtodoId===todoId){
			return true;
		}
		else{
			return false;
		}
	});
	todoList.splice(deleteTodo,1);
}

function onTodoStatus(checkBoxId,labelId,todoId){
	let labelE=document.getElementById(labelId);
	let checkBoxE=document.getElementById(checkBoxId);
	labelE.classList.toggle("strikethrough");

}

function addTask(todo){
	let todoId="todo"+todo.uniqueId;
	let labelId="label"+todo.uniqueId;
	let checkBoxId="checkbox"+todo.uniqueId;
	
	let liE1=document.createElement("li");
	liE1.id=todoId;
	liE1.classList.add("flex");
	taskListItemsE1.appendChild(liE1);
	
	let input=document.createElement("input");
	input.classList.add("checkBox");
	input.type="checkbox";
	input.id=checkBoxId;
	input.onclick=function(){
		onTodoStatus(checkBoxId,labelId,todoId);
	};
	liE1.appendChild(input);
	
	
	let divE1=document.createElement("div");
	divE1.classList.add("taskcontainer");
	liE1.appendChild(divE1);
	
	let labelE1=document.createElement("label");
	labelE1.classList.add("col-10");
	labelE1.setAttribute("for",checkBoxId);
	labelE1.id=labelId;
	labelE1.textContent=todo.name;
	divE1.appendChild(labelE1);
	

	let divE2=document.createElement("div");
	divE2.classList.add("buttonContainer");
	divE1.appendChild(divE2);

	let buttonE1=document.createElement("button");
	buttonE1.textContent="Delete";
	buttonE1.classList.add("delete_button","m-auto");
	divE2.appendChild(buttonE1);

	buttonE1.onclick=function(){
		Ondelete(todoId);
	};
	
}

for (let todo of todoList){
	addTask(todo);
}