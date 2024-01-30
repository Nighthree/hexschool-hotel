'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Menu from '@/app/c.menu';

export default function Header() {
  const [isOpenDawer, setIsOpenDawer] = useState(false);
  const title = '享樂酒店 Enjoyment Luxury Hotel';

  const handleToggerDawer = () => {
    setIsOpenDawer((prev) => !prev);
  };

  return (
    <header className="layout-header container">
      <h2 className="logo" title={title}>
        {title}
      </h2>

      <Image
        className="cursor-pointer d-md-none"
        onClick={handleToggerDawer}
        width={24}
        height={24}
        src="/images/ic_menu.svg"
        alt="menu"
      />
      <div className="menu-wrap" data-open={isOpenDawer}>
        <div className="close-wrap">
          <button className="close-btn" type="button" title="close" onClick={handleToggerDawer}>
            <Image className="d-md-none" width={48} height={48} src="/images/ic_close.svg" alt="menu" />
          </button>
        </div>
        <Menu />
      </div>
    </header>
  );
}
