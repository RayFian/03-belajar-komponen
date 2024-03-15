import Image from "next/image";
import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Ilmuwan yang luar biasa</h1>
        <Gallery />
    </div>
  );
}
