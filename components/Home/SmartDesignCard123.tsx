"use client";

export default function AboutUsHeader() {
  return (
    <div className="wrap">
      <div className="line"></div>

      <div className="text">
        <span className="about">ABOUT</span>
        <span className="us">us</span>
      </div>

      <style jsx>{`
        .wrap {
          width: 100%;
          background: #fff;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 16px;
          padding: 24px 40px;
        }

        .line {
          width: 90px;
          height: 1.5px;
          background: #000;
        }

        .text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .about {
          font-family: "Quattrocento Sans", sans-serif;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 2.5px;
          color: #000;
          line-height: 1;
        }

        .us {
          font-family: "Allura", cursive;
          font-size: 30px;
          color: #000;
          line-height: 1;
          margin-top: -4px;
        }

        /* MOBILE */
        @media (max-width: 480px) {
          .wrap {
            justify-content: center;
            padding: 20px;
          }

          .line {
            width: 60px;
          }

          .about {
            font-size: 18px;
            letter-spacing: 2px;
          }

          .us {
            font-size: 26px;
          }
        }
      `}</style>
    </div>
  );
}
