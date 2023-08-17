import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import { Link } from "react-router-dom";
function BookList(props) {
  return (
    <>
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {props.books &&
          props.books.map((book) => (
            <Grid item key={book.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  pb: "5px",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image={
                    book.volumeInfo.imageLinks &&
                    book.volumeInfo.imageLinks.thumbnail
                  }
                />

                {book.volumeInfo.title}
                <Link to={"/book/" + book.id}>View</Link>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
    
</>
  );
}
export default BookList;
