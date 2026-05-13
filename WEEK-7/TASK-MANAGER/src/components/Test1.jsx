function Test1(props)  
//(props)--->
// //{}
{
    let {message1,message2} =props.messages
    // console.log(x)
    //state
    return(
        <div className="bg-amber-300 p-10" m>
            <h1>Test1 Component.</h1>
            <p className='text-3xl'>{message1}</p>
            <p className='text-3xl'>{message2}</p>
        </div>
    )
}
export default Test1;