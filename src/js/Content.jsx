import React from 'react';
import Layout from './Layout'
import { Jumbotron } from 'react-bootstrap'

const decorate = (c) => {
	c.PREFIX = 'Decorated ' + c.PREFIX
	return c
}

@decorate
class HelloWorld {

	static PREFIX = 'Hello'
	suffix = 'World'

	constructor(){
		this.message = `${HelloWorld.PREFIX} ${this.suffix}`
	}

	log() {
		console.log(this.message)
	}
}

const hw = new HelloWorld()
hw.log()

export default () => (
	  <Layout>
	  	<Jumbotron>
			<h1>It works!!!</h1>
	  		<p>{hw.message}</p>
	  	</Jumbotron>
	  </Layout>
)

