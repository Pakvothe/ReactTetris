import React from 'react'

//styles ==> 
import { StyledLoader } from './styles/StyledLoading';

const Loading = ({ loading }) => {
	return (
		<StyledLoader
			active={loading}
			spinner
			text='Loading...'
			className='loading__overlay'
			classNamePrefix='loading__'
		/>
	)
}

export default Loading;