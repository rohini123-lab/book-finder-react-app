import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ImageListItem from '@mui/material/ImageListItem';
import Card from "@mui/material/Card";


function BookDetails() {
  const [book, setBook] = useState({});
  const { id } = useParams();
 const navigate=useNavigate()
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      const bookData = await response.json();
      console.log(bookData);
      setBook(bookData);
    };
    fetchBooks();
  }, [id]);
  console.log("book");
  console.log(id);

  
  
  return (
    <Container sx={{ pt: 10 }} maxWidth="md">
        <div  style={{alignItems:'left', display:'flex'}}>
        <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => navigate(-1)}
           
          >
            Back
          </Button>
        </div>
  <Typography gutterBottom variant="h3" component="h3">
  {book && book.volumeInfo && book.volumeInfo.title}
        </Typography>
        <Grid container spacing={3}>
        <Grid item md={2} xs={12}>
        {book && book.volumeInfo && book.volumeInfo.imageLinks
              ? <img
                src={ book.volumeInfo.imageLinks.smallThumbnail}
                alt={book.title}
                />
              : null
            }
          </Grid>
          <Grid item xs={12} md={10} style={{textAlign:'left'}}>
          <Typography><strong>kind:</strong>{book.kind}</Typography>
          <Typography><strong>publisher: {book.volumeInfo && book.volumeInfo.publisher}</strong></Typography>
          <Typography><strong>Id:</strong>{book.id}</Typography>
          <Typography type="body">{book.volumeInfo && book.volumeInfo.description}</Typography>
            </Grid>
          </Grid>
  </Container>
  )
}
export default BookDetails;
