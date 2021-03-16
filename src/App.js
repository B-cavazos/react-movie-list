import React, { useState } from 'react'
import MovieForm from './FormComponent'
import TableComponent from './movieList'
import movies from './movieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './RemoveMovie';

    const App = () => {

      const [listData, setListData] = React.useState({
        list: movies,
        isShowList: true,
      });
     
      function handleRemove(id) {
        const newList = listData.list.filter((movie) => movie.id !== id);
     
        setListData({ ...listData, list: newList });
      }
     
      if (!listData.isShowList) {
        return null;
      };




      return (
        <div className="container">
        <header className="row">
          <div className="col text-center pt-4">
            <h1>Abe and Britt's Movie List</h1>
          </div>
        </header>
        <MovieForm/>
        <TableComponent/>
      </div>
      );
    };


export default App;
