const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//Step 6
function search(event) {
	let userInput = event.target.value.toLowerCase();
	let results = fruit.filter(element => {
		return element.toLowerCase().includes(userInput);
	});

	if (results.length > 0) {
		displaySuggestions(results, userInput);
	} else {
		removeDroplist();
	}
}

function displaySuggestions(results, userInput){
	suggestions.innerHTML = '';//Clear previous suggestions

	results.forEach(result => {
		let li = document.createElement('li');
		li.innerHTML = highlightMatch(result,userInput);
		suggestions.appendChild(li);
	});

	suggestions.parentElement.style.display = 'block';
}

// Highlight matching characters in the suggestion
function highlightMatch(text, userInput) {
	const regex = new RegExp(`(${userInput})`, 'gi'); // Create a regex to match user input, case-insensitive
	return text.replace(regex, '<span class="highlight">$1</span>'); // Wrap matches in a span with a highlight class
}

//Step 8 - Add an event listener to trigger whenever a user hovers over one of the suggestions in the drop down list. Write a function which highlights the suggestion. Attach this function to the event listener.
function highlightResult(event){
	const listItems = suggestions.querySelectorAll('li');
	listItems.forEach (element => {
		element.style.backgroundColor = '';
		element.parentElement.style.backgroundColor = '';
	});
	// event.target.style.backgroundColor = '#de580b';
	event.target.style.backgroundColor = '#bf95db';
}

function resetHighlight(event) {
	// Reset the background color when the mouse leaves the item
	event.target.style.backgroundColor = '';
}


//Step 9 - Populates the Search Bar with the suggestion. Add this function to the event listener
function useSuggestion(event) {
		input.value = event.target.innerText;
		removeDroplist();
}

function removeDroplist(){
	suggestions.innerHTML = '';
	suggestions.parentElement.style.display = 'none';
}


//Step Five - Create an event listener for Key Strokes
input.addEventListener('input', search);
suggestions.addEventListener('mouseover',highlightResult);
suggestions.addEventListener('mouseout',resetHighlight);
suggestions.addEventListener('click', useSuggestion);
