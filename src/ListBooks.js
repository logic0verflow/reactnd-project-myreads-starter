import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

class ListBooks extends Component {

  render() {
    return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>

            <Bookshelf
              title="Currently Reading"
              books={this.props.books.filter(book => book.shelf === "currentlyReading")}
              moveBook={this.props.moveBook}
              id="currentlyReading"
            />

            <Bookshelf
              title="Want to Read"
              books={this.props.books.filter(book => book.shelf === "wantToRead")}
              moveBook={this.props.moveBook}
              id="wantToRead"
            />

            <Bookshelf
              title="Read"
              books={this.props.books.filter(book => book.shelf === "read")}
              moveBook={this.props.moveBook}
              id="read"
            />

          </div>
        </div>
        <div className="open-search">
          <Link to="/search" />
        </div>
      </div>
    )
  }
}

export default ListBooks
