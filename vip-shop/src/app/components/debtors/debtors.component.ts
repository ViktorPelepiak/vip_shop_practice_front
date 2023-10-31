import { Component } from '@angular/core';
import {Debtor} from "../../models/debtor";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-debtors',
  templateUrl: './debtors.component.html',
  styleUrls: ['./debtors.component.css']
})
export class DebtorsComponent {
  public debtors: Debtor[]|undefined;

  constructor(private userService: UserService) {
    userService.getDebtors().subscribe(response => {
      this.debtors = response.result;
    })
  }

  blockUser(userId: number) {
    this.userService.blockUser(userId).subscribe( response => {
      if (response.success) {
        window.location.reload();
      }
    })
  }

  unblockUser(userId: number) {
    this.userService.unblockUser(userId).subscribe( response => {
      if (response.success) {
        window.location.reload();
      }
    })
  }
}
