import React from "react";
import { Routes, Route } from "react-router-dom";
import { UpdatePage } from "./views/UpdatePage";
import { FavoritePage } from "./views/FavoritePage";
import { AboutUsPage } from "./views/AboutUsPage";
import { SearchResultsPage } from "./views/SearchResultsPage";
import { SearchModalBar } from "./components/ModalWindows/SearchModalBar";
import { LoginModalWindow } from "./components/ModalWindows/LoginModalWindow";
import { MenuBar } from "./components/Header/MenuBar";
import { DetailProductPage } from "./views/DetailProductPage";
import { HomePage } from "./views/HomePage";
import { CatalogModalWindow } from "./components/ModalWindows/CatalogModalWindow";
import { MoreModalWindow } from "./components/ModalWindows/MoreModalWindow";
import { CategoryPage } from "./views/CategoryPage";
import { ProdcutCreatePage } from "./views/ProdcutCreatePage";
import { RegisterModal } from "./components/ModalWindows/RegisterModal";
import CardPage from "./views/CardPage";
import ContactPage from "./views/ContactPage";
import ProfileMain from "./views/ProfileMain";
import ProfilePerconalData from "./views/ProfilePerconalData";
import ProfileHistory from "./views/ProfileHistory";
import ProfileChangePass from "./views/ProfileChangePass";
import NewsPage from "./views/NewsPage";
import NewsDetail from "./components/News/NewsDetail";
import { NewsCreatePage } from "./views/NewsCreatePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/card' element={<CardPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/user/profilemain' element={<ProfileMain />} />
        <Route path='/user/perconaldata' element={<ProfilePerconalData />} />
        <Route path='/user/profilehistory' element={<ProfileHistory />} />
        <Route path='/user/profilechange' element={<ProfileChangePass />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/news/:newsId' element={<NewsDetail />} />
        <Route path='/product/:id' element={<DetailProductPage />} />
        <Route path='/category/:category' element={<CategoryPage />} />
        <Route path='/user/favorite' element={<FavoritePage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/admin/create/product' element={<ProdcutCreatePage />} />
        <Route path='/admin/update/product/:id' element={<UpdatePage />} />
        <Route path='/admin/create/news' element={<NewsCreatePage />} />
        <Route
          path='/search/products/:searchedTerm'
          element={<SearchResultsPage />}
        />
      </Routes>
      <SearchModalBar />
      <LoginModalWindow />
      <MenuBar />
      <CatalogModalWindow />
      <MoreModalWindow />
      <RegisterModal />
    </div>
  );
}

export default App;
