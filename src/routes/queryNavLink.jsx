import { useLocation, NavLink } from 'react-router-dom';

export default function queryNavLink({ to, name, key }) {
  let location = useLocation();
  return (
    <NavLink
      style={({ isActive }) => ({
        display: 'block',
        margin: '1rem 0',
        color: isActive ? 'red' : '',
      })}
      to={to + location.search}
      key={key}
    >
      {name}
    </NavLink>
  );
}
