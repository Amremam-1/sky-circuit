import Banner from "../components/banner/Banner"
import Helmet from "../components/helmet/Helmet"

const Home = () => {
  return (
    <Helmet title="Home">
      <div className="banner-main-area">
        <Banner />
      </div>
    </Helmet>
  )
}

export default Home
