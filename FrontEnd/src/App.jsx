import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import { createContext, useState } from "react";
import CategoryPage from "./pages/CategoryPage";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import CategoryRegPage from "./pages/CategoryRegPage";
import OffersPage from "./pages/OffersPage";
import CommentPage from "./pages/CommentPage";
import CommentsListPage from "./pages/CommentsListPage";

export const UpdateContext = createContext();
export const EditContext = createContext();

function App() {
  const [update, setUpdate] = useState(0);
  const [edit, setEdit] = useState(false);
  const [editCategory, setEditCategory] = useState(false);
  return (
    <>
      <UpdateContext.Provider value={{ update, setUpdate }}>
        <EditContext.Provider
          value={{ edit, setEdit, editCategory, setEditCategory }}
        >
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path="registration" element={<RegistrationPage />} />
            <Route path="*" element={<PageNotFound />} />
            <Route
              path="/homepage"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/categories"
              element={
                <ProtectedAdminRoute>
                  <CategoryPage />
                </ProtectedAdminRoute>
              }
            />
            <Route
              path="/newcategory"
              element={
                <ProtectedAdminRoute>
                  <CategoryRegPage />
                </ProtectedAdminRoute>
              }
            />
             <Route
              path="/offerspage"
              element={
                <ProtectedAdminRoute>
                  <OffersPage />
                </ProtectedAdminRoute>
              }
            />
            <Route
              path="/categoryedit/:id"
              element={
                <ProtectedAdminRoute>
                  <CategoryRegPage />
                </ProtectedAdminRoute>
              }
            />
             <Route
              path="/comment/:id"
              element={
                <ProtectedRoute>
                  <CommentPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/commentslist/:id"
              element={
                <ProtectedRoute>
                  <CommentsListPage />
                </ProtectedRoute>
              }
            />
             <Route
              path="/offeredit/:id"
              element={
                <ProtectedAdminRoute>
                  <OffersPage />
                </ProtectedAdminRoute>
              }
            />
          </Routes>
        </EditContext.Provider>
      </UpdateContext.Provider>
    </>
  );
}

export default App;
