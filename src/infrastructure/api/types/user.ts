export interface Keyword {
  id: string;
  content: string;
  color: string;
}

export interface LoginUser {
  accessToken: string;
  username: string;
  userID: string;
  profileImage: string;
}

export interface IJoin {
  profileId: string;
  name: string;
  image: string;
  provider: string;
  accesstoken: string;
  refreshtoken: string;
}
