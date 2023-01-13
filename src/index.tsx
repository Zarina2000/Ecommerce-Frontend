import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Sidebar } from './components/sidebar';
 import { AddProduct } from './components/addProduct';
 import { ViewProduct } from './components/products';
 import { Login } from './components/login';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { QueryClientProvider,QueryClient } from 'react-query';
const queryClient = new QueryClient();
const router = createBrowserRouter([
  
  {
    path : "/", element :<App/>, children : [
      { path : "home", element : <Sidebar/>, children : [
          // { path : "products", element : <Products/> } 
        ]
      },
      { path : "AddProduct", element : <AddProduct/> },
      { path : "products", element : <ViewProduct/> } 
    ]
  }

]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
  <RouterProvider router={router}/>
  </QueryClientProvider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
