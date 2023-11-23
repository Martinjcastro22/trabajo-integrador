import Card from "./Card";

function Products () {

    return (
        
    <div className='container main-container'>
      <div className='row '>
        <div id="products" className='col  text-center'>
          <h1>Nuestros Productos</h1>
        </div>
      </div>
      <div className='row '>
        <Card />
      </div>
    </div>
        
    );
}

export default Products;