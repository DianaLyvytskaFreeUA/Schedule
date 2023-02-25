import React from 'react';
import './App.css';
import { ScheduleFilter } from './components/ScheduleFilter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPanel from './pages/AdminPanel';
import { useSelector } from 'react-redux';
import { selectStatus } from './features/entities/entitiesSlice';


function App() {
  const status = useSelector(selectStatus);

  return (
    <>
      {status === 'succeeded' ?
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ScheduleFilter />}/>
          <Route path="admin-panel" element={<AdminPanel/>}/>
        </Routes>
      </BrowserRouter>
       : <p>Loading...</p>
      }
    </>

  );
}

export default App;

