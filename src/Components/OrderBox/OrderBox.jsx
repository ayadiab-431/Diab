import { FaWhatsapp, FaFacebookMessenger, FaPhone } from "react-icons/fa";

export default function OrderBox({
    phone = "01024891099",
    wsPhone = "201014467843",
    messengerLink = "https://m.me/yourPage",
    productName = "المنتج"
}) {

  const buttonStyle = {
    color: "#fff",
    padding: "0.8rem 1.2rem",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    justifyContent: "center",
    flex: 1
  };

  return (
    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
      {/* واتساب */}
      <a
        href={`https://wa.me/${wsPhone}?text=مرحبا%20أرغب%20في%20طلب%20${encodeURIComponent(productName)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...buttonStyle, background: "#25D366" }}
      >
        <FaWhatsapp size={20} /> واتساب
      </a>

      {/* ماسنجر */}
      <a
        href={messengerLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...buttonStyle, background: "#0084FF" }}
      >
        <FaFacebookMessenger size={20} /> ماسنجر
      </a>

      {/* اتصال */}
      <a
        href={`tel:+2${phone}`}
        style={{ ...buttonStyle, background: "#343a40" }}
      >
        <FaPhone size={20} /> {phone}
      </a>

    </div>
  );
}
