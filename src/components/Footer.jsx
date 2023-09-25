function Footer() {
  return (
    <>
      <footer className="bg-neutral-800 flex w-full py-10 justify-center text-white">
        <div className="flex justify-between flex-col gap-10 md:flex-row w-full px-[13%]">
          <div className="flex flex-col gap-1">
            <p className="text-white text-2xl font-bold mb-2">AllAround Shop</p>
            <p className="text-neutral-400 text-sm">
              © 2023 AllAround Shop , Inc. All Rights Reserved
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-white text-md font-bold mb-2">COMPANY</p>
            <p className="text-neutral-400 text-sm hover:text-neutral-200 cursor-pointer">
              Terms & Conditions
            </p>
            <p className="text-neutral-400 text-sm hover:text-neutral-200 cursor-pointer">
              Deliveries
            </p>
            <p className="text-neutral-400 text-sm hover:text-neutral-200 cursor-pointer">
              Contact
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-white text-md font-bold mb-2">FOLLOW US</p>
            <p className="text-neutral-400 text-sm hover:text-neutral-200 cursor-pointer">
              Instagram
            </p>
            <p className="text-neutral-400 text-sm hover:text-neutral-200 cursor-pointer">
              Twitter
            </p>
            <p className="text-neutral-400 text-sm hover:text-neutral-200 cursor-pointer">
              Facebook
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
