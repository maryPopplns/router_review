import { Link, Outlet } from 'react-router-dom';

export default function Invoices() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Invoices</h2>
      <br></br>
      <Link to='one'>one</Link>
      <Outlet />
    </main>
  );
}
