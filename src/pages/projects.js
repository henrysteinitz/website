import React, { Component } from 'react'
 
class Projects extends Component {
	render() {
		return (
			<div className="page">
				<h3>Water</h3>
				<p>Work in progress. Water is a differentiable programming and deep learning library. 
				Features include a fully differentiable type system, a custom scripting
				language, non-Euclidean variables with Riemannian gradient descent, and 
				built-in visualization.</p>
				<a href="http://henrysteinitz.com/neura"><h3>MLP Visualizer</h3></a>
				<img class="mlp" width="224px" src="public/mlp3.png" />
				<img class="mlp" width="270px" src="public/mlp2.png" />
				<p>This is a tool for visualizing computation 
				and backpropagation in multilayer perceptrons. 
				Users can specify a rule for the perceptron to 
				learn. The MPV will then generate random data that 
				the network will use for training, and render the 
				connection strengths as they change. Users can 
				also compute a specified input and see how information 
				flows through the network.</p>
				
			</div>
		)
	}
}

export default Projects