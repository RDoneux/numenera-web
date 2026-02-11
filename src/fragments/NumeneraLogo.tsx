import Logo from "../assets/numenera-logo.svg?react";

interface NumeneraLogoProps {
  colour?: string;
}
export default function NumeneraLogo({ colour }: NumeneraLogoProps) {
  return <Logo style={{ color: colour ?? "#fbfbfb", width: "100%" }} />;
}
