export type UserProps = {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  [key: string]: string;
};

export type AddressProps = {
  address: {
    zipcode: number;
    detail: string;
    [key: string]: string | number;
  };
};

export type UserDetailsProps = UserProps & AddressProps;

export type ZipCodeMapProps = {
  city: string;
  zone: ZipZoneProps[];
};

export type ZipZoneProps = {
  city: string;
  county: string;
  zipcode: number;
  detail?: string;
};
