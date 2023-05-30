import axios from "axios";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { createContext, useReducer } from "react";
import { db } from "../firebase/config";
import { calcSubPrice, calcTotalPrice } from "../helpers/calcPrice";

const INITIAL_STATE = {
  products: [],
  detailProduct: null,
  cartItems: {},
  favorite: [],
  reviews: [],
  users: [],
  searchedProducts: [],
  productCategory: "1",
  news: [],
  newsDetail: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "SET_PRODUCT_DETAIL":
      return {
        ...state,
        detailProduct: action.payload,
      };
    case "GET_CART":
      return {
        ...state,
        cartItems: action.payload,
      };
    case "FILTERED_PRODUCTS":
      return {
        ...state,
        favorite: action.payload.filter((item) => item.isLiked === true),
      };
    case "SET_REVIEWS":
      return {
        ...state,
        reviews: action.payload,
      };
    case "SET_SEARCHED_PRODUCTS":
      return {
        ...state,
        searchedProducts: action.payload,
      };
    case "CHANGE_CATEGORY":
      return {
        ...state,
        productCategory: action.payload,
      };
    case "SET_NEWS":
      return {
        ...state,
        news: action.payload,
      };
    case "SET_DETAIL_NEWS":
      return {
        ...state,
        newsDetail: action.payload,
      };

    default:
      return state;
  }
};

export const appContext = createContext();
const URL = "http://localhost:8080";

export default function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const getNews = async () => {
    const q = query(collection(db, "news"), orderBy("data"));
    const newsSnapshot = await getDocs(q);

    const data = newsSnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    // console.log(newsSnapshot.docs[0].data());

    dispatch({
      type: "SET_NEWS",
      payload: data,
    });
  };
  const getDetailNews = async (id) => {
    const detailRef = doc(db, "news", id);
    const detailSnapShot = await getDoc(detailRef);

    const data = { ...detailSnapShot.data(), id: detailSnapShot.id };

    dispatch({
      type: "SET_DETAIL_NEWS",
      payload: data,
    });
  };
  const getCartItems = async (userId) => {
    const q = query(
      collection(db, "prodcuts"),
      where("inCart", "not-in", [userId]),
    );
    const productsSnapshot = await getDocs(q);

    const data = productsSnapshot.docs.map((product) => {
      return { ...product.data(), id: product.id };
    });
    console.log("hello from getCart");

    console.log(data);
    dispatch({
      type: "SET_CART_ITEMS",
      payload: data,
    });
  };
  const fetchCartItems = async (userId) => {
    const cartItems = state.products.filter((product) => {
      return product.inCart.filter((item) => {
        return item === userId ? product : {};
      });
    });
    dispatch({
      type: "SET_CART_ITEMS",
      payload: cartItems,
    });
  };
  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };
  const addToCart = async (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: 0,
    };

    let filteredCart = cart.products.filter(
      (elem) => elem.item.id === product.id,
    );
    if (filteredCart.length > 0) {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id,
      );
    } else {
      cart.products.push(newProduct);
    }

    newProduct.subPrice = calcSubPrice(newProduct);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const changeProductCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  };
  const getFavoriteProducts = async () => {
    const productsSnapshot = await getDocs(collection(db, "products"));
    const products = productsSnapshot.docs.map((product) => {
      return { ...product.data(), id: product.id };
    });

    dispatch({
      type: "FILTERED_PRODUCTS",
      payload: products,
    });
  };
  const fetchCategoryProducts = async (category) => {
    const q = query(
      collection(db, "products"),
      where("category", "==", `${category}`),
    );
    const productsSnapshot = await getDocs(q);

    const data = productsSnapshot.docs.map((product) => {
      return { ...product.data(), id: product.id };
    });
    dispatch({
      type: "SET_PRODUCTS",
      payload: data,
    });
  };
  const setFavoriteProduct = async (product) => {
    const productRef = doc(db, "products", product.id);
    await updateDoc(productRef, { isLiked: !product.isLiked });
    getProductsFromFirebase();
  };
  const getUsersFromFirebase = async () => {
    const usersSnaphsot = await getDocs(collection(db, "users"));
    const users = usersSnaphsot.docs.map((user) => {
      return { ...user.data(), id: user.id };
    });
    dispatch({
      type: "SET_USERS",
      payload: users,
    });
  };
  const getProductsFromFirebase = async () => {
    const q = query(collection(db, "products"), orderBy("createdAt"));
    const productsSnapshot = await getDocs(q);
    const products = productsSnapshot.docs.map((product) => {
      return { ...product.data(), id: product.id };
    });

    dispatch({
      type: "SET_PRODUCTS",
      payload: products,
    });
  };
  const getProductDetailFromFirebase = async (id) => {
    const detailSnapShot = await getDoc(doc(db, "products", id));
    const data = { ...detailSnapShot.data(), id: detailSnapShot.id };
    dispatch({
      type: "SET_PRODUCT_DETAIL",
      payload: data,
    });
  };
  const getReviewsFromFirebase = async () => {
    const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
    const reviewSnapshot = await getDocs(q);
    const reviewList = reviewSnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });

    dispatch({
      type: "SET_REVIEWS",
      payload: reviewList,
    });
  };
  const deleteReview = async (review) => {
    const reviewRef = doc(db, "reviews", review.id);

    await deleteDoc(reviewRef);
    getReviewsFromFirebase();
  };
  const searchProduct = (searchedValue) => {
    const searchedProducts = state.products.filter((product) => {
      if (searchedValue) {
        return product.title.includes(searchedValue);
      } else {
        return;
      }
    });
    dispatch({
      type: "SET_SEARCHED_PRODUCTS",
      payload: searchedProducts,
    });
  };
  const createProduct = async (addedProduct) => {
    const productRef = collection(db, "products");
    const product = { ...addedProduct, category: state.productCategory };
    await addDoc(productRef, product);
  };
  const changeCategory = (category) => {
    dispatch({
      type: "CHANGE_CATEGORY",
      payload: category,
    });
  };
  const updateProductFirebase = async (updatedProduct, id) => {
    const updateRef = doc(db, "products", id);
    const product = { ...updatedProduct, category: state.productCategory };
    await updateDoc(updateRef, product);
  };
  const createNews = async (news) => {
    const newsRef = collection(db, "news");
    await addDoc(newsRef, news);
  };

  return (
    <appContext.Provider
      value={{
        products: state.products,
        detailProduct: state.detailProduct,
        cartItems: state.cartItems,
        reviews: state.reviews,
        favorite: state.favorite,
        searchedProducts: state.searchedProducts,
        news: state.news,
        newsDetail: state.newsDetail,
        addToCart,
        fetchCartItems,
        fetchCategoryProducts,
        setFavoriteProduct,
        getReviewsFromFirebase,
        deleteReview,
        getProductsFromFirebase,
        getProductDetailFromFirebase,
        getUsersFromFirebase,
        getFavoriteProducts,
        searchProduct,
        createProduct,
        changeCategory,
        updateProductFirebase,
        getCartItems,
        getNews,
        getDetailNews,
        changeProductCount,
        getCart,
        createNews,
      }}>
      {children}
    </appContext.Provider>
  );
}
