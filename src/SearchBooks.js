import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {

  state = {
    query: '',
    searchResults: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })

    BooksAPI.search(query).then((results) => {

      if (results.length > 0) {

        var searchResults = results.map(resultBook => {
          // return book from the shelf in results if its id can be found
          // already in the shelf
          var bookFound = this.props.books.filter(book => {
            return resultBook.id === book.id
          }).pop()

          // if the book searched for is already on the shelf, return the shelf
          // version of the book. Otherwise, return the current book found
          // from the search
          return bookFound ? bookFound : resultBook
        })

        this.setState({ searchResults })

      } else {
        // No search results found, return empty results
        this.setState({ searchResults: [] })
      }
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/"/>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set
              of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by
              title or author. So, don't worry if
              you don't find a specific author or title. Every search is
              limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value) }/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.searchResults.map(book => (
            <li key={book.id}>
              <Book
                coverURL={book.imageLinks.thumbnail}
                title={book.title}
                authors={book.authors}
                moveToShelf={ (shelfTitle) => {
                  // Setup a function that only requires the shelf name to
                  // restrict the book component to only moving itself
                  book.shelf = shelfTitle
                  book.coverURL = book.imageLinks.thumbnail
                  this.props.moveBook(book)
                }}
                shelf={book.shelf ? book.shelf : "none"}
              />
            </li>
          ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
