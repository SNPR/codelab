import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlidesRoutes } from '../../../presentation/slide-routes';
import { BinaryComponent } from './binary.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FakeGifComponent } from './fake-gif/fake-gif.component';
import { GifPaletteComponent } from './gif-palette/gif-palette.component';
import { BinaryViewModule } from './binary-view/binary-view.module';
import { MidiComponent } from './midi/midi.component';
import { AsciiComponent } from './ascii/ascii.component';
import { BindecComponent } from './bindec/bindec.component';
import { MessageComponent } from './message/message.component';
import { JsonComponent } from './json/json.component';
import { SimpleEditorModule } from '../ast/simple-editor/simple-editor.module';
import { TooltipsModule } from '../../../tooltips/tooltips.module';
import { CompareComponent } from './compare/compare.component';
import { MatAutocompleteModule } from '@angular/material';
import { HtmlPostComponent } from './html-post/html-post.component';
import { SharedPipeModule } from '../../../shared/pipes/pipes.module';
import { ConsoleModule } from '../../../shared/console/console.module';


const routes = RouterModule.forChild(
  SlidesRoutes.get(BinaryComponent)
);

@NgModule({
  imports: [
    routes,
    FormsModule,
    CommonModule,
    BinaryViewModule,
    SimpleEditorModule,
    TooltipsModule,
    MatAutocompleteModule,
    SharedPipeModule,
    ConsoleModule
  ],
  declarations: [
    BinaryComponent,
    FakeGifComponent,
    GifPaletteComponent,
    MidiComponent,
    AsciiComponent,
    BindecComponent,
    MessageComponent,
    JsonComponent,
    CompareComponent,
    HtmlPostComponent,
  ],
  entryComponents: [
    FakeGifComponent,
    MidiComponent,
    AsciiComponent,
    BindecComponent,
    MessageComponent,
    JsonComponent,
    HtmlPostComponent,
    CompareComponent,
  ],
  exports: [BinaryComponent]
})
export class BinaryModule {

}
