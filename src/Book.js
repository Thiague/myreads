import React, {Component} from 'react'


class Book extends Component {
 
  updateBook(shelf) {
    this.props.onShelfChange(this.props.book, shelf)
  }// Função para atualização da prateleira

  render () {
    const {book} = this.props
    
    return (
      <div className="book">
       <div className="book-top">
         <div className="book-cover" style={{ height: 192, width: 128, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail: ''})` }}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={(e) => this.updateBook(e.target.value)}>
              <option value="" disabled>Move to...</option>
              <option value="none">None</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
            </select>
          </div>
       </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book