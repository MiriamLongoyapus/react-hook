import React,{useState,useEffect} from "react";
import './style.css';
import{createBrowserRouter,RouterProvider,Route,Link} from "react-router-dom"
const Products = ()=>{
    const [products,setProducts] = useState ([]);
    const [loading,setLoading ] =useState(false)
    useEffect (()=>{
        (async()=>{
            await getProducts()
        })();
    },[]);
    const getProducts = async ()=>{
       try{
        setLoading (true)
        const response = await fetch ('https://dummyjson.com/products');
        const result = await response.json()
        setProducts(result.products);
        setLoading(false);
       }catch (error){
        console.log(error.mesage);
       }
    };
    console.log({products});
    if(loading){
        return <h1>Loading...</h1>
    }
    return (
      <div>
 <Link to={`/AddProducts/` }className="button">
            <button type="submit" className="add">Add a new product</button >
          </Link>
        <div className="products">
        {products.map(item =>(
          <div  key={item.id}>
          <img  alt="" src ={item.images[1]} />
          <h3>{item.title}</h3>
          <h3>Ksh {item.price}</h3>
          <h3>{item.discountPercentage}%</h3>
          <Link to={`/product/${item.id}` }className="button">
            <button type="submit" className="details">View Details</button >
          </Link>
            </div>
        ))}
      </div>
      </div>
    )  ;
    };
export default Products;
