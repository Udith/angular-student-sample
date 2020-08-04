
export class Student {
  private readonly _id: number;
  private _name: string;
  private _age: number;
  private _email: string;

  constructor(id: number, name: string, age: number, email: string) {
    this._id = id;
    this._name = name;
    this._age = age;
    this._email = email;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  static objectToStudent(jsonObj: any): Student {
    return new Student(jsonObj.id, jsonObj.name, jsonObj.age, jsonObj.email);
  }
}
