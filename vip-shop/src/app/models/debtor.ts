export class Debtor {
  id: number;
  email: string;
  username: string;
  blocked: boolean;

  constructor(id: number, email: string, username: string, blocked: boolean) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.blocked = blocked
  }
}
