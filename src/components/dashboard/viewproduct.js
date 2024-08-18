import { getProducts } from '../../services/api';
import {useEffect, useState} from 'react'

const ViewProduct =()=>{
    const [product,setProducts]=useState([]);
    useEffect(()=>{
        fetch();
        console.log(product)
    },[])

    async function fetch(){
        const data = await getProducts();
        setProducts(data);
    }
  
return(
<>
{product.map((products) => (

              <div className="list-cont2">
                <div className="pimage">
                  <img src={products.image}></img>
                </div>
                <div className="pdetails">
                  <div className="pprice">
                    {" "}
                    <h4>Rs {products.price}</h4>{" "}
                  </div>
                  <div className="ptitle">
                    <p>{products.title}</p>
                    <p>{products.description}</p>
                  </div>
                </div>
              </div>
          ))}


</>
)

}
export default ViewProduct