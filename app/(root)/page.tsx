import Image from "next/image";
import logo from "@/public/assets/logos/logo1.png"

export default function Home() {
  return (
    <div className="text-white bg-dark">
      <Image  src={logo} alt=""/>Konnect
    </div>
  );
}
