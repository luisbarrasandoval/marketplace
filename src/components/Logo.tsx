import { FC } from "react";

const Logo: FC = () => {
  return (
    <div style={{
      width: 150,
    }}>
    <img
      src="/logoheader.png"
      alt="logo"
      style={{
        width: "200px",
        height: "auto",
      }}
    />
    </div>
  );
};

export default Logo;
