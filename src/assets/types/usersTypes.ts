export type UsersProps = {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  address: {
    zipcode: number;
    detail: string;
  };
};

export type UserDetailProps = {
  name: string;
  email: string;
  password: string;
  phone: string;
  [key: string]: string;
};

export type UserBirthdayProps = {
  year: number;
  month: number;
  day: number;
  [key: string]: number;
};

export type ZipCodeMapProps = {
  city: string;
  zone: ZipZoneProps[];
};

export type ZipZoneProps = {
  city: string;
  county: string;
  zipcode: number;
  detail: string;
};
