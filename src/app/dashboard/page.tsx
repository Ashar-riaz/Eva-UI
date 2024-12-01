"use client";
import Navbar from "@/component/Navbar/Nav";
import VoiceProcessor from "@/component/VoiceProcessor"
export default function Dashboard() {
 

  return (
    <>
      <Navbar showBrand={true} showLoginButton={false} />
      <VoiceProcessor />
    </>
  );
}
