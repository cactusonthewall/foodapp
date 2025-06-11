import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
  standalone:false
})
export class SettingPage implements OnInit {
  Url: string = 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg';
  password: string = ''; 
  showPassword: boolean = false;

  isLongEnough: boolean = false;
  hasNumber: boolean = false;
  hasSpecialChar: boolean = false;

  constructor() { }

  checkPasswordStrength() {
    this.isLongEnough = this.password.length > 6;
    this.hasNumber = /\d/.test(this.password);
    this.hasSpecialChar = /[!@#$%^&*]/.test(this.password);
  }
  ngOnInit() {
  }

}
