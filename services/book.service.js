const gBooks = [
	{
		id: "bg4J78",
		title: "The adventures of Lori Ipsi",
		price: 120,
		imgUrl: "lori-ipsi.jpg",
	},
	{
		id: "bh265",
		title: "Narnia",
		price: 150,
		imgUrl: "lori-ipsi.jpg",
	},
	{
		id: "ag4L79",
		title: "Diaries of a wimpy kid",
		price: 100,
		imgUrl: "lori-ipsi.jpg",
	},
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