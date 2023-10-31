export interface User {
  id: bigint;
  email: string;
  password: string;
  role: string;
  creationDate: any;
}

export class UserLoginDto {
  login: string;
  password: string;

  constructor(login: string, password: string) {
    this.login = login;
    this.password = password;
  }
}

export class UserResponse {
  email: string;
  username: string;
  blocked: boolean;
  roles: string;


  constructor(email: string, username: string, blocked: boolean, roles: string) {
    this.email = email;
    this.username = username;
    this.blocked = blocked
    this.roles = roles;
  }
}
