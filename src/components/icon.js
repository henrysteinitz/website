import React, { Component } from 'react'
import classnames from 'classnames'

class Icon extends Component {

	render() {
		const { file, width, type, className } = this.props
		if (type === 'svg') {
			return (
				<object data={`icons/${file}`} className="icon" type="image/svg+xml" width={22} height={22} />
			)
		} else {
			return (
				<img src={`icons/${file}`} className={classnames('icon', className)} width={22} height={22} />
			)
		}
	}
}

export default Icon