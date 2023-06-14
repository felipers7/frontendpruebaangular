import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './../../models/user.model';
import { UserService } from './../../core/user/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup;
  errorMessage!: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ){
    this.buildForm();
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      username: ["",[]],
      password: ["",[]]
    });
  }


  submitForm(event: Event){
    event.preventDefault();

    const user: User = this.form.value;
    this.userService.getToken(user).subscribe(
    (rta) => {
       localStorage.setItem("token", rta.Authorization);
       this.router.navigate(["/home"]);
    },
    (error: HttpErrorResponse) => {
      if (error.status === 403) {
        this.errorMessage = 'Wrong password or user';
      } else {
        this.errorMessage = 'An error occurred. Please try again later.';
      }
      }
    );
  }
  
}
