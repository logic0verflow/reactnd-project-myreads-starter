import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {

  render() {

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => (
              <li key={book.id}>
                <Book
                  coverURL={book.imageLinks.thumbnail}
                  title={book.title}
                  authors={book.authors}
                  moveToShelf={ (shelfTitle) => {
                    // Setup a function that only requires the shelf name to
                    // restrict the book component to only moving itself
                    book.shelf = shelfTitle
                    // Pass this book and it's newly assigned shelf so that the
                    // app state can be updated
                    this.props.moveBook(book)
                  }}
                  shelf={this.props.id}
                  id={book.id}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }

}

export default Bookshelf
