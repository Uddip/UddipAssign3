import { Component } from '@angular/core';
import { Student } from "./student";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Uddip Amin';
  student:Student = {
    sid: 991518202,
    sname: "Uddip Amin",
    school: "Sheridan College"
  };
}
