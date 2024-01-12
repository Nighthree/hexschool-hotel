import { useState, useEffect } from 'react';
import { UsersProps, UserDetailProps, UserBirthdayProps, ZipCodeMapProps, ZipZoneProps } from '@/assets/types';
import useZipcode from '@/hooks/useZipcode';
import { zeorFormat } from '@/utils';
import { apiPostSignup } from '@/assets/api/user';

export default function useRegister() {
  const { state: zipcode, cityList } = useZipcode();
  const [step, setStep] = useState(1);
  const [detail, setDetail] = useState({ email: '', password: '', name: '', phone: '' });

  const [pwdAgain, setPwdAgain] = useState('');

  const [birthday, setBirthday] = useState({ year: new Date().getFullYear(), month: 1, day: 1 });
  const [yearList, setYearList] = useState<number[]>([]);
  const [monthList, setMonthList] = useState<number[]>([]);
  const [dayList, setDayList] = useState<number[]>([]);

  const [city, setCity] = useState('');
  const [countyList, setCountyList] = useState<ZipZoneProps[]>([]);
  const [county, setCounty] = useState<ZipZoneProps>({ city: '', county: '', zipcode: 0, detail: '' });
  const [address, setAddress] = useState('');
  const [agree, setAgree] = useState(false);

  const createYearList = () => {
    const length = 120;

    const nowYear = new Date().getFullYear();
    const oldYear = nowYear - length;

    const yearArray = [];

    for (let i = oldYear; i <= nowYear; i++) {
      yearArray.push(i);
    }
    setYearList(yearArray.reverse());
  };

  const createMonthList = () => {
    const length = 12;

    const monthArray = [];

    for (let i = 1; i <= length; i++) {
      monthArray.push(i);
    }
    setMonthList(monthArray);
  };

  const createDayList = () => {
    let length = 31;

    if (birthday.year && birthday.month) {
      length = new Date(Number(birthday.year), Number(birthday.month), 0).getDate();
    }

    const dayArray = [];

    for (let i = 1; i <= length; i++) {
      dayArray.push(i);
    }

    setDayList(dayArray);
  };

  const createCityData = (value: string) => {
    let list: ZipZoneProps[] = [];

    zipcode.forEach((item) => {
      if (item.city === value) {
        list = item.zone;
      }
    });

    setCountyList(list);
    setCity(value);
  };

  const handleDetail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const key = e.target.name;

    setDetail((prev) => {
      const data: UserDetailProps = { ...prev };
      data[key] = value;

      return data;
    });
  };

  const handlePwdAgain = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPwdAgain(value);
  };

  const handleBirthday = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const key = e.target.name;

    setBirthday((prev) => {
      const data: UserBirthdayProps = { ...prev };
      data[key] = Number(value);

      return data;
    });
  };

  const handleCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    createCityData(value);
  };

  const handleCounty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const county = countyList.find((item) => item.county === value) as ZipZoneProps;

    setCounty(county);
  };

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setAddress(value);
  };

  const validateUserData = (): boolean => {
    let state = true;
    if (!detail.email) {
      state = false;
      console.error('請輸入電子郵件');
    }
    if (!detail.password) {
      state = false;
      console.error('請輸入密碼');
    }
    if (!pwdAgain) {
      state = false;
      console.error('請輸入再次確認密碼');
    }

    if (!detail.name) {
      state = false;
      console.error('請輸入姓名');
    }
    if (!detail.phone) {
      state = false;
      console.error('請輸入電話');
    }

    if (detail.password.length < 8) {
      state = false;
      console.error('密碼需要超過 8 碼');
    }

    if (pwdAgain !== detail.password) {
      state = false;
      console.error('密碼不符');
    }

    return state;
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const isValid = validateUserData();

    if (!isValid) return;

    const params: UsersProps = {
      name: detail.name,
      email: detail.email,
      password: detail.password,
      phone: detail.phone,
      birthday: `${birthday.year}/${zeorFormat(birthday.month)}/${zeorFormat(birthday.day)}`,
      address: {
        zipcode: county.zipcode,
        detail: address,
      },
    };

    console.log('handleSubmit', params);

    await apiPostSignup(params).then((response) => {
      const res = response.data;
      console.log('apiPostSignup', res);
      if (!res.status) {
        console.error(res.message);
        return;
      }

      console.log('註冊成功');
    });
  };

  useEffect(() => {
    createYearList();
    createMonthList();
  }, []);

  useEffect(() => {
    createDayList();
  }, [birthday]);

  useEffect(() => {
    createCityData(cityList[0]);
  }, [cityList]);

  return {
    state: {
      yearList,
      monthList,
      dayList,
      cityList,
      countyList,
      detail,
      pwdAgain,
      birthday,
      city,
      county,
      address,
    },
    methods: {
      setStep,
      handleDetail,
      handlePwdAgain,
      handleBirthday,
      handleCity,
      handleCounty,
      handleAddress,
      handleSubmit,
    },
  };
}
