//import { Footer, Header, Sidebar } from 'components'
import React from 'react';
import {Navigate, Route, Routes } from 'react-router-dom';
import AppRoutes from '../routes/index'







const DefaultLayout:React.FC = () => {

  return (
        <div>
          <Routes>
            {AppRoutes.map((prop, key) => {
              if (prop.redirect) {
                return <Route path={prop.path} element={<Navigate to={prop.pathTo} replace/> } key={key} />
              } else {
                return <Route path={prop.path} element={prop.component} key={key} />
              }
            })}
          </Routes>
        </div>
    
  )
}

export default DefaultLayout
