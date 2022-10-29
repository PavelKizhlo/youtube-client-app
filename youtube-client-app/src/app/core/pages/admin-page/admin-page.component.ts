import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ErrorStateMatcher } from '@angular/material/core';

import { DateValidator } from '../../utils/date.validator';
import { addCustomCard } from '../../../redux/actions/custom-cards.actions';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl): boolean {
    return control && control.invalid && control.touched;
  }
}

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  form: FormGroup;

  title: FormControl;

  description: FormControl;

  imageLink: FormControl;

  videoLink: FormControl;

  date: FormControl;

  matcher = new MyErrorStateMatcher();

  constructor(private store: Store) {}

  ngOnInit(): void {
    const urlRegex =
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

    this.title = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]);
    this.description = new FormControl('', Validators.maxLength(255));
    this.imageLink = new FormControl('', [Validators.required, Validators.pattern(urlRegex)]);
    this.videoLink = new FormControl('', [Validators.required, Validators.pattern(urlRegex)]);
    this.date = new FormControl('', [Validators.required, DateValidator()]);

    this.form = new FormGroup({
      title: this.title,
      description: this.description,
      imageLink: this.imageLink,
      videoLink: this.videoLink,
      date: this.date,
    });
  }

  createCustomCard() {
    if (this.form.valid) {
      const card = this.form.value;
      this.store.dispatch(addCustomCard({ card: { ...card } }));

      this.form.reset();
    }
  }
}
