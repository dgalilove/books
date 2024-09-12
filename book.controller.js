

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
							<button>Read</button>
      				<button>Update</button>
      				<button>Delete</button></td>
            </tr>
    `
	})
	var elBooks = document.querySelector("tbody")
	elBooks.innerHTML = strHTML
}
