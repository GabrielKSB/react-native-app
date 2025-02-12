// In App.js in a new project

import * as React from 'react';
import {AuthContextProvider} from "./context/AuthContext"
import {Routes} from "./routes"



export default function App() {
  return (     
      <AuthContextProvider>
        <Routes></Routes>
      </AuthContextProvider>
  );
}