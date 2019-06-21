/*
  Proudly stolen from https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md
*/
import { withRouter } from 'react-router-dom'
import { useEffect } from 'react'

const ScrollToTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children
}

export default withRouter(ScrollToTop)
