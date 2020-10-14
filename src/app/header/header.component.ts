import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IpService } from '../services/ip-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private ipService: IpService) {}
  public ipAddress = new FormControl('', [
    Validators.required,
    Validators.pattern(/\b(?:\d{1,3}\.){3}\d{1,3}\b/),
  ]);

  public form = new FormGroup({ ipAddress: this.ipAddress });

  ngOnInit(): void {}

  public submit() {
    if (this.form.valid) {
      this.ipService.fetchIpInfo(this.form.get('ipAddress').value);
      this.form.reset();
    } else {
      this.form.get('ipAddress').markAsTouched();
    }
  }
}
