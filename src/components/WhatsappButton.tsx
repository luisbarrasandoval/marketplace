import { FC } from "react";

interface WhatsappButtonProps {
  text: string;
  phone: string;
  message: string;
}

const WhatsappButton: FC<WhatsappButtonProps> = ({ text, phone, message }) => {
  return (
    <a
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "20px",
        fontWeight: "bold",
        textDecoration: "none",
      }}
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="/logo-wasap.png"
        alt="whatsapp"
        style={{
          width: "50px",
          height: "auto",
        }}
      />
    </a>
  );
};

export default WhatsappButton;
