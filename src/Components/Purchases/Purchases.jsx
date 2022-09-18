import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// style scss
import './_purchased_style.scss'
// mui
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// bootstrap
import Table from 'react-bootstrap/Table';

export default function Purchased() {
  const storeData = useSelector(state => state);
  const [searchData, setSearchData] = useState({ product: "", customer: "", date: "" })
  const [result, setResult] = useState([]);

  const search = () => {
    if (searchData.product !== "" && searchData.customer === "" && searchData.date === "") {
      console.log("search product only");
      let arr = [...storeData?.purchases];
      const filteredProduct = arr.filter(arr => arr.productId === searchData.product);
      setResult({ ...storeData, purchases: filteredProduct });
    } else if (searchData.customer !== "" && searchData.product === "" && searchData.date === "") {
      console.log("search customer only");
      let arr = [...storeData?.purchases];
      const filteredCustomer = arr.filter(arr => arr.customerId === searchData.customer);
      setResult({ ...storeData, purchases: filteredCustomer });
    } else if (searchData.date !== "" && searchData.product === "" && searchData.customer === "") {
      console.log("search date only");
      let arr = [...storeData?.purchases];
      const filteredCustomer = arr.filter(arr => arr.date === searchData.date);
      setResult({ ...storeData, purchases: filteredCustomer });
    } else if (searchData.customer !== "" && searchData.product !== "" && searchData.date === "") {
      console.log("search customer & products ");
      let arr = [...storeData?.purchases];
      const filteredPurchases = arr.filter(arr => arr.customerId === searchData.customer).filter(arr => arr.productId === searchData.product);
      setResult({ ...storeData, purchases: filteredPurchases });
    } else if (searchData.customer !== "" && searchData.product !== "" && searchData.date !== "") {
      console.log("search customer & products & date");
      let arr = [...storeData?.purchases];
      const filteredPurchases = arr.filter(arr => arr.customerId === searchData.customer).filter(arr => arr.productId === searchData.product).filter(arr => arr.date === searchData.date);
      setResult({ ...storeData, purchases: filteredPurchases });
    } else {
      console.log("search all");
      setResult({ ...storeData })
    }
  }

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value })
  }

  return (
    <Container>
      <div className='purchased p-3 p-md-5 my-3 my-1 mx-md-5' >
        <Typography className='w-100' variant="h4" >Purchased Search</Typography>
        <br />
        <FormControl fullWidth>
          <InputLabel >Product</InputLabel>
          <Select label="Age" name="product" onChange={handleChange}>
            <MenuItem value="">select</MenuItem>
            {storeData.products.map((item, index) => {
              return <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
            })}
          </Select>
        </FormControl>
        <br />
        <br />
        <FormControl fullWidth>
          <InputLabel >Customer</InputLabel>
          <Select label="Age" name='customer' onChange={handleChange}>
            <MenuItem value="">select</MenuItem>
            {storeData.customers.map((item, index) => {
              return <MenuItem key={index} value={item.id}>{item.first} {item.last} ID:{item.id}</MenuItem>
            })}
          </Select>
        </FormControl>
        <br />
        <br />

        <Stack component="form" noValidate spacing={3}>
          <TextField
          onChange={handleChange}
            id="date"
            label="date"
            name='date'
            type="date"
            sx={{ width: "30%" }}
            InputLabelProps={{
              shrink: true,
            }}
          />

        </Stack>
        <br />
        <Button onClick={search} variant='contained'>Search</Button>
      </div>

      {result.customers &&
        <div className='purchased p-3 p-md-5 my-3 m-2 mx-md-5'>
          <h1>Results</h1>
          <br />
          <Table striped bordered hover size="md">
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Product ID</th>
                <th>Purchase Date</th>
              </tr>
            </thead>
            <tbody>
              {result.purchases?.map((customer, index) => {
                return (
                  <tr key={index}>
                    <td >{customer.customerId}</td>
                    <td>{customer.productId}</td>
                    <td>{customer.date}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
      }
      <br />
      <br />
    </Container>
  )
}
