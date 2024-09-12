

function onInIt(){
	renderBooks()
}

function renderBooks() {
	const books = getBooks()
	var strHTML = ''
	books.map((book) => {
		strHTML += `
            <tr>
              <td>${book.title}</td>
              <td>${book.price}</td>
              <td>
							<button onclick="onRemoveBook('${book.id}')">Read</button>
      				<button onclick="onUpdateBook('${book.id}')">Update</button>
      				<button onclick="onRemoveBook('${book.id}')">Delete</button></td>
            </tr>
    `
	})
	var elBooks = document.querySelector("tbody")
	elBooks.innerHTML = strHTML
}

function onRemoveBook(bookId){
	removeBook(bookId)
	renderBooks()
}

function onUpdateBook(bookId){
	updatePrice(bookId)
	renderBooks()
}