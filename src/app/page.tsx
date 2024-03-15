import Image from "next/image";
import { Gallery } from "@/components/gallery";

export default function Bio() {
  return (
    <div>
      <div className="intro">
        <h1>Selamat datang di website saya!</h1>
      </div>
      <p className="summary">
        Anda dapat membaca uneg-unegku di sini.
        <br />
        <br />
        <b>
          Juga ada <i>foto</i>
        </b>{" "}
        Ilmuwan!
      </p>
    </div>
  );
}
