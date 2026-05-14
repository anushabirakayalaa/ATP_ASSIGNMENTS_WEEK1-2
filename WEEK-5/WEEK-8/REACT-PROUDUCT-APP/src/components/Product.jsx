import { useLocation } from 'react-router';
// useNavigate,useLocation ---> these hooks,have very good communication 
function Product() {

// read state sent by the useNAvigate() hook

  const {state} =useLocation()
//   console.log(state?.product)
  return (
    <div className='flex flex-col sm:flex-row justify-between mt-14'>
        <div className='w-2/5 '>
        <img src={state?.product?.image} className='w-96' alt={state?.product?.title || ''} />
        </div>
        <div className='w-3/5 p-2 sm:p-10'>
        <p className='text-2xl mb-10'>{state?.product?.title}</p>
        <p className='text-2xl mb-10'>{state?.product?.description}</p>
        <p className='text-2xl mb-10'>{state?.product?.price}</p>
        <p className='text-2xl mb-10'>{state?.product?.category}</p>
        </div>
    </div>
  )
}

export default Product