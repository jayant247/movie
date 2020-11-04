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
      
        <div class="row">
		<div class="col-lg-9 col-md-8 col-sm-12 col-xs-12" >
		  <div class="section-header text-center">
         
          <p class="heading">RECENTLY REVIEWED</p>
        </div>
          <div class="col-lg-12  blog-item">
            <div class="blog-item-wrapper wow fadeInLeft" data-wow-delay="0.3s">
			<div class="row">
              <div class="col-lg-4 blog-item-img">
                <a href="single-post.html">
                  <img src="assets/img/blog/img1.jpg" alt="" />
				   <span class="rating text-color">90%</span>
                </a>                
              </div>
			  <div class="col-lg-8">
              <div class="blog-item-text"> 
                <h5>
                Suspendisse dictum non velit
                </h5>
				<p>Suspendisse dictum non velit Suspendisse dictum non velitSuspendisse dictum non velit
				Suspendisse dictum non velit Suspendisse dictum non velit </p>
</div>
</div>
                             </div>
            </div>
          </div>
 <div class="col-lg-12  blog-item">
            <div class="blog-item-wrapper wow fadeInLeft" data-wow-delay="0.3s">
			<div class="row">
              <div class="col-lg-4 blog-item-img">
                <a href="single-post.html">
                  <img src="assets/img/blog/img1.jpg" alt="" />
                </a>                
              </div>
			  <div class="col-lg-8">
              <div class="blog-item-text"> 
                <h5>
                Suspendisse dictum non velit
                </h5>
</div>
</div>
                             </div>
            </div>
          </div>

         
         
		 
		  </div>
		  <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12" >
		   <div class="section-header text-center">
         
          <p class="heading">MOST ANTICIPATED</p>
        </div>
		  <div class="col-lg-12 blog-item">
			
            <div class="blog-item-wrapper wow fadeInRight" data-wow-delay="0.3s">
			<div class="row">
			<div class="col-lg-6">
              <div class="blog-item-img">
                <a href="single-post.html">
                  <img src="assets/img/blog/img3.jpg" alt="" />
                </a>                
              </div>
			  </div>
			  <div class="col-lg-6">
              
                <span>Changing the topic scope</span>
                <p>12-05-1992</p>
                
            </div>
			</div>
          </div>
          </div>
		   <div class="col-lg-12 blog-item">
			
            <div class="blog-item-wrapper wow fadeInRight" data-wow-delay="0.3s">
			<div class="row">
			<div class="col-lg-6">
              <div class="blog-item-img">
                <a href="single-post.html">
                  <img src="assets/img/blog/img3.jpg" alt=""/>
                </a>                
              </div>
			  </div>
			  <div class="col-lg-6">
              
                <span>Changing the topic scope</span>
                <p>12-05-1992</p>
                
            </div>
			</div>
           
          </div>
          </div>
		   <div class="section-header text-center">
         
          <p class="heading">COMING SOON </p>
        </div>
		  <div class="col-lg-12 blog-item">
			
            <div class="blog-item-wrapper wow fadeInRight" data-wow-delay="0.3s">
			<div class="row">
			<div class="col-lg-6">
              <div class="blog-item-img">
                <a href="single-post.html">
                  <img src="assets/img/blog/img3.jpg" alt=""/>
                </a>                
              </div>
			  </div>
			  <div class="col-lg-6">
              
                <span>Changing the topic scope</span>
                <p>12-05-1992</p>
                
            </div>
			</div>
           
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
