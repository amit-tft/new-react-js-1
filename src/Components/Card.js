import {IMG_URL} from '../utils/constants'

const Card = (props)=> {
   
    const {name, cloudinaryImageId, avgRating, cuisines, costForTwo} = props.data.info;
    const {deliveryTime} = props.data.info.sla;
    let url =`${IMG_URL}${cloudinaryImageId}`;

   return (
     <div className='card'>
     <div className='cardImg'>
     <img src={url}></img>
     </div>
     <div className='cardContent'>
     <h2> {name}</h2>
     <p>Cuisines: {cuisines.join(" ")}</p>
     <p>Rating: {avgRating}</p>
     <p>Price: {costForTwo.split(" ")[0]}</p>
     <p>Delivery Time: {deliveryTime} Minutes</p>
     </div>
     </div>
   )

}

export default Card