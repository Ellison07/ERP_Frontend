
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{  
  id!: Number; 
  role!: string;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private route:ActivatedRoute,
    private router: Router) {}
    ngOnInit(): void {
      this.employee = new Employee();
      this.route.paramMap.subscribe((params) => {
        const userName = params.get('userName');
        const passWord = params.get('passWord');
        this.employeeService.loginEmployee(userName!, passWord!)
          .subscribe(
            (data) => {
              this.employee = data;
              this.id = data.id;
            },
            (error) => console.log(error)
          );
      });
    }
     onSubmit() {
      this.employeeService.loginEmployee(this.employee.userName, this.employee.passWord)
      .subscribe(
        (data) => {
          this.goToRespectivePage(data.role);
        },
        (error) => console.log(error)
      );
      }
         // Navigate to the appropriate page based on user role
         goToRespectivePage(role: string){
          if(role === 'admin'){
            this.router.navigate(['admin']);
          }
          else if(role === 'javaAdmin'){
            this.router.navigate(['java']);
          }
          else if(role === 'dataAdmin'){
            this.router.navigate(['data']);
          }
          else if(role === 'devopsAdmin'){
            this.router.navigate(['devops']);
          }
          else if(role === 'dotnetAdmin'){
            this.router.navigate(['dotnet']);
          }
          else{
            this.router.navigate(['user', this.employee.userName]);

         }
         
    }
      // Navigate to the sign-up page
      goToSignUp(): void {
      this.router.navigate(['register']);
  }
  }