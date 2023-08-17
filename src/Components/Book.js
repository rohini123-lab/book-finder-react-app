import BookList from './BookList'
import { useState } from 'react';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
function Book(){
    const[books,setBooks]=useState(0);
    const[searchValue,setSearchValue]=useState('');

    useEffect(() => {
        const fetchBooks = async () => {
                const response = await fetch(
                   `https://www.googleapis.com/books/v1/volumes?q=${searchValue}`
                )
                const booksData = await response.json();
                console.log(booksData)
                setBooks(booksData.items);

            };
            fetchBooks();
           }, [searchValue]);

           const handleChange=(e)=>{
              setSearchValue(e.target.value)
           }
           console.log(books)
    return(
        <div>
         
         <div className='Container'>
         <h1>BOOK FINDER</h1>
            <form >
                <input onChange={handleChange} placeholder="Harry potter, Food and Love" style={{width:'30%', height:'32px'}} ></input>
                {/* <Button variant="contained" style={{marginLeft:'10px'}}>Search</Button> */}
            </form>
            <p ><small>Search the world's most comprehensive index of full-text books.</small></p>
        </div>
        {books ?<BookList books={books}></BookList>:"" }
        </div>
    )
}
export default Book;