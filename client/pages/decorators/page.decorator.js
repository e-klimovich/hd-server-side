import React, { Component } from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    min-height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export default class Page extends Component {
    render() {
        const { children } = this.props;

        return (
            <Wrapper>
                {children}
            </Wrapper>
        )
    }
}