import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { setLogout } from '../redux/features/authSlice';
import { searchTours } from '../redux/features/tourSlice';
import { Link, useNavigate } from 'react-router-dom';
import decode from 'jwt-decode';

const Header = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState('');
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = user?.token;

  if (token) {
    const decodedToken = decode(token);
    if (decodedToken.exp * 1000 < new Date().getTime()) {
      dispatch(setLogout());
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      dispatch(searchTours(search));
      navigate(`/tours/search?searchQuery=${search}`);
      setSearch('');
    } else {
      navigate('/');
    }
  };

  const handleLogout = () => {
    dispatch(setLogout());
  };

  return (
    <MDBNavbar fixed="top" expand="lg" style={{ backgroundColor: '#cce0ff' }}>
      <MDBContainer>
        <MDBNavbarBrand
          style={{ color: '#606080', fontWeight: '600', fontSize: '22px' }}
        >
          <Link to="/">TouReview</Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toogle navigation"
          onClick={() => setShow(!show)}
          style={{ color: '#606080' }}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse show={show} navbar>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
            {user?.result?._id && (
              <h5
                style={{
                  marginRight: '30px',
                  marginTop: '27px',
                  color: 'blue',
                }}
              >
                Logged in as: {user?.result?.name}
              </h5>
            )}
            <MDBNavbarItem>
              <MDBNavbarLink>
                <p className="header-text">
                  <Link to="/">Home</Link>
                </p>
              </MDBNavbarLink>
            </MDBNavbarItem>
            {user?.result?._id && (
              <>
                <MDBNavbarItem>
                  <MDBNavbarLink>
                    <p className="header-text">
                      <Link to="/addTour">AddTour</Link>
                    </p>
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink>
                    <p className="header-text">
                      {' '}
                      <Link to="/dashboard">Dashboard</Link>
                    </p>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </>
            )}
            {user?.result?._id ? (
              <MDBNavbarItem>
                <MDBNavbarLink>
                  <p className="header-text" onClick={() => handleLogout()}>
                    <Link to="/login">Logout</Link>
                  </p>
                </MDBNavbarLink>
              </MDBNavbarItem>
            ) : (
              <MDBNavbarItem>
                <MDBNavbarLink>
                  <p className="header-text">
                    <Link to="/login">Login</Link>
                  </p>
                </MDBNavbarLink>
              </MDBNavbarItem>
            )}
          </MDBNavbarNav>
          <form className="d-flex input-group w-auto" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Search Tour"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div style={{ marginTop: '5px', marginLeft: '5px' }}>
              <MDBIcon fas icon="search" />
            </div>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
