import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import TvShows from "../pages/TvShows";
import Account from "../pages/Account";
import MovieDetails from "../pages/MovieDetails";

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/tvshows" element={<TvShows />}/>
        <Route path="/account" element={<Account />}/>
        <Route path="/moviedetails/:id" element={<MovieDetails />}/>
    </Routes>
  )
}

export default Router

// <Route
//         exact
//         path="/:gender/:category"
//         element={
//           <Suspense fallback={<Error />}>
//             <Shop />
//           </Suspense>
//         }
//       />