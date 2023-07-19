import React, { useContext, useState } from 'react';
import { MyContext } from '../Context/Context';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Dropdown,Image }from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const { products } = useContext(MyContext);
  const [searchQuery, setSearchQuery] = useState('');
const ab=useNavigate()
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      
      <Dropdown >
      
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='bg-transparent border-0 '>
      <Form className="d-flex ">
      
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 my-2"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Button className="my-1 my-2" variant="outline-success">Search</Button>
      </Form>

      </Dropdown.Toggle>

      <Dropdown.Menu align="end"  className='overflow-hidden'>
      {filteredProducts.map((item) => (
        <Dropdown.Item href="#/action-1" className='w-25 ' onClick={()=>ab(`/displayProduct/${item.id}`)}>  <Image className='w-25' src={item.src}  /> {item.name}</Dropdown.Item>
      ))}
        
      </Dropdown.Menu>
    </Dropdown>

    </div>
  );
};

export default Search;
