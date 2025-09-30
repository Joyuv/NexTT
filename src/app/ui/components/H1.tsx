import { Courier_Prime } from "next/font/google";

const courierPrime = Courier_Prime({
  weight: "400",
});

export default function H1({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${courierPrime.className} flex justify-center items-center text-4xl select-none`}
    >
      <p>{children}</p>
    </div>
  );
}
