import React, { Component } from 'react';
import {} from './styles';

export default class ultimasNoticias extends Component {
    state = {
        repository: {},
        loading: true,
    };

    render() {
        const { repository, loading } = this.state;

        if (loading) {
        }

        return (
            <>
                <h1>Main</h1>
                <p>Conteudo P</p>
            </>
        );
    }
}
