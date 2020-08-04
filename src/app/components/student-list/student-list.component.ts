import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../../models/student.model";


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @Input()
  students: Student[] = [];

  constructor() {

  }

  ngOnInit(): void {

  }
}
