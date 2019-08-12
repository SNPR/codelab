import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatInputModule, MatMenuModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { SyncService } from '@codelab/utils/src/lib/sync/services/sync.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginService } from '@codelab/firebase-login';
import { SyncViewerValueDirective } from '@codelab/utils/src/lib/sync/directives/sync-viewer-value.directive';
import { AllViewerValuesDirective } from '@codelab/utils/src/lib/sync/directives/all-viewer-values.directive';
import { SyncPlaygroundComponent } from './sync-playground/sync-playground.component';
import { SyncPlaygroundPresenterComponent } from './sync-playground/sync-playground-presenter/sync-playground-presenter.component';
import { SyncPlaygroundTestComponent } from './sync-playground/sync-playground-test/sync-playground-test.component';
import { SlidesModule } from '@codelab/slides';
import { FormsModule } from '@angular/forms';
import { QuestionsModule } from '@codelab/utils/src/lib/sync/components/questions/questions.module';
import { SyncDirectivesModule } from '@codelab/utils/src/lib/sync/directives/sync-directives.module';
import { SyncPollModule } from '@codelab/utils/src/lib/sync/components/poll/sync-poll.module';
import { SyncRegistrationModule } from '@codelab/utils/src/lib/sync/components/registration/sync-registration.module';
import { SyncButtonModule } from '@codelab/utils/src/lib/sync/sync-button/sync-button.module';

@NgModule({
  imports: [
    SyncDirectivesModule,
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatMenuModule,
    MatInputModule,
    SlidesModule,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    SyncRegistrationModule,
    QuestionsModule,
    SyncPollModule,
    SyncButtonModule,
  ],
  providers: [SyncService, LoginService],
  declarations: [
    SyncViewerValueDirective,
    AllViewerValuesDirective,
    SyncPlaygroundComponent,
    SyncPlaygroundPresenterComponent,
    SyncPlaygroundTestComponent,
  ],
  exports: [
    SyncViewerValueDirective,
    AllViewerValuesDirective,
    SyncPlaygroundComponent,
  ],
})
export class SyncModule {
}
