import React, { Component } from 'react'
import styled from 'styled-components'
import { hot } from 'react-hot-loader'

import Page from './decorators/page.decorator'
import Sidebar from './../components/sidebar/Sidebar'
import NoteList from './../components/note/NoteList'

const ContentWrapper = styled.div`
    width: calc(100% - 300px);
    height: 100vh;
    padding: 15px 0;
    overflow-x: hidden;
    overflow-y: auto;
`

const NoteForm = styled.div`
    form {
        width: 100%;
        text-align: right;
    }
`

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Page>
                <Sidebar />
                <ContentWrapper>
                    <NoteForm>
                        <NoteList />
                    </NoteForm>
                </ContentWrapper>
            </Page>
        )
    }
}

export default hot(module)(Dashboard)