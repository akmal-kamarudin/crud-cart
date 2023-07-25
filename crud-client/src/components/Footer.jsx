const Footer = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center inset-x-0 bottom-0 mt-auto">
      <p className="font-light text-sm px-8 pt-8 pb-4 lg:text-base">
        &copy;{" "}
        <code>
          {new Date().getFullYear()} &bull; Developed by Akmal Kamarudin
        </code>
      </p>
    </div>
  );
};

export default Footer;
