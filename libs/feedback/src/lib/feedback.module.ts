import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';

import { ButtonWithMenuModule } from '@codelab/utils';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FeedbackService } from './feedback.service';
import { FeedbackWidgetComponent } from './feedback-widget/feedback-widget.component';
import { FeedbackRatingComponent } from './feedback-rating/feedback-rating.component';
import { FeedbackIssueDropdownComponent } from '@codelab/feedback/src/lib/feedback-issue-dropdown/feedback-issue-dropdown.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubModule } from '@codelab/utils';

import { environment } from '../../../../apps/codelab/src/environments/environment';

// Note! We are using AngularFire2 v4. There are a lot of breaking changes.
// See: https://github.com/angular/@angular/fire/issues/854
export const angularFire = AngularFireModule.initializeApp(
  environment.firebaseConfig
);

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    angularFire,
    FormsModule,
    AngularFireDatabaseModule,
    ButtonWithMenuModule,
    HttpClientModule,
    GithubModule
  ],
  providers: [FeedbackService],
  declarations: [
    FeedbackWidgetComponent,
    FeedbackRatingComponent,
    FeedbackIssueDropdownComponent
  ],
  exports: [
    FeedbackWidgetComponent,
    FeedbackRatingComponent,
    ButtonWithMenuModule
  ]
})
export class FeedbackModule {
}
