import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BookeDetail from "src/modules/BookDetail/lazy";
import BooklistPage from "src/modules/Booklist";
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
