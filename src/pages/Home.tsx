import Banner from "../components/layout/Banner"
import NewReleased from "../components/movie/NewReleased"
import Trending from "../components/movie/Trending"

const Home = () => {
  return (
    <div>
        <Banner />
        <Trending />
        <NewReleased />
    </div>
  )
}

export default Home