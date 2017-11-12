import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { withStyles, MuiThemeProvider } from 'material-ui/styles'
import AppBar from './AppBar'

import './index.css'
const classes = this.props.classes;
const TemplateWrapper = ({ children }) => (
    <MuiThemeProvider theme={theme}>
        <div>
            <Helmet
              title="Gatsby Default Starter"
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            />
            <AppBar />
            <div
              style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
              }}
            >
            {children()}
            </div>
        </div>
    </MuiThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
