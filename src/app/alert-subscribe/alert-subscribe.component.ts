import {Component, TemplateRef, ViewEncapsulation} from '@angular/core';
import {NbDialogRef, NbDialogService, NbThemeService} from "@nebular/theme";
import {CompassAPIService} from "../../services/compassapi/compass-api.service";

@Component({
  selector: 'app-alert-subscribe',
  templateUrl: './alert-subscribe.component.html',
  styleUrls: ['./alert-subscribe.component.scss',
  ]
})
export class AlertSubscribeComponent {
  term: string = '';
  channel: string = 'telegram';
  contact: string = '';
  scoregt: undefined;
  scorelt: undefined;

  showRequiredMissing = false;

  constructor(private dialogRef: NbDialogRef<AlertSubscribeComponent>,
              private compassAPIService : CompassAPIService) { }

  requiredMissing(): boolean {
    return (this.term == ''|| this.channel == '' || this.contact == '');
  }

  submit() {
    if(this.requiredMissing()){
      this.showRequiredMissing = true;
      return;
    }
    // Do something with the input values
    console.log(this.term, this.channel, this.contact, this.scoregt, this.scorelt);
    this.compassAPIService.registerAlert(this.term, this.channel, this.contact, this.scoregt, this.scorelt);
    // Close the dialog
    this.showRequiredMissing = false;
    this.dialogRef.close();
  }

  cancel() {
    // Close the dialog
    this.showRequiredMissing = false;
    this.dialogRef.close();
  }

}
