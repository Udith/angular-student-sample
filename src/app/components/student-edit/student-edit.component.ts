import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../../models/student.model";

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  @Input()
  student: Student;

  constructor() { }

  ngOnInit(): void {
  }

}
