import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Home.scss';
import { Link } from 'react-router-dom';


export default function Home() {

 const[listData, setListData] = useState([]);

 const getListData = async() => {
    await axios
    .get('https://api.escuelajs.co/api/v1/products')
    .then(res => {
        console.log(res.data);
        setListData(res.data);
    })
    .catch(e => {
        console.log(e.response.data);
    })
 }

 useEffect(() => {
    getListData();
 }, []);

  return (
    <div className="contentHome">
        <Link to="/add"><button type="button" className="btn btn-primary" style={{marginBottom: "20px"}}>Add</button></Link>
        <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Descriptio</th>
                                <th>Action</th>
                            </tr>
                        </thead>
      {
      listData.length > 0 ? 
        listData.map((item, index) => {
            return(
                    <tbody>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.price}</td>
                            <td>
                                <button type="button" className="btn btn-warning" style={{marginRight: "10px"}}>Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                );
        })
        :
        null
    }
    </table> 
    </div>
  )
}
