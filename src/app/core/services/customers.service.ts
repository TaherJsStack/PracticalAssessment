import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  
  private usersDataList: UserModel[] = []

  private dataSubject: BehaviorSubject<UserModel[]> = new BehaviorSubject<UserModel[]>([]);
  public  data$: Observable<UserModel[]> = this.dataSubject.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getCustomersList() {
     this.http
      .get<UserModel[]>('assets/order-master-dp/users.json').subscribe(res => {
        this.usersDataList = res
        this.shareUsersDataList(res)
      })
  }

  shareUsersDataList(usersList: UserModel[]) {
    this.dataSubject.next(usersList);
  }

  getUserNameByUserId(userId: string) {
    return this.usersDataList.find(user => user.Id === userId)?.Name
  }

  getUserByUserId(userId: string) {
    return this.usersDataList.find(user => user.Id === userId)
  }

  
}
