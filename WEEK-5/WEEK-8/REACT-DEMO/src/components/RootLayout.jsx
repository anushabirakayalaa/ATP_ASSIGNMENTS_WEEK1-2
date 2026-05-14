import Header from './Header'
import Footer from './Footer'
import {Outlet} from 'react-router'

function RootLayout() {
  return (
    <div>
        <Header/>
            {/* componet placeholder */}
        <div className='mx-20 min-h-screen'>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default RootLayout

                                               




// placeholder for a compenent---react-rouetr gives a