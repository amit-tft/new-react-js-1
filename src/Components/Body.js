import {restaurants} from '../utils/mockData'
import Card from "./Card";
import ShimmerUI from './ShimmerUi';
import {useState, useEffect} from 'react';

const Body = ()=> {

   const [restaurantsList, setRestaurantsList ] = useState([]);

   useEffect(()=> {
      api();
   }, []);

   const api = async()=> {
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7369509&lng=83.4213365&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING%20Request%20Method:%20GET');
      const jsonData = await data.json();
      const resData= jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      setRestaurantsList(resData);
   }

    return restaurantsList.length===0 ? <div id='shimmerContainer'>
    <ShimmerUI/>
    <ShimmerUI/>
    <ShimmerUI/>
    <ShimmerUI/>
    <ShimmerUI/>
    <ShimmerUI/>
    <ShimmerUI/>
    <ShimmerUI/>
    <ShimmerUI/>
    <ShimmerUI/>
    <ShimmerUI/>
    <ShimmerUI/>
   </div>  :  (
      <div id='body'>
         <div id='search'>
         <button onClick={()=> {
           const data= restaurantsList.filter((res)=> res.info.avgRating>4)
           setRestaurantsList(data);
         }} id='filter'>Top Rated Restaurants</button>
         </div>
         <div id='restro'>
          {
             restaurantsList.map(res=> <Card  data={res} key= {res.info.id}/>)
          }
         </div>
      </div>
    )
 }

 export default Body