export class CompanyModel {
  id?: number;
  name: string;
  createDate: Date;
  size: string;
  address: string;
  country: string;
  phone: number;
  description: string;

  constructor(name: string, createDate: Date, size: string, address: string, country: string, phone: number, description: string, id?: number) {
    this.id = id;
    this.name = name;
    this.createDate = createDate;
    this.size = size;
    this.address = address;
    this.country = country;
    this.phone = phone;
    this.description = description;
  }
}
