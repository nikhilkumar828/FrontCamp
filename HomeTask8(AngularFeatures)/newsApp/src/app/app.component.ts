import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from './services/posts.service';
import { DynamicFormComponent } from './components/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from './components/dynamic-form/models/field-config.interface';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template:  `
  <div class="app">
    <app-dynamic-form
      [config]="config"
      #form="dynamicForm"
      (submit)="submit($event)">
    </app-dynamic-form>
    {{ form.valid }}
    {{ form.value | json }}
  </div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DynamicFormComponent, {static: false}) form: DynamicFormComponent;

  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'select',
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      type: 'select',
      label: 'Favourite Good',
      name: 'food',
      options: ['Pizza21', 'Hot 1212', '12 vva', 'Coffasdsadee'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);
  }

  submit(value: {[name: string]: any}) {
    console.log(value);
    alert(value.name);
  }

  constructor( ) { }

  }
