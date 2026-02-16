"use client";

export function BottomLine() {
  return (
    <p
      className="
        font-handwritten
        text-black
        text-center
        mt-4
        lg:mt-8
        pb-10

        text-[26px]
        sm:text-[32px]
        md:text-[40px]
        lg:text-[48px]

        leading-tight
      "
      style={{
        textShadow: `
          0px 2px 0px rgba(0,0,0,0.15),
          0px 4px 0px rgba(0,0,0,0.10)
        `,
      }}
    >
      One Call Closer to Your Dream <br />
      Home.
    </p>
  );
}
