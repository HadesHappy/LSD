import {
  INPUT_CHANGE,
  OUTPUT_CHANGE,
  STAKE_TYPE
} from '../constants'

const initialState = {
  inputValue: 0,
  outputValue: 0,
  stakeType: 'DEPOSIT_ETH',
}

const inputReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case INPUT_CHANGE:
      return {
        ...state,
        inputValue: payload,
      }
    case OUTPUT_CHANGE:
      return {
        ...state,
        outputValue: payload,
      }
    case STAKE_TYPE:
      return {
        ...state,
        stakeType: payload
      }
    default:
      return state
  }
}

export default inputReducer