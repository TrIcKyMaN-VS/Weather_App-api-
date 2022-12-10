import React from "react";

function Footer() {
  return (
    <div>
      <footer class="bg-black text-center fixed-bottom text-lg-start">
        <div
          class="text-center p-3"
          style={{backgroundColor: "rgba(0, 0, 0, 0.2)",color: "limegreen"}}
        >
          © 2022 Copyright:
          <a class="text-bold ps-2" style={{color: "limegreen", fontVariant:"small-caps"}} href="https://github.com/TrIcKyMaN-VS">
            VasanthSurya @ TrIcKyMaN-VS ❤️
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
