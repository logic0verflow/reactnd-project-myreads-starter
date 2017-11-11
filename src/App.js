import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {

  state = { books: [] }

  moveBookToShelf = (movingBook) => {
    this.setState({
      books: this.state.books
              // First remove any book with the same ID
             .filter(book => { return book.id !== movingBook.id })
             // Then add the book with the modified shelf
             .concat([ movingBook ])
    })
  }

  // After the component is mounted, attempt to fetch the books for the state
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            moveBook={this.moveBookToShelf}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks
            moveBook={this.moveBookToShelf}
            books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
