import FacebookIcon from "@/components/icons/FacebookIcon";
import YoutubeIcon from "@/components/icons/YoutubeIcon";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="p-4 border-primary/40 border-t-2">
        <div className="flex justify-between items-center max-md:flex-col max-md:justify-center">
          <Image src={"/assets/logo.svg"} alt="logo" width={200} height={200} />

          {/* Nav Links */}

          <div className="flex   gap-20 max-md:flex-col max-md:justify-center max-md:items-center max-lg:gap-4">
            <div className="flex flex-col gap-3 max-md:w-full max-md:text-center">
              <span className="font-semibold text-heading">Quick Links</span>
              <div className="mt-2 flex flex-col">
                <span className="text-subheading font-semibold cursor-pointer">
                  Home
                </span>
                <span className="text-subheading font-semibold cursor-pointer">
                  Community Forum
                </span>
                <span className="text-subheading font-semibold cursor-pointer">
                  About us
                </span>
              </div>
            </div>

            <div className="flex flex-col  gap-3 max-md:w-full max-md:text-center">
              <span className="font-semibold text-heading">Contact Us</span>
              <div className="mt-2 flex flex-col">
                <span className="text-subheading font-semibold cursor-pointer">
                  Support
                </span>
                <span className="text-subheading font-semibold cursor-pointer">
                  FAQs
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 max-md:w-full max-md:text-center">
              <span className="font-semibold text-heading">Find us on</span>
              <div className="mt-2 flex flex-col gap-2 max-md:justify-center max-md:items-center">
                <div className="flex items-center gap-2 cursor-pointer">
                  <FacebookIcon />
                  <span className="text-subheading font-semibold">
                    Facebook
                  </span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <YoutubeIcon />
                  <span className="text-subheading font-semibold">Youtube</span>
                </div>
              </div>
            </div>
          </div>

          {/* APP STORE Buttons */}

          <div className="flex flex-col gap-4">
            <div className="mt-3 border border-primary flex h-14 w-48 cursor-pointer items-center justify-center rounded-lg bg-white text-black">
              <div className="mr-3">
                <svg viewBox="30 336.7 120.9 129.2" width={30}>
                  <path
                    fill="#FFD400"
                    d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                  />
                  <path
                    fill="#FF3333"
                    d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                  />
                  <path
                    fill="#48FF48"
                    d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                  />
                  <path
                    fill="#3BCCFF"
                    d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs">Get it on</div>
                <div className="-mt-1 font-sans text-xl font-semibold">
                  Google Play
                </div>
              </div>
            </div>
            <div className=" border border-primary mt-3 flex h-14 w-48 cursor-pointer items-center justify-center rounded-xl bg-white text-black">
              <div className="mr-3">
                <svg viewBox="0 0 384 512" width={30}>
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs">Get it on</div>
                <div className="-mt-1 font-sans text-2xl font-semibold">
                  App Store
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
