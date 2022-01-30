import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'new-course-form-array',
  templateUrl: './new-course-form-array.component.html',
  styleUrls: ['./new-course-form-array.component.scss']
})
export class NewCourseFormArrayComponent {
  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: AbstractControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get controls() {
    return this.topics.controls;
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }
}
