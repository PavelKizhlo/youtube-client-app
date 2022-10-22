import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateValidator } from '../../utils/date.validator';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  form: FormGroup;

  title: FormControl;

  description: FormControl;

  imgLink: FormControl;

  videoLink: FormControl;

  date: FormControl;

  ngOnInit(): void {
    const urlRegex =
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

    this.title = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]);
    this.description = new FormControl('', Validators.maxLength(255));
    this.imgLink = new FormControl('', [Validators.required, Validators.pattern(urlRegex)]);
    this.videoLink = new FormControl('', [Validators.required, Validators.pattern(urlRegex)]);
    this.date = new FormControl('', [Validators.required, DateValidator()]);

    this.form = new FormGroup({
      title: this.title,
      description: this.description,
      imgLink: this.imgLink,
      videoLink: this.videoLink,
      date: this.date,
    });
  }

  submit() {
    console.log(this.form);
  }
}
