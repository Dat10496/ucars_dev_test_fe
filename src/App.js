import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import "./App.css";
import AdminPage from "./pages/AdminPage";
import AdminLayout from "./layouts/admin/AdminLayout";
import AdminBrandDetail from "./pages/AdminBrandDetail";
import AdminBrandEdit from "./pages/AdminBrandEdit";
import ThemeProvider from "./utils/ThemeProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<HomePage />} />
            </Route>

            <Route element={<AdminLayout />}>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/detail" element={<AdminBrandDetail />} />
              <Route path="/admin/edit" element={<AdminBrandEdit />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
