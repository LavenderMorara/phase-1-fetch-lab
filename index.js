let url="https://anapioficeandfire.com/api/books"
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch(url)
         .then(res=>res.json())
         .then(renderBooks)
         .catch(err=>console.log(err))
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
