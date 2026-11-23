import { TestBed } from '@angular/core/testing';
import { Projects } from './projects';

describe('Projects', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects],
    }).compileComponents();
  });

  it('shows the published Simpsonpedia project with working destinations', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('#simpsonpedia-title')?.textContent).toContain('Simpsonpedia');
    const links = Array.from(element.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]'));
    expect(links.map((link) => link.href)).toEqual([
      'https://pxadanny.github.io/simpsonpedia/characters',
      'https://github.com/pxadanny/simpsonpedia',
    ]);
    expect(element.textContent).not.toContain('Enterprise SaaS Dashboard');
  });
});
