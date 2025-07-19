import '../styles/Button.css'

export default function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}