import { Component, Input, OnInit } from '@angular/core';
import { Alert, AlertType } from './alert';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() timeout = 3000;

  alerts: Alert[] = [];

  constructor(private alertService: AlertService) {
    this.alertService.GetAlert().subscribe(alert => {
      if (!alert) {
        this.alerts = [];
        return;
      }
      this.alerts.push(alert);
      setTimeout(() => {
        this.RemoveAlert(alert)
      }, this.timeout);
    })
  }

  ngOnInit(): void {
  }

  RemoveAlert(removeAlert: Alert) {
    this.alerts = this.alerts.filter(alert => {
      return alert !== removeAlert;
    })
  }

  GetAlertType(alert: Alert) {
    if (!alert) {
      return '';
    }
    switch (alert.alertType) {
      case AlertType.danger:
        return 'alert alert-danger';
      case AlertType.warning:
        return '';
      case AlertType.success:
        return 'alert alert-success';
      case AlertType.info:
        return 'alert alert-info';
    }
  }
}
