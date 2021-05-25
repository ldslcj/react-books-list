import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import BookForm from './BookAdd';


function App() {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
    getBookList()
    }, [])


    const getBookList = async () => {
    console.log('booklist is loading... 2 second delay')
    let response = await axios.get('https://fakerapi.it/api/v1/books?_quantity=5?delay=2')
    console.log('after axios call')
    console.log(response.data)
    console.log(response.data.data)
    setBooks(response.data.data)
    setLoading(false)
    }

    const deleteBook = (title) => {
      console.log('deleteBook clicked title:', title)
      let newBooks = books.filter( book => {
        return book.title !== title
      })

      setBooks(newBooks)

    }

    const renderBookList = () => {
      if(loading){
        return <p>Loading Book List.... Please wait...</p>
      }
      return books.map(book => {
        return (
          <div>
            
            <p>
              <img src={book.image}></img><br></br>
              <b>Book Title:</b> {book.title}<br></br>
              <b>Author:</b> {book.author}<br></br>
              <b>Genre:</b> {book.genre}<br></br>
              <b>ISBN:</b> {book.isbn}<br></br>
              <button onClick={() => {deleteBook(book.title)}}>Delete</button>
            
            </p>
            <p></p>
            <p></p>
          </div>
        )
      })
    }

    const addBook = (book) => {
      console.log(book)
      setBooks([book, ...books])
    }


    console.log('about to render to DOM')
    return (
      <div className="App">
        <h1>Books</h1>
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Hide Form" : "Add New Book"}</button>

        {showForm && <BookForm addBook = {addBook} />}
        {renderBookList()}
      </div>
    )
}

export default App;
