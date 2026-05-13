import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router' // DOM hooks are in react-router-dom
function ProductList() {
  let [products,setProducts,getProducts]=useState([])
  let [loading,setLoading]=useState(false)
  let [error,setError]=useState(null)
  let [filterProducts,setFilteredProducts]=useState([])
  let [searchTerm,setSearchTerm]=useState([])
  const navigate= useNavigate()


//navigate to product component
const gotoProduct=(productObj)=>
{
  //navigation logic
  // while navigating transfer product object too
  navigate('/product',{state:{product:productObj}})
  // if state also requiuuired we can send state also

}

  useEffect(() => {
    async function getProducts() {
      setLoading(true)
      try{
      let res=await fetch("https://fakestoreapi.com/products")
      if(res.status===200)
      {
        // extract json data
        let productsData=await res.json()
        // update stae
        setProducts(productsData)
      }else{
        throw new Error('Failed to fetch')
      }
    }
    catch(err)
    {
      setError(err)
    }
    finally{
      setLoading(false)
    }
    }
    getProducts()
  }, [])

  // search logic
  const searchProduct = (e)=>
  {
    const value = e.target.value
    setSearchTerm(value)

    const filtered=products.filter((product)=>
      product.title.toLowerCase().includes(value.toLowerCase)
    )
    setFilteredProducts(filtered)
  }

  if(loading===true)
  {
    return <p className='text-center text-2xl text-blue-300'>loadinggg.....</p>
  }
  if (error !== null) {
    return <p className='text-center text-2xl text-red-300'>{error.message}</p>
  }
  return (
    //search

    // products
    <div className='grid 
                    grid-cols-1 
                    sm:grid-cols-2
                     md:grid-cols-3 
                     lg:grid-cols-4
                     gap-12
                     mt-10
                     text-center'>
      {
        products.map((productObj) => (
          <div
            onClick={() => gotoProduct(productObj)}
            key={productObj.id}
            className='shadow-md p-10 rounded-2xl'
          >
            <img
              src={productObj.image}
              alt={productObj.title}
              className='h-44 mx-auto mb-10 object-contain block'
            />
            <p>{productObj.title}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ProductList