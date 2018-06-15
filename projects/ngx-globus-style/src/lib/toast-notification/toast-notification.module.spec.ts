import { ToastNotificationModule } from './toast-notification.module';

describe('ToastNotificationModule', () => {
  let toastNotificationModule: ToastNotificationModule;

  beforeEach(() => {
    toastNotificationModule = new ToastNotificationModule();
  });

  it('should create an instance', () => {
    expect(toastNotificationModule).toBeTruthy();
  });
});
