import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import classnames from 'classnames'
import Name from './name'
import Icon from './icon'

class NavigationVideo extends Component {

	render() {
		return (
	        <video autoplay loop>
	            <source src="Videos/Pink_Mood_NYC/Pink_Mood_NYC.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
	        </video>	
		)
	}
}

const pics = [
	'cuba',
	'church',
	'bridge',
	'iceland',
	'brooklyn',
	'dumbo',
]

const picMap = {
	['/']: 'iceland',
	['/about']: 'iceland',
	['/research']: 'cuba',
	['/projects']: 'cuba',
	['/notes']: 'cuba',
}

class Navigation extends Component {

	constructor(props) {
		super(props)
		this.state = { imageNum: 0 }
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({ imageNum: (this.state.imageNum + 1) % pics.length })
		}, 12000)
	}

	render() {
		const { location } = this.props 
		const fullscreen = location.pathname === '/'
		const compact = !fullscreen

		const about = location.pathname === '/about'
		const research = location.pathname === '/research'
		const projects = location.pathname === '/projects'
		const writing = location.pathname === '/writing'
		const notes = location.pathname === '/notes'

		// const backgroundClass = `navigation_container-${picMap[location.pathname]}`
		const backgroundClass = `navigation_container-${pics[this.state.imageNum]}`

		return (
			<div className={classnames('navigation_container', backgroundClass, {
				['navigation_container-compact']: compact,
				['navigation_container-fullscreen']: fullscreen,
			})}> 
				<div className="navigation__shade" />
				<div className={classnames('navigation_content-container')}>
					<Name />
					<div className="navigation_links-container">
						<Link to="/about" className={classnames('navigation_link', { 
							['navigation_active-link']: about 
						})}>
							<Icon file="about.png" type="png" />
							<span className="middle">
								About
							</span>
						</Link>
						<br />
						<Link to="/research" className={classnames('navigation_link', { 
							['navigation_active-link']: research 
						})}>
							<Icon file="research.png" type="png" /> 
							<span className="middle">
								Research
							</span>
						</Link>
						<br />
						<Link to="/projects" className={classnames('navigation_link', { 
							['navigation_active-link']: projects 
						})}>
							<Icon file="projects.png" type="png" /> 
							<span className="middle">
								Projects
							</span>
						</Link>
						<br />
						{ false && (<span>
						<Link to="/writing" className={classnames('navigation_link', { 
							['navigation_active-link']: writing 
						})}>
							<Icon file="paragraph_filled.png" type="png" className="icon-typewriter" /> 
							<span className="middle">
								Writing
							</span>
						</Link>
						<br />
						<Link to="/notes" className={classnames('navigation_link', { 
							['navigation_active-link']: notes 
						})}>
							<Icon file="note.png" type="png" className="icon-note" /> 
							<span className="middle">
								Notes
							</span>
						</Link></span>)
						} 
					</div>
				</div>

			</div>
		)
	}
}

export default withRouter(Navigation)