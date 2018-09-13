import React, { Component, createContext } from 'react';

const StoreContext = createContext('StoreContext')
export const StoreProvider = StoreContext.Provider
export const StoreConsumer = StoreContext.Consumer

class Store extends Component {
    state = {}

    componentDidMount() {}

    render() {
        const {state, props} = this
        return (
            <StoreProvider value={{
                ...state,
                actions: {}
            }}>{props.children}</StoreProvider>
        )
    }
}

export default Store;