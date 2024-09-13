"use strict"

function onInIt() {
  _loadBooks()
  renderBooks(orderByTitle(gBooks))
}

function renderBooks(books = getBooks()) { // if there are books render them , if not render the gBook from the getBooks()
  const strHTML = books.map(book => 
		 `
    <tr>
      <td>${book.title}</td>
      <td>${book.price}</td>
      <td>
        <button onclick="onReadBook('${book.id}')">Read</button>
        <button onclick="onUpdateBook('${book.id}')">Update</button>
        <button onclick="onRemoveBook('${book.id}')">Delete</button>
      </td>
    </tr>
     `).join('')
	const elTBody = document.querySelector('tbody')
  elTBody.innerHTML = strHTML
}

function onRemoveBook(bookId) {
	removeBook(bookId)
	_saveBooks()
	renderBooks(orderByTitle(getBooks()))
}

function onUpdateBook(bookId) {
	updatePrice(bookId)
	_saveBooks()
	renderBooks(orderByTitle(getBooks()))
}

function onAddBook() {
	addBook()
	_saveBooks()
	renderBooks(orderByTitle(getBooks()))
}

function onReadBook(bookId) {
	readBook(bookId)
}

function onFilterBooks(input) {
	filterBooks(input)
}
