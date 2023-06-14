const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
	if (readingstatus==true) {
		console.log("book is readed");
		
	}
	function numberOfBooksRead() {
  let count = 0;
  for (let book in library) {
    if (library[book].read === true) {
      count++;
    }
  }
  return count;
}
  // write your code here
};

// Do not change the code below

alert(numberOfBooksRead());
