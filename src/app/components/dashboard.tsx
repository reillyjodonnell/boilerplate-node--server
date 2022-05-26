import React from 'react';

interface IProps {
  toggleLogin: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Dashboard({ toggleLogin }: IProps) {
  return (
    <>
      <span>Welcome to the dashboard</span>

      <button onClick={toggleLogin}>Login</button>
    </>
  );
}
