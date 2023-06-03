import React from 'react';
import './App.css';
import Colors from './components/Colors';
import DetailsThumb from './components/DetailsThumb';

class App extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "iPhone 12 Mini (128 GB)-Black",
        "src": [
            "https://www.primejigar.com/wp-content/uploads/2021/02/71uuDYxn3XL._SL1500_.jpg",
            "https://res.cloudinary.com/grover/image/upload/f_webp,q_auto/b_white,c_pad,dpr_2.0,h_500,w_520/f_auto,q_auto/v1630929032/ysjyzdrcef26f88bg5gt.png",
            "https://m.media-amazon.com/images/I/81mrpbPBRwS._SX466_.jpg",
            "https://m.media-amazon.com/images/I/81tJbh5cAXL._SX466_.jpg"
          ],
        "description": "",
        "content": "iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system.",
        "price": 336,
        "colors":["red","black","crimson","teal"],
        "count": 1
      },
      {
        "_id": "2",
        "title": "iPhone 12 Mini (128 GB)-Black",
        "src": [
            "https://www.primejigar.com/wp-content/uploads/2021/02/71uuDYxn3XL._SL1500_.jpg",
            "https://res.cloudinary.com/grover/image/upload/f_webp,q_auto/b_white,c_pad,dpr_2.0,h_500,w_520/f_auto,q_auto/v1630929032/ysjyzdrcef26f88bg5gt.png",
            "https://m.media-amazon.com/images/I/81mrpbPBRwS._SX466_.jpg",
            "https://m.media-amazon.com/images/I/81tJbh5cAXL._SX466_.jpg"
          ],
        "description": "",
        "content": "iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system.",
        "price": 336,
        "colors":["red","black","crimson","teal"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                </div>
                <div className="para">
                  <p>${item.price}</p>
                </div>
              

                <p>{item.description}</p>
                <p>{item.content}</p>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <button className="cart">Add to cart</button>

              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default App;