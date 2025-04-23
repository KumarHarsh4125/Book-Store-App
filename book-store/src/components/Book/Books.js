import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book";

const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Books = ({ searchTerm = "" }) => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => {
      setBooks(data.books);
      setFilteredBooks(data.books); // Initially, show all books
    });
  }, []);

  useEffect(() => {
    // Filter books when searchTerm changes
    if (!searchTerm) {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(
        books.filter((book) =>
          book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, books]);

  return (
    <div>
      <ul>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No books found.
          </p>
        )}
      </ul>
    </div>
  );
};

export default Books;
