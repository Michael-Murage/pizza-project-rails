import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

function ListData({ item }) {
	const navigate = useNavigate()
	
	const deleteItem = ()=>{
		fetch(`/restaurant_pizzas/${item.id}`,{
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(res=>res.json())
		.then(()=>alert('Record has been deleted successfully 😊'))
	}

	return (
		<>
			 <th scope='row'>{item.id}</th>
        	<td>{item.pizza.name}</td>
        	<td>{item.restaurant.name}</td>
					<td>{item.price}</td>
        	<td>
        		<MDBBtn color='link' size='sm'>
							<button className='btn btn-success btn-sm' data-toggle="tooltip" data-placement="top" title="Click to edit record" onClick={()=>navigate(`/record/${item.id}`)}><GrEdit/></button>
        		</MDBBtn>
        	</td>
					<td>
        		<MDBBtn color='link' size='sm'>
							<button className='btn btn-danger btn-sm' data-toggle="tooltip" data-placement="top" title="Click to " onClick={deleteItem}><RiDeleteBin6Line/></button>
        		</MDBBtn>
        	</td>
		</>
	)
}

export default ListData