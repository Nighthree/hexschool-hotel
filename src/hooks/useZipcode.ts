import React, { useEffect, useState } from 'react';
import { ZipCodeMapProps } from '@/assets/types';
import ZipCodeMap from '@/assets/constant/zipcode';

export default function useZipcode() {
  const [zipcode, setZipcode] = useState<ZipCodeMapProps[]>([]);
  const [cityList, setCityList] = useState<string[]>([]);

  const handleData = () => {
    const city = Array.from(new Set(ZipCodeMap.map((item) => item.city)));

    const data: ZipCodeMapProps[] = [];

    city.forEach((item) => {
      const obj: ZipCodeMapProps = {
        city: item,
        zone: [],
      };

      ZipCodeMap.forEach((detail) => {
        if (detail.city === item) {
          obj.zone.push(detail);
        }
      });

      data.push(obj);
    });
    // console.log('zipcode', data);
    setCityList(city);
    setZipcode(data);
  };

  useEffect(() => {
    handleData();
  }, []);

  return {
    state: zipcode,
    cityList,
  };
}
