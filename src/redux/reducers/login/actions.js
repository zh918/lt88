import * as types from './actionTypes'

export function login() {
  return {type:types.LOGIN};
}

export function loginOut() {
  return {type:types.LOGIN_OUT};
} 
