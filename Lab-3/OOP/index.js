function Book(t, n, a) {
  this.title = t;
  this.numOfChapters = n;
  this.author = a;
}

function Box(h, w, c) {
  var arrayOfBooks = c;

  this.height = h;
  this.width = w;
  //   this.content = c;

  Object.defineProperty(this, "content", {
    get: function () {
      return arrayOfBooks;
    },
  });

  // Count tracker
  this.count = this.content.length;

  if (!(c instanceof Array)) {
    throw "ERROR: The third parameter must be an array of books";
  }

  this.removeBook = function (bookname) {
    if (this.hasBook(bookname)) {
      arrayOfBooks = arrayOfBooks.filter(
        (book) => book.title.toLowerCase() != bookname.toLowerCase()
      );
      this.count--;
    } else {
      alert(`Your box does not have the "${bookname}" book`);
    }
  };
}

Box.prototype.addBook = function (book) {
  if (book && book instanceof Book) {
    this.content.push(book);
    this.count++; //increasing the counter
  } else {
    throw "ERROR: Can't add a non-Book intance to the box";
  }
};

// Box.prototype.removeBook = function (bookname) {
//   if (this.hasBook(bookname)) {
//     arrayOfBooks = arrayOfBooks.filter(
//       (book) => book.title.toLowerCase() != bookname.toLowerCase()
//     );
//     console.log(this);
//   } else {
//     alert(`Your box does not have the "${bookname}" book`);
//   }
// };

Box.prototype.hasBook = function (bookname) {
  let flag = false;
  this.content.forEach((book) => {
    if (book.title.toLowerCase() == bookname.toLowerCase()) {
      flag = true;
      return;
    }
  });
  return flag;
};

Box.prototype.toString = function () {
  document.write(
    "<b>Width:</b> " +
      this.width +
      "<br />" +
      "<b>Height:</b> " +
      this.height +
      "<br />" +
      "<b>Number of books:</b> " +
      this.count +
      "<br />"
  );
};

// Static method
Box.valueOf = function (box1, box2) {
  if (box1 instanceof Box && box2 instanceof Box) {
    return box1.count + box2.count;
  } else {
    throw "ERROR: The two parameters must be instances of 'Box'";
  }
};

// TESTING
const b1 = new Book("The Hobbit", 32, "Ronald Tolkein");
const b2 = new Book("Lord Of The Rings", 50, "Ronald Tolkein");
const b3 = new Book("Harry Potter", 21, "J K Rowling");
const b4 = new Book("The Blue Elephant", 10, "Ahmed Mourad");
const b5 = new Book("Diamond Dust", 10, "Ahmed Mourad");
const b6 = new Book("The Road", 10, "Nageib Mahfouz");
const b7 = new Book("Vertego", 10, "Ahmed Mourad");

const box1 = new Box(12, 60, [b1, b2, b3]);
const box2 = new Box(24, 20, [b4, b5, b6]);
console.log(box1.content);
box1.addBook(b7);
box1.content = "";
console.log(box1.content);
console.log(box1.count);
console.log(box1.hasBook("Moon night"));
console.log("The Box before removing: ", box1.content);
box1.removeBook("the hobbit");
console.log("The Box after removing: ", box1.content);
// testing box2
console.log(box2.content);
box2.addBook(b7);
box2.content = "";
console.log(box2.content);
console.log(box2.count);
// box2.removeBook("The road");
box2.toString();

console.log(Box.valueOf(box1, box2));
