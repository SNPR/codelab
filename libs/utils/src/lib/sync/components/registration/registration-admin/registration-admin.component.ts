import { Component } from '@angular/core';
import { SyncRegistrationService } from '@codelab/utils/src/lib/sync/components/registration/sync-registration.service';

@Component({
  selector: 'slides-registration-admin',
  templateUrl: './registration-admin.component.html',
  styleUrls: ['./registration-admin.component.css']
})
export class RegistrationAdminComponent {

  constructor(private readonly registrationService: SyncRegistrationService) {
  }


  drop(userId: string) {
    this.registrationService.drop(userId);
  }
}
