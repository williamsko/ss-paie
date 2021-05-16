import { UUID } from 'uuid-generator-ts';

export class Utils {
  static generateUniqueCode(): string {
    return new UUID().getDashFreeUUID();
  }
}
