import React from 'react';
import NavBar from './components/NavBar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import SeatLayout from './pages/SeatLayout';
import MyBookings from './pages/MyBookings';
import Favortie from './pages/Favortie';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import Layout from './pages/admin/Layout';
import Dashboard from './pages/admin/Dashboard';
import AddShows from './pages/admin/AddShows';
import ListShows from './pages/admin/ListShows';
import ListBookings from './pages/admin/ListBookings';

//to use clerk: clerk.com->dashbord->new project->steps li bdde yhon
//kermel multiple account : bl project: configure->sessions->multi-session handling
function App() {
  const location = useLocation();
  return (
    <>
      <Toaster />
      {!location.pathname.includes('/admin') && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/favorite" element={<Favortie />} />
        <Route path="/admin/*" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-shows" element={<AddShows />} />

          <Route path="list-shows" element={<ListShows />} />
          <Route path="list-bookings" element={<ListBookings />} />
        </Route>
      </Routes>
      {location.pathname !== '/admin' && <Footer />}
    </>
  );
}

export default App;
