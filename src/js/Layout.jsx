import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

export default ({ children }) => {
	return (
		<Grid fluid={true}>
			<Row>
				<Col md={8} mdOffset={2}>
					{children}
				</Col>
			</Row>
		</Grid>
	)
}