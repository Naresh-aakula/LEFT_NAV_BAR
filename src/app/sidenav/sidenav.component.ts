import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollService } from 'src/app/config/sidenav-scroller.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() menuSidebar: any;
  @Output() showSubmenuEvent: EventEmitter<HTMLElement> = new EventEmitter();
  @Input() currentSection: string;

  constructor(private scrollService: ScrollService) {
    this.scrollService.currentSelection.subscribe(
      (selection: any) => (this.currentSection = selection)
    );
  }

  showSubmenu(itemEl: HTMLElement) {
    this.showSubmenuEvent.emit(itemEl);
  }

  scrollTo(section: any) {
    (document.querySelector(`#${section}`) as HTMLElement).scrollIntoView();
  }

  isCurrentSelection(items: any, currentSection: string): boolean {
    if (items.sub_menu.length) {
      const elementsID = items.sub_menu.map((submenu: any) => submenu.id);
      return elementsID.indexOf(currentSection) !== -1 ? true : false;
    } else {
      return currentSection === items.id;
    }
  }

  showSubMenu(items: any, currentSection: string): boolean {
    if (items.sub_menu.length) {
      const elementsID = items.sub_menu.map((submenu: any) => submenu.id);
      return elementsID.indexOf(currentSection) !== -1 ? true : false;
    }
    return false;
  }
}
