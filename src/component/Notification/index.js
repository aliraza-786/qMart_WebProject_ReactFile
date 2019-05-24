import React from 'react';
import { render } from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
 
const App = () => {
  return (
    <div>
        {/*Your others component*/}
      <ToastContainer />
    </div>
  );
};
 
render(
  <App/>,
  document.getElementById('root')
);