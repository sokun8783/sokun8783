import React from 'react';
import data from './data';
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        
        <div>
          <a className="brand" href=""><i class="fa fa-align-justify" aria-hidden="true"></i></a>
          <a className="brand" href="index.html">Marunix Cambodia</a>
        </div>
        <div>
          <a className="sub" href="pe.html">PE</a>
          </div>
          <div>
          <a className="sub" href="information.html">Information</a>
          </div>
          <div>
          <a className="sub" href="formchange.html">4M</a>
          </div>
          <div>
            <form className="form">
              <label>
               <input type="text" name="name"></input>
              </label>
               <input type="submit" value="Search" />
            </form>
          </div>
        <div>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {
            data.products.map(product => (
              <div key={product._id} className="card">
            <a href={` /product/${product._id}`}>
              <img className="medium" 
                   src={product.image} 
                   alt={product.name} />
            </a>
            <div className="card-body">
              <a href={` /product/${product._id}`}>
                <h2>{product.name}</h2>
              </a>
              <div className="rating">
                <span><i className ="fa fa-star"></i></span>
                <span><i className ="fa fa-star"></i></span>
                <span><i className ="fa fa-star"></i></span>
                <span><i className ="fa fa-star"></i></span>
                <span><i className ="fa fa-star"></i></span>
              </div>
            </div>
          </div>
            ))
          }
        </div>
      </main>
      <footer className="row">
        <div><h3>All right reserved</h3></div>
        <div>
          <a className="sub-f" href="aboutus.html">About Us</a>
          </div>
          <div>
          <a className="sub-f" href="contactus.html">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
