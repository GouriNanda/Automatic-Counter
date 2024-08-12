import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
       <MDBNavbar light bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className='text-light fw-bolder'>
            <img
              src='https://cdn.dribbble.com/users/79396/screenshots/3175195/counter.gif'
              height='30'
              alt=''
              loading='lazy'
            />
            Counter-App
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
