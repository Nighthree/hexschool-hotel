'use client';
import useRegister from '@/hooks/useRegister';

export default function Register() {
  const {
    state: { yearList, monthList, dayList, cityList, countyList, detail, pwdAgain, birthday, city, county, address },
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
  } = useRegister();

  return (
    <div>
      <h1>註冊</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <span>電子信箱</span>
          <input
            type="email"
            name="email"
            placeholder="hello@example.com"
            onChange={handleDetail}
            value={detail.email}
            required
          />
        </label>
        <label>
          <span>密碼</span>
          <input
            type="password"
            name="password"
            placeholder="請輸入密碼"
            onChange={handleDetail}
            value={detail.password}
            required
          />
        </label>
        <label>
          <span>確認密碼</span>
          <input
            type="password"
            name="pwdagain"
            placeholder="請再次輸入密碼"
            onChange={handlePwdAgain}
            value={pwdAgain}
            required
          />
        </label>
        <label>
          <span>姓名</span>
          <input
            type="text"
            name="name"
            placeholder="請輸入姓名"
            onChange={handleDetail}
            value={detail.name}
            required
          />
        </label>
        <label>
          <span>手機號碼</span>
          <input
            type="phone"
            name="phone"
            placeholder="請輸入姓名"
            onChange={handleDetail}
            value={detail.phone}
            required
          />
        </label>
        <label>
          <span>生日- 年</span>
          <select name="year" onChange={handleBirthday} value={birthday.year}>
            {yearList.map((item) => (
              <option key={item} value={item}>
                {item} 年
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>生日 - 月</span>
          <select name="month" onChange={handleBirthday} value={birthday.month}>
            {monthList.map((item) => (
              <option key={item} value={item}>
                {item} 月
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>生日 - 日</span>
          <select name="day" onChange={handleBirthday} value={birthday.day}>
            {dayList.map((item) => (
              <option key={item} value={item}>
                {item} 日
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>市</span>
          <select name="" onChange={handleCity} value={city}>
            {cityList.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>區</span>
          <select name="" onChange={handleCounty} value={county?.county}>
            {countyList.map((item) => (
              <option key={item.county} value={item.county}>
                {item.county}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>地址</span>
          <input
            type="text"
            name="name"
            placeholder="請輸入詳細地址"
            onChange={handleAddress}
            value={address}
            required
          />
        </label>

        <button type="submit">送出</button>
      </form>
    </div>
  );
}
