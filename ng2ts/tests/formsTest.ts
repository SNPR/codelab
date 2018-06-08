import { upload_upload_component_html } from '../code';
import { async, TestBed, tick } from '@angular/core/testing';
import { MatInputModule } from '@angular/material';
import { AppModule } from '../app.module';
import { UploadComponent } from '../upload/upload.component';
import { FormsModule } from '@angular/forms';
import 'initTestBed';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

export function createFakeEvent(type: string) {
  const event = document.createEvent('Event');
  event.initEvent(type, true, true);
  return event;
}

export function dispatchFakeEvent(node: Node | Window, type: string) {
  node.dispatchEvent(createFakeEvent(type));
}

describe('forms', () => {
  beforeEach(() => {
    try {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        declarations: [UploadComponent],
        imports: [FormsModule, MatInputModule, NoopAnimationsModule]
      });
      TestBed.overrideComponent(UploadComponent, {
        set: {
          template: upload_upload_component_html,
          templateUrl: undefined
        }
      });
      TestBed.compileComponents();
    } catch (e) {
    }
  });

  it('app.module.ts: Add FormsModule and MatInputModule, to the imports.', () => {
    let metadata;
    try {
      metadata = Reflect.getMetadata('annotations', AppModule);
    } catch (e) {
      // Do nothing, we have assertions below for this case
    }
    chai.expect(metadata[0].imports).to.contain(MatInputModule);
    chai.expect(metadata[0].imports).to.contain(FormsModule);
  });


  it('upload.component.html: Add "title" input bound to the title property of the component', (done) => {
    const fixture = TestBed.createComponent(UploadComponent);
    fixture.componentInstance.title = 'hello';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const input = fixture.nativeElement.querySelector('input');
      chai.expect(input).is.ok;
      chai.expect(input.value).is.equal('hello');
      fixture.componentInstance.title = 'greatTitle';
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        chai.expect(input.value).to.equal(fixture.componentInstance.title);
        done();
      });
    });
  });

  it('upload.component.html: Add "description" textarea bound to the description property of the component', (done) => {
    const fixture = TestBed.createComponent(UploadComponent);
    fixture.componentInstance.description = 'hello';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const textarea = fixture.nativeElement.querySelector('textarea');
      chai.expect(textarea).is.ok;
      chai.expect(textarea.value).is.equal('hello');
      fixture.componentInstance.description = 'greatdescription';
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        chai.expect(textarea.value).to.equal(fixture.componentInstance.description);
        done();
      });
    });
  });

});