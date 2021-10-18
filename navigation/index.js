import React from 'react'
import Auth_route from './Auth_route'
import { AuthProvider } from './AuthProvider'

function Providers() {
    return (
       <AuthProvider>
           <Auth_route/>
       </AuthProvider>
    )
}

export default Providers