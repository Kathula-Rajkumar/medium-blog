export const Footer = () => {
    return (
      <div className="w-full border-t border-black bg-white py-6 px-8 text-sm text-[#6B6B6B]">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left-padded Links */}
          <div className="flex flex-wrap gap-4">
            <a href="#">Help</a>
            <a href="#">Status</a>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
            <a href="#">Blog</a>
            <a href="#">Privacy</a>
            <a href="#">Rules</a>
            <a href="#">Terms</a>
            <a href="#">Text to speech</a>
          </div>
  
          {/* Crafted by with LinkedIn logo */}
          <div className="mt-4 md:mt-0 flex items-center gap-1">
            <p className="text-xs md:text-sm flex items-center gap-1">
            M a d e b y : <span className="font-semibold">Rajkumar Kathula</span>
              <a
                href="https://www.linkedin.com/in/rajkumar-kathula-3922002b4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/linkedin-logo.png"
                  alt="LinkedIn"
                  className="h-4 w-4"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  