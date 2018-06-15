import { DialogNotificationModule } from './dialog-notification.module';

describe('DialogNotificationModule', () => {
  let dialogNotificationModule: DialogNotificationModule;

  beforeEach(() => {
    dialogNotificationModule = new DialogNotificationModule();
  });

  it('should create an instance', () => {
    expect(dialogNotificationModule).toBeTruthy();
  });
});
