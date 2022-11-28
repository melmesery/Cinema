import { React, useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import Home from "../../Pages/Home";
import Movies from "../../Pages/Movies";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TvSeries from "../../Pages/TvSeries";
import TvSeriesDetails from "../../Pages/TvSeriesDetails";
import {
  trends_API,
  topMovies_API,
  topShows_API,
  newMovies_API,
  newShows_API,
  search_API,
} from "../../API";

function Layout() {
  const [trends, setTrends] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [newMovies, setNewMovies] = useState([]);
  const [topShows, setTopShows] = useState([]);
  const [newShows, setNewShows] = useState([]);

  const getTrends = async () => {
    const result = await axios.get(`${trends_API}`);
    setTrends(result.data.results);
  };

  const getTopMovies = async () => {
    const result = await axios.get(`${topMovies_API}`);
    setTopMovies(result.data.results);
  };

  const getTopShows = async () => {
    const result = await axios.get(`${topShows_API}`);
    setTopShows(result.data.results);
  };

  const getNewMovies = async () => {
    const result = await axios.get(`${newMovies_API}`);
    setNewMovies(result.data.results);
  };

  const getNewShows = async () => {
    const result = await axios.get(`${newShows_API}`);
    setNewShows(result.data.results);
  };

  const search = async (word) => {
    if (word === "") {
      return `<p> Not Found </p>`;
    } else {
      const result = await axios.get(
        `${search_API}`
      );
      setTrends(result.data.results);
      setTopMovies(result.data.results);
      setNewMovies(result.data.results);
      setTopShows(result.data.results);
      setNewShows(result.data.results);
    }
  };

  useEffect(() => {
    getTrends();
    getTopMovies();
    getNewMovies();
    getTopShows();
    getNewShows();
  }, []);

  return (
    <>
      {/* <Header search={search} /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={
            <Home
              topMovies={topMovies}
              newMovies={newMovies}
              topShows={topShows}
              newShows={newShows}
              trends={trends}
            />
          }
        />
        <Route
          path="/movies"
          element={<Movies topMovies={topMovies} newMovies={newMovies} />}
        />
        <Route
          path="/tv-series"
          element={<TvSeries newShows={newShows} topShows={topShows} />}
        />
        <Route path="tv-series/:id" element={<TvSeriesDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Layout;
