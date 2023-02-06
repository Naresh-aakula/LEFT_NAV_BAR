import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MENU_LINKS } from './config/side-menu.config';
import { ScrollService } from './config/sidenav-scroller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuSidebar = MENU_LINKS;
  currentSection = MENU_LINKS[0].id ?? '';

  options = this._formBuilder.group({
    bottom: 0,
    fixed: true,
    top: 0,
  });

  constructor(
    private _formBuilder: FormBuilder,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {}

  showSubmenuEvent(itemEl: HTMLElement) {
    itemEl.classList.toggle('showMenu');
  }

  onSectionChange(sectionId: string) {
    this.scrollService.selectionChange(sectionId);
  }
}
