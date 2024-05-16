const RestaurantCard=({restaurant})=>{
    let{info,distance}=restaurant;
  return(
    <div className="card">
      <img
        src={
          info.image.url
        }
      />
      <h2>{info?.name}</h2>
      <h3>{info?.cuisine[0].name}</h3>
      <h4>{distance} </h4>

    </div>
  )
}

export default RestaurantCard