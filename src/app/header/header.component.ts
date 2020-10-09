import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public ipAddress = new FormControl('192.212.174.101', [
    Validators.required,
    Validators.pattern(/\b(?:\d{1,3}\.){3}\d{1,3}\b/),
  ]);

  public form = new FormGroup({ ipAddress: this.ipAddress });

  constructor() {}

  ngOnInit(): void {}

  public submit() {
    console.log('Form submitted');
    console.log(this.form);
  }
}
