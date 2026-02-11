import packageInfo from "../../../package.json";

export default function Footer() {
  return (
    <ul className="text-[var(--text-colour)]">
      <li>
        <small>{packageInfo.version}</small>
      </li>
    </ul>
  );
}
