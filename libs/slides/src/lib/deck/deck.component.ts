import { Component, ContentChildren, EventEmitter, HostBinding, Input, Optional, Output, QueryList, TemplateRef } from '@angular/core';
import { SlideControls } from '../../../../presentation/src/lib/presentation/presentation.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'slides-deck',
  templateUrl: './deck.component.html',
  styleUrls: [
    './deck.component.scss'
  ]
})
export class SlidesDeckComponent implements SlideControls {
  slides: any[] = [];
  @Input() theme = 'basic';
  @ContentChildren(TemplateRef) templates: QueryList<TemplateRef<any>>;
  activeSlideIndex = 0;
  @Output() onSlideChange = new EventEmitter<number>();
  @Output() onSlideAdded = new EventEmitter<{ index: number, id: string }>();
  @HostBinding('class.has-milestone') hasMilestone = false;
  private milestone: string = '';

  constructor(@Optional() route: ActivatedRoute) {
    this.milestone = route.snapshot.queryParams.milestone;
    this.hasMilestone = !!this.milestone;
  }

  addSlide(slide) {
    if (!this.milestone || this.milestone === slide.milestone) {
      this.slides.push(slide)
    }
  }

  goToSlide(index: number) {
    this.activeSlideIndex = index;
    this.onSlideChange.emit(index);
  }

  nextSlide() {
    this.goToSlide(this.activeSlideIndex + 1);
  }

  previousSlide() {
    this.goToSlide(this.activeSlideIndex - 1);
  }

  canGoNext(): boolean {
    return this.activeSlideIndex + 1 < this.slides.length;
  }

  canGoPrevious(): boolean {
    return this.activeSlideIndex > 0;
  }
}