import { NgModule, Pipe, PipeTransform } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SlidesRoutes } from '../../../presentation/slide-routes';
import { FeedbackModule } from '../../../feedback/feedback.module';
import { SvgComponent } from './svg.component';
import { PresentationModule } from '../../../presentation/presentation.module';
import { ExerciseModule } from '../../../exercise/exercise.module';
import { SimpleEditorModule } from '../ast/simple-editor/simple-editor.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SvgDemoComponent } from './svg-demo/svg-demo.component';
import { DomSanitizer } from '@angular/platform-browser';
import { SvgPlaygroundComponent } from './svg-playground/svg-playground.component';
import { RunnersModule } from '../../../exercise/runners/runners.module';
import { TimerComponent } from './timer/timer.component';
import { CommonModule } from '@angular/common';
import { SvgTogetherComponent } from './svg-together/svg-together.component';
import { MatButtonModule } from '@angular/material';
import { SvgTogetherResultComponent } from './svg-together-result/svg-together-result.component';
import { NewProgreessBarModule } from '../ast/progress-bar/new-progress-bar.module';
import { SharedPipeModule } from '../../../shared/pipes/pipes.module';

const routes = RouterModule.forChild(
  SlidesRoutes.get(SvgComponent)
);


@NgModule({
  imports: [
    routes,
    CommonModule,
    PresentationModule,
    FeedbackModule,
    ExerciseModule,
    RunnersModule,
    SimpleEditorModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    NewProgreessBarModule,
    SharedPipeModule
  ],
  declarations: [
    SvgComponent,
    SvgTogetherComponent,
    SvgTogetherResultComponent,
    SvgDemoComponent,
    SvgPlaygroundComponent,
    TimerComponent
  ],
  exports: [SvgComponent]
})
export class SvgModule {

}
