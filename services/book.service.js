const gDemoBooks = [
	{
		id: "bg4J78",
		title: "batman-rebirth",
		price: 120,
		imgUrl: "img/batman-rebirth.jpg",
	},
	{ id: "bh2653", title: "Narnia", price: 150, imgUrl: "img/narnia.jpg" },
	{
		id: "ag4L79",
		title: "Diaries of a wimpy kid",
		price: 100,
		imgUrl: "img/Diaries of a wimpy kid.jpg",
	},
]

var gBooks = [...gDemoBooks] // making a copy

function getBooks() { // getting books
	return gBooks
}

function removeBook(bookId) { // removing proce
	const bookIdx = gBooks.findIndex((book) => book.id === bookId)
	if (bookIdx !== -1) gBooks.splice(bookIdx, 1)
}

function updatePrice(bookId) { // updating price
	const book = gBooks.find((book) => book.id === bookId)
	book.price = +prompt("Update the price")
}

function addBook() { // adding book
	const title = prompt("Enter the title of the book")
	const price = +prompt("Enter the price of the book")
  if (!title || price <= 0 ) {
    return false
  }
  else{
    const book = { id: makeId(), title, price, imgUrl: `img/${title}.jpg` }
    gBooks.unshift(book)
    return true
  }
}

function readBook(bookId) { // if id is matching open the modal , show the picture and on click close
	const book = gBooks.find((book) => book.id === bookId)
	const elModal = document.querySelector(".modal")
	const elImg = document.querySelector(".modal-content")

	elModal.style.display = "block"
	elImg.src = book.imgUrl
	elModal.onclick = closeModal 
}

function closeModal() { // closing modal
	const elModal = document.querySelector(".modal")
	elModal.style.display = "none"    
}

function _saveBooks() {
	saveToStorage("books", gBooks)  // save to local storage 
}

function _loadBooks() { // load from local storage
  const books = loadFromStorage('books')
  gBooks = books && books.length > 0 ? books : [...gDemoBooks] // if there are books load to gBooks , if there aren't books load the demo 
}

function orderByTitle(books) { //order by title
	books.sort((a, b) => a.title.localeCompare(b.title))
}

function filterBooks(input) { //filter by the title 
	const filter = getBooks().filter((book) => 
		book.title.toLowerCase().includes(input.toLowerCase()) // turning the input to lower case then checking if the input included in the book title
	)
	renderBooks(filter) // rendering the filtered books 
}

function clearSearch() {
	document.querySelector("input").value = "" // clearing the input 
	renderBooks(gBooks) // rendering the books 
}

function message(msg) {
  const elMessage = document.querySelector('.success')
  elMessage.style.display = 'block'
  elMessage.innerText = msg

  setTimeout(() => {
    elMessage.style.display = 'none'
  }, 2000)
}

function stats() {
  const expCount = gBooks.filter(book => book.price > 200).length
  const avgCount = gBooks.filter(book => book.price >= 80 && book.price <= 200).length
  const lowCount = gBooks.filter(book => book.price < 80).length

  document.querySelector('.expensive').innerText = expCount
  document.querySelector('.average').innerText = avgCount
  document.querySelector('.cheap').innerText = lowCount
}