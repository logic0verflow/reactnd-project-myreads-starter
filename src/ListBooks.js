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
              books={this.props.books.filter(book => book.shelf === "Currently Reading")}
              moveBook={this.props.moveBook}
            />

            <Bookshelf
              title="Want to Read"
              books={this.props.books.filter(book => book.shelf === "Want to Read")}
              moveBook={this.props.moveBook}
            />

            <Bookshelf
              title="Read"
              books={this.props.books.filter(book => book.shelf === "Read")}
              moveBook={this.props.moveBook}
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
