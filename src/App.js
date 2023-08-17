
import './App.css';
import CircularProgress from '@mui/material/CircularProgress';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Footer from './Components/Footer'

 const NavBar = lazy(() => import('./Components/NavBar'));
const Book = lazy(() => import('./Components/Book'));
const BookDetails = lazy(() => import('./Components/BookDetails'));

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <main>
      <Suspense
        fallback={
          <div className="container">
            <Box sx={{display: "flex"}}>
              Loading <CircularProgress />
            </Box>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Book />}/>
          <Route path="/book/:id" element={<BookDetails />} />
          {/* <Route path="/checkout" element={<CheckOut />} />
          <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </Suspense>
    </main>
    <Footer/>
    </div>
  );
}

export default App;
