export enum Routes {
  MAIN = "/",
  AUTH = "/auth",
  CREATE_TASK = "/create_task",
  CUSTOMIZATION_TASK = "/customization_task",
  ADDED_ACCOUNT = "/added_account",
  THO_FACTOR_AUTHENTICATION = "/tho_factor_authentication",
  AUTH_2FA = "/auth/auth2fa",
  ADD_PROXY = "/add_proxy",
  ADD_PROXY_BLOCK = `${ADD_PROXY}/block`,
  TASKS = '/tasks',
  VERIFY_ACCOUNTS = '/verify_accounts',
  INFORMATION = '/information',
  PROGRESS = '/info/progress',
  REPORT = '/info/report',
  TASK_HISTORY = '/info/task_history'
}

export const publicRoutes = [Routes.AUTH, Routes.AUTH_2FA];

export const protectedRoutes = Object.values(Routes).filter(
  (route) => !publicRoutes.includes(route)
);
