export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black dark:bg-zinc-950 text-white py-8">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {currentYear} Nikhil Thakur. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/code007nikhil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nikhil-thakur00/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/nikhil.thakur_00/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
