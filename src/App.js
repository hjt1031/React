import React from 'react';
import PropTypes from "prop-types";

/*************************************** props start*/
// const foodILike = [
//   {
//     id : 1,
//     name: "Kimchi",
//     image:
//       "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
//     rating : 5
//   },
//   {
//     id : 2,
//     name: "Samgyeopsal",
//     image:
//       "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
//   },
//   {
//     id : 3,
//     name: "Bibimbap",
//     image:
//       "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
//     rating : 4.9
//   },
//   {
//     id : 4,
//     name: "Doncasu",
//     image:
//       "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
//     rating : 4.8
//   },
//   {
//     id : 5,
//     name: "Kimbap",
//     image:
//       "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
//     rating : 4.7
//   }
// ];

// function Food ({name,picture,rating}){
//     return <div>
//         <h2>>I like {name}</h2>
//         <img src={picture} />
//         <h4>{rating}/5.0</h4>
//     </div>
// }

// Food.propTypes = {
//   name : PropTypes.string.isRequired,
//   picture : PropTypes.string.isRequired,
//   rating : PropTypes.number.isRequired
// };

// function App() {  
//     return ( //map 안에 dish 는 아무값이나 줘도 상관없다 object 형식
//     <div>
//        {foodILike.map(dish => (
//          <Food key={dish.id} name={dish.name} picture={dish.image} rating = {dish.rating} />
//        ))}
//     </div>
//     );

// }


/*************************************** props end*/



class App extends React.Component{
  // constructor(props){
  //   super(props)
  //   console.log("hello");
  // }
  // state = {
  //   count: 0
  // }
  // add = () => {
  //   this.setState(current => ({count : this.state.count + 1}));
  // };
  // minus = () => {
  //   this.setState(current => ({count : this.state.count - 1}));
  // };
  // componentDidMount(){
  //   console.log("component rendered")
  // }
  // componentDidUpdate(){
  //   console.log('I just update');
  // }
  // componentWillUnmount(){
  //   console.log('Goodbye cruel world');
  // }
  // render(){
  //   console.log("I m rendering");
  //   return <div>
  //     <h1>The number is : {this.state.count}</h1>
  //     <button onClick={this.add}>Add</button>
  //     <button onClick={this.minus}>Minus</button>
  //   </div>
  // }
  state = {
    isLoading: true
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isLoading  : false
      })
    }, 6000)
  }

  render(){
    const {isLoading} = this.state;
    return <div>{this.state.isLoading ? "Loading" : "We are ready"}</div>
  }

}
 
export default App;
 