import React from 'react'
import useGetData from '../hooks/getData'
import ListData from './ListData'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function RestaurantPizzas() {
	const { data } = useGetData('/restaurant_pizzas')

	return (
		<div>
			<MDBTable align='middle'>
      <MDBTableHead light className='sticky-top'>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>Pizza</th>
          <th scope='col'>Restaurant</th>
          <th scope='col'>Price</th>
					<th scope='col'>Edit</th>
					<th scope='col'>Delete</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
				{
						(Array.isArray(data) ? data : []).map(item =>{
							return (
        				<tr key={item.id}>
        				  <ListData item={item}/>
        				</tr>
							)
						})
				}
      </MDBTableBody>
    </MDBTable>
		</div>
	)
}

export default RestaurantPizzas