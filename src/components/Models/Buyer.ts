import type { IBuyer } from "../../types/index.ts";

export class Buyer {
  private data: IBuyer = {
    payment: '',
    address: '',
    email: '',
    phone: '',
  }

  saveData(update: IBuyer): void {
    this.data = { ...this.data, ...update};
  }

  getData(): IBuyer {
    return { ...this.data };
  }

  clear(): void {
    this.data = {
      payment: '',
      address: '',
      email: '',
      phone: '',
    };
  }

  validate(): Record<keyof IBuyer, string> {
    const errors: Partial<Record<keyof IBuyer, string>> = {};

    if (!this.data.payment?.trim()) {
      errors.payment = 'Выберите способ оплаты';
    }

    if (!this.data.address?.trim()) {
      errors.address = 'Адрес не может быть пустым';
    }

    if (!this.data.email?.trim()){
      errors.email = 'Email не может быть пустым';
    }

    if (!this.data.phone?.trim()){
      errors.email = 'Телефон не может быть пустым';
    }

    return errors as Record<keyof IBuyer, string>;
  }
}

