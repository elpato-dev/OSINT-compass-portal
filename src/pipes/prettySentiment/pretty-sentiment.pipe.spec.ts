import { PrettySentimentPipe } from './pretty-sentiment.pipe';
import {DomSanitizer} from "@angular/platform-browser";
import {TestBed} from "@angular/core/testing";

describe('PrettySentimentPipe', () => {
  let pipe: PrettySentimentPipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    sanitizer = {
      bypassSecurityTrustHtml: () => '',
    } as unknown as DomSanitizer;

    TestBed.configureTestingModule({
      providers: [{ provide: DomSanitizer, useValue: sanitizer }],
    });

    pipe = new PrettySentimentPipe(sanitizer);
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });
});
