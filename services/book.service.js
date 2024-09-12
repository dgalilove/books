const gBooks = [
	{
		id: "bg4J78",
		title: "batman-rebirth",
		price: 120,
		imgUrl: "img/batman-rebirth.jpg",
	},
	{
		id: "bh2653",
		title: "Narnia",
		price: 150,
		imgUrl: "img/narnia.jpg",
	},
	{
		id: "ag4L79",
		title: "Diaries of a wimpy kid",
		price: 100,
		imgUrl: "img/Diaries of a wimpy kid.jpg", 
	}
]
function getBooks(){
  return gBooks
}

function removeBook(bookId){
  const bookIdx = gBooks.findIndex(book => book.id === bookId)
    if (bookIdx !==-1){
      gBooks.splice(bookIdx,1)
    }
}

function updatePrice(bookId){
  const book = gBooks.find(book => book.id === bookId)
  book.price = +prompt('Update the price')
}

function addBook() {
  const title = prompt("Enter the title of the book")
  const price = prompt("Enter the price of the book")
  var book = {
    id: makeId(),
    title: title,
    price: price,
    imgUrl: `img/${title}.jpg`,
  }
  gBooks.unshift(book)
}


function readBook(bookId) {
  const book = gBooks.find(book => book.id === bookId)
  const elModal = document.querySelector('.modal')
  const elImg = document.querySelector('.modal-content')

  elModal.style.display = 'block'
  elImg.src = book.imgUrl

  elModal.onclick = function () { //click to close
    closeModal()
  }
}

function closeModal() {
  const elModal = document.querySelector('.modal')
  elModal.style.display = 'none'
}