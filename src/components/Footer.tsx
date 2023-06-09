export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Verifai
          </p>
        </div>
      </div>
    </footer>
  );
}
