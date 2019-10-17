import React, { Component } from 'react'
import Icon from './icon'

class Name extends Component {
	render() {
		return (
			<div className="name_container">
				<div className="profpic-container">
					<img src="me.jpg" className="profpic" width="250"/>	
				</div>
				<div className="name_text-container">
					Henry Steinitz
				</div>
				<div className="name_links">

				</div>
				<div className="name_extra-info">
					<div className="name_position">
						<Icon file="google.svg" width={20} type="svg" /> 
						<span className="middle">
							Software Engineer @ Google
						</span>
					</div>
					<div className="name_position">
						<Icon file="nyu.svg" width={50} type="svg" /> 
						<span className="middle">
							Master's Student @ NYU Courant
						</span>
					</div>
				</div>
			</div>
		)
	}
}

export default Name