import { CustomError } from "./custom-error";

export class NotAuthorizedError extends CustomError {
  statusCode = 400;
  constructor(private reason = "Not authorized") {
    super(reason);
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors(): { message: string; field?: string }[] {
    return [{ message: this.reason }];
  }
}
