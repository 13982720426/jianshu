import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS,
})
export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR,
})
export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER,
})
export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE,
})
export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page,
})

export const getList = () => {
  return (dispatch) => {
    axios
      .get('/api/headerList.json')
      .then((res) => {
        const data = res.data
        dispatch(changeList(data.data))
      })
      .catch(() => {
        console.log('error')
      })
  }
}

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data), //defaultState中的list数组是immutable数组，原来data是普通数组，传到会出错defaultState中的list，将它转换成immutable数组
  totalPage: Math.ceil(data.length / 10),
})
