// import React from 'react'
// import PropTypes from 'prop-types'
// import styled from 'styled-components'

// import PageWrapper from './Page.layout'

// const WithBothBar = ({
//   pageTitle,
//   TopBar,
//   BottomBar,
//   children,
//   bgColor,
//   bottomBarHeight,
// }) => (
//   <PageWrapper pageTitle={pageTitle}>
//     {TopBar && (
//       <TopBarWrapper>
//         <TopBar />
//       </TopBarWrapper>
//     )}

//     <ContentWrapper style={{ backgroundColor: bgColor }}>
//       {children}
//     </ContentWrapper>

//     {BottomBar && (
//       <BottomBarWrapper style={{ height: bottomBarHeight }}>
//         <BottomBar />
//       </BottomBarWrapper>
//     )}
//   </PageWrapper>
// )

// const TopBarWrapper = styled.div`
//   position: fixed;
//   top: 0;
//   width: 100%;
//   height: 9rem;
//   z-index: 20;
// `

// const ContentWrapper = styled.div`
//   margin-top: 9rem;
//   margin-bottom: 12rem;
//   min-height: calc(100vh - 21rem);
//   z-index: 10;
// `

// const BottomBarWrapper = styled.div`
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   z-index: 20;
//   filter: drop-shadow(0px -15px 10px rgba(0, 0, 0, 0.08));
// `

// WithBothBar.propTypes = {
//   pageTitle: PropTypes.string,
//   bgColor: PropTypes.string,
//   TopBar: PropTypes.func.isRequired,
//   children: PropTypes.node.isRequired,
//   BottomBar: PropTypes.func.isRequired,
//   bottomBarHeight: PropTypes.string,
// }

// WithBothBar.defaultProps = {
//   pageTitle: 'React',
//   bgColor: '#ffffff',
//   bottomBarHeight: '12rem',
// }

// export default WithBothBar
