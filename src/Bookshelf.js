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
              <li key={book.title}>
                <Book
                  coverURL={book.coverURL}
                  title={book.title}
                  authors={book.authors}
                  moveToShelf={ (shelfTitle) => {
                    // Setup a function that only requires the shelf name to
                    // restrict the book component to only moving itself
                    book.shelf = shelfTitle
                    this.props.moveBook(book)
                  }}
                  shelf={this.props.title}
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
