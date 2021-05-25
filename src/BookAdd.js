import {useState} from 'react'

const BookForm = (props) => {
    const [book_title, set_book_title] = useState('')
    const [book_author, set_book_author] = useState('')
    const [book_image, set_book_image] = useState('')
    const [book_isbn, set_book_isbn] = useState()
    const [book_genre, set_book_genre] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit')
        console.log(book_title)
        console.log(book_author)
        let newBook = {title:book_title, author:book_author, isbn:book_isbn, image:book_image, genre:book_genre}
        props.addBook(newBook)

    }
    return(
        <div>
            <h1>Add New Book</h1>
            <form onSubmit = {handleSubmit}>
                <p>Book Title</p>
                <input
                    type = "text"
                    value = {book_title}
                    onChange = {(e) => set_book_title(e.target.value)} />
                <p>Author</p>
                <input
                    type = "text"
                    value = {book_author}
                    onChange = {(e) => set_book_author(e.target.value)} />
                <p>Genre</p>
                <input
                    type = "text"
                    value = {book_genre}
                    onChange = {(e) => set_book_genre(e.target.value)} />
                <p>ISBN Number</p>
                <input
                    type = "number"
                    value = {book_isbn}
                    onChange = {(e) => set_book_isbn(e.target.value)} />
                <p>Image URL</p>
                <input
                    type = "text"
                    value = {book_image}
                    onChange = {(e) => set_book_image(e.target.value)} />   
                <br></br><button class="add">Add</button>
            </form>
        </div>
    )
}

export default BookForm