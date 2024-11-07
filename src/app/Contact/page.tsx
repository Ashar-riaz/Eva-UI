import Nav from "@/component/Navbar/Nav";
import React from "react";
import Image from "next/image";
import contact1 from "@/assets/contact/contact1.png";

export default function page() {
  return (
    <>
      <Nav showBrand={true} showLoginButton={true} />
      <div className="flex flex-row justify-center items-center ">
        <div className="flex flex-row items-center">
          <Image src={contact1} alt="Contact Image" />
        </div>
        <div className="flex flex-row">
          <p>Text content goes here.</p>
        </div>
      </div>
    </>
  );
}
