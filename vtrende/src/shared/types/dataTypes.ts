export interface authTypeReturn {
  status: string;
  message: string;
  data: {
    access_expiration: string;
    refresh_expiration: string;
    access_token: string;
    refresh_token: string;
    requires_2fa: boolean | null;
    temp_token: string | null;
  };
}