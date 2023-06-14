function numberOfBooksRead(library) {
  let count = 0;
  for (let i = 0; i < library.length; i++) {
    if (library[i].readingStatus) {
      count++;
    }
  }
  return count;
}


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
	
  // write your code here
};

// Do not change the code below

alert(numberOfBooksRead());
