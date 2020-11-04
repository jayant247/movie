import React from "react";
import { connect } from "react-redux";
import { getMovies } from "../actions";
import Header from "./Header";
import Footer from "./Footer";

class Dashboard extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }

  componentDidMount() {
    let object = {}
    this.props.getMoviesList(object);
  }

  render() {
    console.log("this.props", this.props)
    return <React.Fragment>
      <Header />


      <section id="blog" class="section-padding">
        <div class="container">
          <div class="section-header text-center">

            <p class="heading">POPULAR GAMES</p>
          </div>
          <div class="row">
            <div class="col-lg-2 col-md-4col-sm-12 col-xs-12 blog-item">
              <div class="blog-item-wrapper wow fadeInLeft" data-wow-delay="0.3s">
                <div class="blog-item-img">
                  <a href="single-post.html">
                    <img src="assets/img/blog/img1.jpg" alt="" />
                  </a>
                </div>
                <div class="blog-item-text">
                  <h3>
                    <a href="single-post.html">Suspendisse dictum non velit</a>
                  </h3>

                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-4col-sm-12 col-xs-12 blog-item">
              <div class="blog-item-wrapper wow fadeInUp" data-wow-delay="0.6s">
                <div class="blog-item-img">
                  <a href="single-post.html">
                    <img src="assets/img/blog/img2.jpg" alt="" />
                  </a>
                </div>
                <div class="blog-item-text">
                  <h3>
                    <a href="single-post.html">Remarkably Did Increasing</a>
                  </h3>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-4col-sm-12 col-xs-12 blog-item">
              <div class="blog-item-wrapper wow fadeInRight" data-wow-delay="0.3s">
                <div class="blog-item-img">
                  <a href="single-post.html">
                    <img src="assets/img/blog/img3.jpg" alt="" />
                  </a>
                </div>
                <div class="blog-item-text">
                  <h3>
                    <a href="single-post.html">Changing the topic scope</a>
                  </h3>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-4col-sm-12 col-xs-12 blog-item">
              <div class="blog-item-wrapper wow fadeInRight" data-wow-delay="0.3s">
                <div class="blog-item-img">
                  <a href="single-post.html">
                    <img src="assets/img/blog/img3.jpg" alt="" />
                  </a>
                </div>
                <div class="blog-item-text">
                  <h3>
                    <a href="single-post.html">Changing the topic scope</a>
                  </h3>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-4col-sm-12 col-xs-12 blog-item">
              <div class="blog-item-wrapper wow fadeInRight" data-wow-delay="0.3s">
                <div class="blog-item-img">
                  <a href="single-post.html">
                    <img src="assets/img/blog/img3.jpg" alt="" />
                  </a>
                </div>
                <div class="blog-item-text">
                  <h3>
                    <a href="single-post.html">Changing the topic scope</a>
                  </h3>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-4col-sm-12 col-xs-12 blog-item">
              <div class="blog-item-wrapper wow fadeInRight" data-wow-delay="0.3s">
                <div class="blog-item-img">
                  <a href="single-post.html">
                    <img src="assets/img/blog/img3.jpg" alt="" />
                    <span class="rating text-color">90%</span>
                  </a>
                </div>
                <div class="blog-item-text">
                  <h3>
                    <a href="single-post.html">Changing the topic scope</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </React.Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    moviesLoaded: state.moviesLoaded,
  }
};

function mapDispatchToProps(dispatch) {
  return {
    getMoviesList: (object) => dispatch(
      getMovies()
    ),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
