
import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnInit,
  SimpleChanges
} from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  countries = [{
    key: 'España',
    value: '1'
},
{
    key: 'Portugal',
    value: '2',
},
{
    key: 'Francia',
    value: '3',
},
{
    key: 'Italia',
    value: '4'
}];

  sizes = [{
    key: 'Pequeña',
    value: '1'
},
{
    key: 'Mediana',
    value: '2'
},
{
    key: 'Grande',
    value: '3'
}];


  @Output() save = new EventEmitter();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  phoneValidator (control: AbstractControl): ValidationErrors | null {
    if(/^[0-9]{9}$/.test(control.value) || !control.value || control.value.length === 0){
      return null;
    } else {
      return {
        phone: true
      }
    }
  }

  initForm() {

    this.form = this.formBuilder.group({

      id:[''],
      name:['', Validators.compose([Validators.required, Validators.maxLength(150)])],
      createDate:['', Validators.compose([Validators.required])],
      size:['', Validators.compose([Validators.required])],
      address:['', Validators.compose([Validators.required])],
      country:['', Validators.compose([Validators.required])],
      phone:['', Validators.compose([Validators.required,Validators.maxLength(9), Validators.minLength(9), this.phoneValidator])],
      description:['', Validators.compose([Validators.required, Validators.maxLength(250)])]
    });
  }

  ngOnInit() {
    this.initForm();
  }

  onSave(value) {
    this.save.emit(value);
    this.form.reset();
  }
}
