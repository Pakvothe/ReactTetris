import React from 'react'

const Score = ({ puntaje }) => {
	return (
		<>
			<div >
				<ul>
					<li>
						<label>Max Score:</label>
						<p>User: {puntaje[0].user}</p>
						<p>{puntaje[0].number}</p>
					</li>
					<li>
						<label>Second Score:</label>
						<p>User: {puntaje[1].user}</p>
						<p>{puntaje[1].number}</p>
					</li>
					<li>
						<label>Third Score:</label>
						<p>User: {puntaje[2].user}</p>
						<p>{puntaje[2].number}</p>
					</li>
				</ul>
			</div>
		</>
	)
}

export default Score;
