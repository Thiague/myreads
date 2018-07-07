import React from 'react'
import {Route, Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Shelf'
import Header from './Header'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  
  shelfChange = (book, shelf) => {
    if (this.state.books) {
      BooksAPI.update(book,shelf).then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([ book ])
        }))
      })
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <Header />
            <Bookshelf
              onShelfChange={this.shelfChange}
              booksOnShelf={this.state.books}
            />
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
        <Route path="/search" render={() => (
          <Search
            onShelfChange={this.shelfChange}
            booksOnShelf={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
