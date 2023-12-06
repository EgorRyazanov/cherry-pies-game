export const BASE_URL = 'https://ya-praktikum.tech/api/v2'
export const BASE_RESOURCES_URL = 'https://ya-praktikum.tech/api/v2/resources'

export enum END_POINTS_URL {
  // authApi
  SIGN_UP = '/auth/signup',
  SIGN_IN = '/auth/signin',
  AUTH_USER = '/auth/user',
  AUTH_LOGOUT = '/auth/logout',
  AUTH_YANDEX_LOGIN = '/oauth/yandex',
  GET_AUTH_YANDEX_INFORMATION = '/oauth/yandex/service-id',
  // userApi
  GET_USER_BY_ID = '/user/',
  SEARCH_USER = '/user/search',
  CHANGE_USER_PROFILE = '/user/profile',
  CHANGE_USER_PASSWORD = '/user/password',
  CHANGE_USER_PROFILE_AVATAR = '/user/profile/avatar',
  LEADER_BOARD = '/leaderboard',
  LEADER_BOARD_ALL = '/leaderboard/all',
  GET_FORUM_TOPICS = 'https://run.mocky.io/v3/47a20117-0a8b-41b0-88b0-9746cd2aab46',
  CREATE_FORUM_TOPIC = 'https://run.mocky.io/v3/6d920d59-d64e-49e6-92eb-31392e0ac054',
  GET_FORUM_BY_ID = 'https://run.mocky.io/v3/e70622de-fe06-48ac-9ae1-4fa3c1eff0ea',
  ADD_COMMENT = 'https://run.mocky.io/v3/abd5be5b-ee68-4614-9d71-5dc5496aaef0',
}

export enum API_ERROR_MESSAGES {
  COOKIE_NOT_VALID = 'Cookie is not valid',
  USER_ALREADY_IN_SYSTEM = 'User already in system',
  UNKNOWN_ERROR = 'Unknown error, please, reload page',
}

export const TeamName = 'cherryPies'

export const OAUTH_REDIRECT_URL = 'http://localhost:3000'
