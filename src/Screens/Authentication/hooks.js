import {useSelector as originalUseSelector} from "react-redux"

export const useSelector = state => originalUseSelector(state)