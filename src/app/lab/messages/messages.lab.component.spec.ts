import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesComponentForLab } from './messages.lab.component';
import { MessageService } from '../../services/message/message.service';
import { By } from '@angular/platform-browser';

describe('MessagesComponentForLab', () => {
  let component: MessagesComponentForLab;
  let fixture: ComponentFixture<MessagesComponentForLab>;
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MessagesComponentForLab],
      providers: [MessageService],
    });

    fixture = TestBed.createComponent(MessagesComponentForLab);
    component = fixture.componentInstance;
    messageService = TestBed.inject(MessageService);

    fixture.detectChanges();
  });

  it('expect component template to be empty', () => {
    const containerElement = fixture.debugElement.query(By.css('#container'));
    expect(containerElement).toBeNull();
  });

  it('then expect div.msg to have the messages after setting it', () => {
    messageService.add('Test message 1');
    messageService.add('Test message 2');

    fixture.detectChanges();

    const messageDivs = fixture.debugElement.queryAll(By.css('.msg'));
    expect(messageDivs.length).toBe(2);

    expect(messageDivs[0].nativeElement.textContent).toContain(
      'Test message 1'
    );
    expect(messageDivs[1].nativeElement.textContent).toContain(
      'Test message 2'
    );
  });
});
