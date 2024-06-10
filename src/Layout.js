import React from 'react'
import Routing from './Routing'

function Layout() {
  return (
      <div className="flex flex-col min-h-screen">       
        <main className="flex-1">
          <Routing />
        </main>
      </div>
  )
}

export default Layout