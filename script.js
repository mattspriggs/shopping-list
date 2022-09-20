//Command to ensure the page fully loads before user interacts with it
window.onload = function () {
	initShoppingList();
};

//Initializes the form and sets the event listener on the HTML
function initShoppingList() {
	let form = document.getElementById("item-form");

	form.addEventListener("submit", (event) => {
		handleItemForm(event, form);
	});
}

//The event handler for submit button on the HTML
function handleItemForm(event, formRef){
	if(event.preventDefault){
		event.preventDefault();
	}
	//Function to create an item for the list displayed on the webpage runs when submit is pressed
	addItemToShoppingList();
	//Resets the form values
	formRef.reset();

	return false;
}
//Creates list item in html and appends it to the web page
function addItemToShoppingList() {
	let itemName = document.getElementById("item-name");
	let itemAmount = document.getElementById("item-amount");
	let id = getRandomInt(0, 100000000);

	let itemHtml = createListItemHtml(itemName.value, itemAmount.value, id);
	console.log("Item HTML: ",itemHtml);
	let itemListRef = document.getElementById("shopping list");
	itemListRef.insertAdjacentHTML("afterend", itemHtml);
	//Sets the event for the delete button added to each list item
	setDeleteButtonEvent(id);
}

//Creates the event for the delete button
function setDeleteButtonEvent(id) {
	let deleteButton = document.getElementById("button" + id);
	deleteButton.addEventListener("click", () => {
	removeListItem(id);
	});
}
//Function to create the HTML for item appended to the list
function createListItemHtml(itemName, itemAmount, id) {
	return `<li id="item${id}"> 
				${itemName} - ${itemAmount} 
				<button id="button${id}" type="button">Delete Item</button>	
			</li>`;
}
//Function called to remove the item from the list when the delete button is pressed
function removeListItem(id) {
	let listItem = document.getElementById("item"+id);
	listItem.parentNode.removeChild(listItem);
}

//Creates a random number to get a unique id to attach to each list item
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}