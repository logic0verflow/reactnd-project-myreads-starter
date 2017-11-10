import React, { Component } from 'react'

class Book extends Component {

  // Shelf selection function that is triggered when a shelf is selected
  changeShelf = (event) => {
    var shelfName = event.target.value
    this.props.moveToShelf(shelfName)
  }

  render() {

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: `url(${this.props.coverURL})` }}></div>
          <div className="book-shelf-changer">
            <select onChange={this.changeShelf} value={this.props.shelf}>
              <option value="Default" disabled>Move to...</option>
              <option value="Currently Reading">Currently Reading</option>
              <option value="Want to Read">Want to Read</option>
              <option value="Read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.authors}</div>
      </div>
    )

  }
}

export default Book
