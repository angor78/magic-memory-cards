export interface LoginRequestData {
  email: string
  password: string
  rememberMe: boolean
}

export interface MeResponse {
  email: string
  id: number
  login: string
}

export interface SignUpResponse {
  addedUser: any
  error?: string
}

export interface ResponseNewPass {
  info: string
  error: string;
}

export interface NewPassParams {
  password: string
  resetPasswordToken: string | undefined
}

export interface RecoveryParams {
  email: string
  from: string
  message: string
}

export interface ResponseRecovery {
  info: string
  error: string;
}

export interface ResponseSignIn {
  _id: string
  email: string
  rememberMe: boolean
  isAdmin: boolean
  name: string
  verified: boolean
  publicCardPacksCount: number
  created: string
  updated: string
  __v: number
  token: string
  tokenDeathTime: number
  avatar: string
}

export interface SignInParams {
  email: string
  password: string
  rememberMe: boolean
}

