import React from 'react'
import SearchBox from '../Components/SearchBox/SearchBox'
import ListItem from '../Components/ListItem/ListItem'

import styled from 'styled-components'

const Result = () => {
  return (
    <Container>
      <div className="header"></div>
      <div className="searchbox_display">
        <SearchBox />
      </div>
      <div className="list_display">
        <ListItem />
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  .header {
    width: 100%;
    height: 219px;
    background: #F1F3FF; 
    display: flex;
  }
  .searchbox_display {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default Result