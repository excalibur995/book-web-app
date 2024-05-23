import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BookCreationPage from "src/modules/BookCreation";
import BookeDetail from "src/modules/BookDetail/lazy";
import BooklistPage from "src/modules/Booklist";
import FavouriteBooks from "src/modules/FavouriteBooks";
import Navbar from "src/presentation/layouts/navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<BooklistPage />} />
        <Route
          path="/detail/:id"
          element={
            <Suspense>
              <BookeDetail />
            </Suspense>
          }
        />
        <Route path="/add-book" element={<BookCreationPage />} />
        <Route path="/edit/:id" element={<BookCreationPage />} />
        <Route path="/favourite" element={<FavouriteBooks />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
