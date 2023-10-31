import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }),
  );

  // Test case: Check if the AppComponent is created successfully.
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // Expect the AppComponent instance to be truthy (i.e., it exists).
    expect(app).toBeTruthy();
  });

  // Test case: Check if the title of the AppComponent is 'boilerplate'.
  it(`should have as title 'boilerplate'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // Expect the title of the AppComponent to be 'boilerplate'.
    expect(app.title).toEqual('boilerplate');
  });

  // Test case: Check if the title is rendered correctly in the HTML.
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // Expect the text content of the '.content span' element to contain 'boilerplate app is running!'.
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'boilerplate app is running!',
    );
  });
});
