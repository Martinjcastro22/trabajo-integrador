import data from "../data";

function Card(){
    return (
      
         <div className='col md-3 mb-4 card-container'>
          {data.map((products) => (
            <div key={products.sku} className='card' style={{width: '16rem'}}>
              <div className='card-img-top'>
                <img src={products.Image} alt={products.name} style={{width: '100%', height: '200px'}} />
              </div>
              <div className='card-body'>
              <h3 className='card-title'>{products.name}</h3>
              <p className='card-text'>{products.descripcion}</p>
              <p className='card-text'>${products.precio}</p>
              <a href="#" className='btn btn-primary'>Comprar</a>
              </div>
              
            </div>
          ))}
         </div>  
      
    ) 
  }

  export default Card;