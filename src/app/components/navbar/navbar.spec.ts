import { TestBed } from '@angular/core/testing';
import { Navbar } from './navbar';

describe('Navbar', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
    }).compileComponents();
  });

  it('provides projects anchors for desktop and mobile navigation', () => {
    const fixture = TestBed.createComponent(Navbar);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const projects = element.querySelectorAll('a[href="#projects"]');
    // The mobile link is rendered only when the menu opens.
    expect(projects.length).toBe(1);

    fixture.componentInstance.menuOpen = true;
    fixture.detectChanges();
    expect(element.querySelectorAll('a[href="#projects"]').length).toBe(2);
  });
});
