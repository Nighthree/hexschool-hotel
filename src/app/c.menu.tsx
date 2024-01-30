import Link from 'next/link';
export default function Menu() {
  return (
    <menu className="menu">
      <Link className="nav-link" href="/">
        客房旅宿
      </Link>
      <Link className="nav-link" href="/">
        會員登入
      </Link>
      <Link className="nav-link active" href="/">
        立即訂房
      </Link>
    </menu>
  );
}
