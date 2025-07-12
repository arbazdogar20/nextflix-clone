import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import { useEffect, useState } from "react";
import Row from "../components/Row";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovies,
  getMoviesStatus,
  selectAllMovies,
} from "../slices/movieSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const status = useSelector(getMoviesStatus);
  const movies = useSelector(selectAllMovies);
  const isLoading = status === "loading";

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div
      className="page"
      style={{ backgroundColor: "#111", overflow: "hidden" }}
    >
      <Navbar />
      <Banner />

      {Object.keys(movies).map((title) => (
        <Row
          key={title}
          title={title}
          movies={movies[title]}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
};

export default HomePage;
