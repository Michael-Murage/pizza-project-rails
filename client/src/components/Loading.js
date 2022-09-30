import React from 'react'
import ReactLoading from 'react-loading'

function Loading() {
	return (
		<div>
			<ReactLoading type={'bubbles'} color='orange' height={'20%'} width={'20%'}/>
		</div>
	)
}

export default Loading