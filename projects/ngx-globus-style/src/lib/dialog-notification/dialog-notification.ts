export class DialogNotificationConfig implements Deserializable {
  width: string;

  constructor() {
    this.width = '380px';
  }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}

export interface Deserializable {
  deserialize(input: any): this;
}
