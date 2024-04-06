import React, {useState} from 'react';
import axios from 'axios';
import './product.scss';

export default function AddData() {


  const[title, setTitle] = useState("");
  const[price, setPrice] = useState("");
  const[desc, setDesc] = useState("");

  const saveData = async(e) => {
    e.preventDefault();
    console.log(title);
    console.log(price);
    console.log(desc);
    const formData = new FormData();

    formData.append('title', title);
    formData.append('price', price);
    formData.append('description', desc);
    formData.append('categoryId', 1);
    formData.append('images', ["https://placeimg.com/640/480/any"]);

    await axios.post('https://api.escuelajs.co/api/v1/products/', formData,{
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    }).then(res => {
            console.log(res);
        }
    ).catch(e => {
        console.log(e);
    })
  }

  return (
    <div className="productContent">
      <form onSubmit={saveData}>
          <div className="form-group">
          <label for="title">Title</label>
          <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Price</label>
        <input type="number" className="form-control" id="price" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Description</label>
        <textarea className="form-control" id="desc" placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)}/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
