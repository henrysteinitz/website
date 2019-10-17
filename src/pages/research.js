import React, { Component } from 'react'
 
class Research extends Component {
	render() {
		return (
			<div className="page">
				<h2>Interests</h2>
{ /* TODO: Include citations */ }

<h3>Recurrent Networks and Long-term Memory</h3>

<p>Long short-term memory and variants such as gated recurrent units
 have been introduced to address exploding / vanishing gradients
 and extend the timescale over which recurrent networks can 
 successfully learn causal dependencies in sequence data. 
 However, long-short term memories and gated recurrent units 
 still fail to struggle to learn very long time dependencies 
 due to pratical issues such as the linear time and space complexity 
 of backpropagation-through-time. What are the essential 
 features and theoretical advantages of models with augmented memory?</p>
<h3>Riemannian Representation Learning</h3>

<p>Representations in typical deep learning systems are learned in a flat 
Euclidean space. However, many classical data structures are not easily 
embedded intp flat space. For example, embedding trees into Euclidean space 
with small metric distortion requires a dimension the is exponential in the number of nodes.
What are the advantages of learning representations in manifolds with different topological, 
metric, and differentiable structures?</p>

<h3>Theory of Differentiable Programming</h3>

<p>DIfferentiable programs can be modelled as computational graphs of where
each node corresponds to a C^k function in some finite family. that operate 
on a Banach space. In this setting, what are the topological and analytic properties 
of differentiable 
analogs of common control flow functions? The space of all encoded programs also forms an infinite-dimensional
branched manifold. What is the geometric structure of this "program manifold", and can we perform efficient 
optimization over this space?</p>

				<h2>Papers</h2>
				<a class="link break"  href="Representation_Learning_in_Riemannian_Manifolds.pdf"><p>Representation Learning in Riemannian Manifolds - Henry Steinitz, Shan-Conrad Wolf (Survey) (2019)</p></a>
				<a class="link break" href="dla.pdf"><p>Implicit Optimization Dynamics in Deep Linear Networks - Henry Steinitz (2018)</p></a>
			</div>
		)
	}
}

export default Research