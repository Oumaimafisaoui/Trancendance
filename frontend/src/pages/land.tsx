import LoginForm from "@/components/loginForm";
import styles from "@/styles/land.module.css";
import { Oswald, Monda, Poppins, Roboto } from "@next/font/google";
import Image from "next/image";
import bg from "../../public/background.png";

const oswald = Oswald({
  subsets: ["latin"],
  weight: "700",
});
const monda = Monda({
  subsets: ["latin"],
  weight: "400",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "200",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function Land() {
  return (
    <>
      <main className={styles.main}>
        <header>
          <div className={styles.nav}>
            <div className={styles.nav_logo}>
              <svg
                width="83"
                height="27"
                viewBox="0 0 166 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.791 25.209H32.209V29.791H13.791V39H4.60449V6.79102H32.209V11.3955H36.791V25.209ZM27.6045 25.209V11.3955H13.791V25.209H27.6045ZM78.209 34.3955H73.627V39H50.627V34.3955H46.0225V11.3955H50.627V6.79102H73.627V11.3955H78.209V34.3955ZM69.0225 34.3955V11.3955H55.209V34.3955H69.0225ZM119.627 39H110.44V29.791H105.836V25.209H101.231V20.6045H96.627V39H87.4404V6.79102H96.627V11.3955H101.231V16H105.836V20.6045H110.44V6.79102H119.627V39ZM161.045 34.3955H156.463V39H133.463V34.3955H128.858V11.3955H133.463V6.79102H161.045V11.3955H138.045V34.3955H151.858V25.209H142.649V20.6045H161.045V34.3955Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className={styles.nav_links}>
              <p className={`${styles.home} ${monda.className}`}>Home</p>
              <p className={`${styles.about} ${monda.className}`}>About Us</p>
            </div>

            <div className={`${styles.contact} ${monda.className}`}>
              Contact Us
            </div>
          </div>
        </header>

        <div className={styles.main_title}>
          <p className={`${styles.title} ${oswald.className}`}>
            Welcome to PONG Game
          </p>
          <p className={`${styles.title2} ${poppins.className}`}>
            Let The Fun Begin.
          </p>
          <a href="#section" className={styles.play}>
            Play Now
          </a>
        </div>
        {/* <div className={styles.main_bg}>
        <Image className={styles.main_bg_image} src={bg} alt="background" />
      </div> */}
      </main>
      <section className={styles.login_section} id="section">
        <div className={styles.signin}>
          <p className={`${styles.sign} ${monda.className}`}>Sign In</p>
          <div className={styles.signdiv}>
            <p className={`${styles.intra} ${roboto.className}`}>
              Sign In with Intra
            </p>
            <p className={`${styles.or} ${monda.className}`}>or</p>
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
}
