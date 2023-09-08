import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'
import SearchBar from './components/searchBar.jsx'
import PostList from './components/postList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <NavBar/>
    <SearchBar/>
    <PostList/>
  </React.StrictMode>
)