"use strict"

function onInIt() {
	_loadBooks()
	renderBooks(orderByTitle(gBooks))
	stats()
}

function renderBooks(books = getBooks()) {
	// if there are books render them , if not render the gBook from the getBooks()
	const strHTML = books
		.map(
			(book) =>
				`
    <tr>
      <td>${book.title}</td>
      <td>${book.price}</td>
      <td>
        <button onclick="onReadBook('${book.id}')">READ</button>
        <button onclick="onUpdateBook('${book.id}')">UPDATE</button>
        <button onclick="onRemoveBook('${book.id}')">DELETE</button>
      </td>
    </tr>
     `
		)
		.join("")
	const elTBody = document.querySelector("tbody")
	elTBody.innerHTML = strHTML
	stats()
}

function onRemoveBook(bookId) {
	removeBook(bookId)
	_saveBooks()
	renderBooks(orderByTitle(getBooks()))
	message("Removed Successfully")
}

function onUpdateBook(bookId) {
	updatePrice(bookId)
	_saveBooks()
	renderBooks(orderByTitle(getBooks()))
	message("Updated Successfully")
}

function onAddBook() {
	if (addBook()) {
		_saveBooks()
		renderBooks(orderByTitle(getBooks()))
		message("Added Successfully")
	} else {
		message("Invalid Input")
	}
}

function onReadBook(bookId) {
	readBook(bookId)
}

function onFilterBooks(input) {
	filterBooks(input)
}
