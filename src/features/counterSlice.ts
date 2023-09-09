import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../stores/store"


interface CounterState {
    value: number
}

// Define the initial state using that type
const initialState: CounterState = {
    value: 0,
}

//https://redux-toolkit.js.org/usage/immer-reducers
const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1 // This is allowed because Immer tracks all changes, so we can mutate the objects directly
        },
        decrement: (state) => {
            state.value -= 1 // This is allowed because Immer tracks all changes, so we can mutate the objects directly
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer