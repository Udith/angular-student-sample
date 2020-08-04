import {Component, OnInit} from '@angular/core';
import data from '../assets/data.json';
import {Student} from "./models/student.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  students: Student[] = [];
  isEditMode: boolean = false;
  editStudentIdx: number = 0;

  constructor() {
    this.students = data.map(dataObj => Student.objectToStudent(dataObj));
  }

  onEditClick = () => {
    this.isEditMode = !this.isEditMode;
    this.editStudentIdx = 0;
  }

  hasNextStudent = () => (this.editStudentIdx < (this.students.length - 1));

  nextStudent = () => {
    this.editStudentIdx = this.hasNextStudent() ? (this.editStudentIdx + 1) : this.editStudentIdx;
    console.log(this.editStudentIdx);
  }

  hasPrevStudent = () => (this.editStudentIdx > 0);

  prevStudent = () => {
    this.editStudentIdx = this.hasPrevStudent() ? (this.editStudentIdx - 1) : 0;
    console.log(this.editStudentIdx);
  }
}
