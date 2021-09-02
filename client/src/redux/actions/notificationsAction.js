export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export const SHOW_MESSAGE = 'SHOW_MESSAGE'
export const SHOW_MODAL = 'SHOW_MODAL'

export const showNotification = data => {
  return {
    type: SHOW_NOTIFICATION,
    payload: data,
  }
}


