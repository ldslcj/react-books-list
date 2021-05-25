import {useState} from 'react'

const BookForm = (props) => {
    const [book_title, set_book_title] = useState('')
    const [book_author, set_book_author] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit')
        console.log(book_title)
        console.log(book_author)
        let newBook = {title:book_title, author:book_author, isbn: Math.random()}
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
                <br></br><button class="add">Add</button>
            </form>
        </div>
    )
}

export default BookForm