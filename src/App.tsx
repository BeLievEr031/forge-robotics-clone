import { useEffect, useRef, useState } from "react";

function App() {
  const [height, setHeight] = useState(600);
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Base height = 80vh → shrink until 300px
      const maxHeight = window.innerHeight * 0.8;
      const minHeight = 450;

      const newHeight = Math.max(minHeight, maxHeight - scrollY * 0.5);
      setHeight(newHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio >= 0.3);
        // setHeight(0)
      },
      {
        threshold: [0, 0.3, 1], // 30% visibility
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#202020" }}>
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-10">
        <img
          alt="Forge Robotics Icon"
          loading="lazy"
          width={80}
          height={80}
          decoding="async"
          data-nimg={1}
          srcSet="https://forge-robotics.com/_next/image?url=%2Ficon.png&w=96&q=75 1x, https://forge-robotics.com/_next/image?url=%2Ficon.png&w=256&q=75 2x"
          src="https://forge-robotics.com/_next/image?url=%2Ficon.png&w=256&q=75"
          style={{ color: "transparent" }}
        />
      </div>
      <div className="flex" style={{ height: "calc(-80px + 100vh)" }}>
        <div className="w-1/5" />
        <div className="w-3/5 flex justify-center items-center">
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 z-0 transition-all duration-1000 opacity-100 translate-y-[-50%]">
            <img
              alt="Toolhead Image"
              loading="lazy"
              width={1600}
              height={600}
              decoding="async"
              data-nimg={1}
              className="object-contain transition-all duration-300"
              srcSet="https://forge-robotics.com/_next/image?url=%2FToolhead3.png&w=1920&q=75 1x, https://forge-robotics.com/_next/image?url=%2FToolhead3.png&w=3840&q=75 2x"
              src="https://forge-robotics.com/_next/image?url=%2FToolhead3.png&w=3840&q=75"
              style={{
                color: "transparent",
                width: "100vw",
                height: `${height}px`,
                maxWidth: "100vw",
                maxHeight: "80vh",
                transition: "0.1s ease-out",
                display: `${isVisible ? "none" : "inline"}`
              }}
            />

            {/* <ShrinkingImage /> */}
          </div>
        </div>
        <div className="w-1/5" />
      </div>
      <div
        className="flex flex-col md:flex-row min-h-[16vh] mt-[10vh]"
        data-content-start="true"
      >
        <div className="w-full md:w-1/5 flex flex-col justify-center items-center py-8 md:py-0 md:pl-5">
          <div
            className="text-white font-mono text-base md:text-lg opacity-90 px-4 text-center"
            style={{
              fontFamily: '"Courier New", monospace',
              letterSpacing: "0.1em"
            }}
          >
            <div className="text-gray-400">// Precision</div>
            <div className="mt-2">
              First pass yield 90% <span className="text-xl md:text-2xl">→</span>{" "}
              99%
            </div>
          </div>
          <div className="mt-4">
            <img
              alt="Precision Image"
              loading="lazy"
              width={300}
              height={225}
              decoding="async"
              data-nimg={1}
              className="object-contain md:w-[400px] md:h-[300px]"
              srcSet="https://forge-robotics.com/_next/image?url=%2Fsite_side_images%20%2Fprecision.png&w=384&q=75 1x, https://forge-robotics.com/_next/image?url=%2Fsite_side_images%20%2Fprecision.png&w=640&q=75 2x"
              src="https://forge-robotics.com/_next/image?url=%2Fsite_side_images%20%2Fprecision.png&w=640&q=75"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
        <div className="hidden md:block w-3/5" />
        <div className="w-full md:w-1/5 flex flex-col justify-center items-center py-8 md:py-0 md:pr-5">
          <div
            className="text-white font-mono text-base md:text-lg opacity-90 px-4 text-center"
            style={{
              fontFamily: '"Courier New", monospace',
              letterSpacing: "0.1em"
            }}
          >
            <div className="text-gray-400">// Feedback</div>
            <div className="mt-2">
              Constant feedback loop to avoid any welding errors
            </div>
          </div>
          <div className="mt-4">
            <img
              alt="Feedback Loop Image"
              loading="lazy"
              width={300}
              height={225}
              decoding="async"
              data-nimg={1}
              className="object-contain md:w-[400px] md:h-[300px]"
              srcSet="https://forge-robotics.com/_next/image?url=%2Fsite_side_images%20%2FFeedback.png&w=384&q=75 1x, https://forge-robotics.com/_next/image?url=%2Fsite_side_images%20%2FFeedback.png&w=640&q=75 2x"
              src="https://forge-robotics.com/_next/image?url=%2Fsite_side_images%20%2FFeedback.png&w=640&q=75"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row min-h-[16vh] mt-4">
        <div className="w-full md:w-1/5 flex flex-col justify-center items-center py-8 md:py-0 md:pl-5">
          <div
            className="text-white font-mono text-base md:text-lg opacity-90 px-4 text-center"
            style={{
              fontFamily: '"Courier New", monospace',
              letterSpacing: "0.1em"
            }}
          >
            <div className="text-gray-400">// Setup</div>
            <div className="mt-2">90% less setup time</div>
          </div>
          <div className="mt-4">
            <img
              alt="Efficiency Image"
              loading="lazy"
              width={300}
              height={225}
              decoding="async"
              data-nimg={1}
              className="object-contain md:w-[400px] md:h-[300px]"
              srcSet="https://forge-robotics.com/_next/image?url=%2Fsite_side_images%20%2FSetup.png&w=384&q=75 1x, https://forge-robotics.com/_next/image?url=%2Fsite_side_images%20%2FSetup.png&w=640&q=75 2x"
              src="https://forge-robotics.com/_next/image?url=%2Fsite_side_images%20%2FSetup.png&w=640&q=75"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
        <div className="hidden md:block w-3/5" />
        <div className="w-full md:w-1/5 flex flex-col justify-center items-center py-8 md:py-0 md:pr-5">
          <div
            className="text-white font-mono text-base md:text-lg opacity-90 px-4 text-center"
            style={{
              fontFamily: '"Courier New", monospace',
              letterSpacing: "0.1em"
            }}
          >
            <div className="text-gray-400">// Automation</div>
            <div className="mt-2">
              Autonomous welding
              <br />
              Never program again
            </div>
          </div>
          <div className="mt-4">
            <img
              alt="Quality Image"
              loading="lazy"
              width={300}
              height={225}
              decoding="async"
              data-nimg={1}
              className="object-contain md:w-[400px] md:h-[300px]"
              srcSet="https://forge-robotics.com/_next/image?url=%2Fsite_side_images%20%2FAutomation.png&w=384&q=75 1x, https://forge-robotics.com/_next/image?url=%2Fsite_side_images%20%2FAutomation.png&w=640&q=75 2x"
              src="https://forge-robotics.com/_next/image?url=%2Fsite_side_images%20%2FAutomation.png&w=640&q=75"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row min-h-[16vh] mt-4 mb-64">
        <div className="w-full md:w-1/5 flex flex-col justify-center items-center py-8 md:py-0 md:pl-5">
          <div
            className="text-white font-mono text-base md:text-lg opacity-90 px-4 text-center"
            style={{
              fontFamily: '"Courier New", monospace',
              letterSpacing: "0.1em"
            }}
          >
            <div className="text-gray-400">// Reliability</div>
            <div className="mt-2">Near zero downtime</div>
          </div>
          <div className="mt-4">
            <img
              alt="Reliability Image"
              loading="lazy"
              width={300}
              height={225}
              decoding="async"
              data-nimg={1}
              className="object-contain md:w-[400px] md:h-[300px]"
              srcSet="https://forge-robotics.com/_next/image?url=%2Fsite_side_images%20%2FReliability.png&w=384&q=75 1x, https://forge-robotics.com/_next/image?url=%2Fsite_side_images%20%2FReliability.png&w=640&q=75 2x"
              src="https://forge-robotics.com/_next/image?url=%2Fsite_side_images%20%2FReliability.png&w=640&q=75"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
        <div className="hidden md:block w-3/5" />
        <div className="w-full md:w-1/5 flex flex-col justify-center items-center py-8 md:py-0 md:pr-5">
          <div
            className="text-white font-mono text-base md:text-lg opacity-90 px-4 text-center"
            style={{
              fontFamily: '"Courier New", monospace',
              letterSpacing: "0.1em"
            }}
          >
            <div className="text-gray-400">// Accuracy</div>
            <div className="mt-2">
              Sub millimeter accuracy
              <br />
              for any misalignments and defects
            </div>
          </div>
          <div className="mt-4">
            <img
              alt="Accuracy Image"
              loading="lazy"
              width={300}
              height={225}
              decoding="async"
              data-nimg={1}
              className="object-contain md:w-[400px] md:h-[300px]"
              srcSet="https://forge-robotics.com/_next/image?url=%2Fsite_side_images%20%2FAccuracy.png&w=384&q=75 1x, https://forge-robotics.com/_next/image?url=%2Fsite_side_images%20%2FAccuracy.png&w=640&q=75 2x"
              src="https://forge-robotics.com/_next/image?url=%2Fsite_side_images%20%2FAccuracy.png&w=640&q=75"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </div>
      <div
        className="min-h-screen"
        data-footer="true"
        style={{ backgroundColor: "rgb(21, 21, 21)" }}
        ref={targetRef}
      >
        <div className="flex flex-col min-h-screen">
          <div className="flex flex-col md:flex-row" style={{ height: "70vh" }}>
            <div
              className="w-full md:w-3/10 flex flex-col justify-center items-center px-4 py-8 md:py-0"
              style={{ height: "50vh", paddingTop: "5vh" }}
            >
              <div
                className="text-white font-mono text-base md:text-lg opacity-90 text-center"
                style={{
                  fontFamily: '"Courier New", monospace',
                  letterSpacing: "0.1em"
                }}
              >
                <div className="text-gray-400">// Contact</div>
                <div className="mt-2 space-y-1">
                  <div>Eoin Cobbe |CEO|</div>
                  <div>+1 415 304 2909</div>
                  <div>eoin@forge-robotics.com</div>
                </div>
              </div>
              <div className="mt-4">
                <img
                  alt="Eoin Cobbe"
                  loading="lazy"
                  width={240}
                  height={240}
                  decoding="async"
                  data-nimg={1}
                  className="object-contain rounded-full"
                  srcSet="https://forge-robotics.com/_next/image?url=%2Fimages%2Feoin.png&w=256&q=75 1x, https://forge-robotics.com/_next/image?url=%2Fimages%2Feoin.png&w=640&q=75 2x"
                  src="https://forge-robotics.com/_next/image?url=%2Fimages%2Feoin.png&w=640&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
            <div className="w-full md:w-2/5 flex flex-col justify-end items-center pb-8 px-4">
              <div
                className="text-white font-mono text-base md:text-lg opacity-90 text-center"
                style={{
                  fontFamily: '"Courier New", monospace',
                  letterSpacing: "0.1em"
                }}
              >
                <div className="text-gray-400">// Resources</div>
                <div className="mt-2">
                  <a
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontSize: "inherit",
                      fontFamily: "inherit"
                    }}
                  >
                    Forge Cost Benefit
                  </a>
                </div>
              </div>
            </div>
            <div
              className="w-full md:w-3/10 flex flex-col justify-center items-center px-4 py-8 md:py-0"
              style={{ height: "50vh", paddingTop: "5vh" }}
            >
              <div
                className="text-white font-mono text-base md:text-lg opacity-90 text-center"
                style={{
                  fontFamily: '"Courier New", monospace',
                  letterSpacing: "0.1em"
                }}
              >
                <div className="text-gray-400">// Contact</div>
                <div className="mt-2 space-y-1">
                  <div>Robert Cormican |CTO|</div>
                  <div>+1 415 304 5011</div>
                  <div>robert@forge-robotics.com</div>
                </div>
              </div>
              <div className="mt-4">
                <img
                  alt="Robert Cormican"
                  loading="lazy"
                  width={240}
                  height={240}
                  decoding="async"
                  data-nimg={1}
                  className="object-contain rounded-full"
                  srcSet="https://forge-robotics.com/_next/image?url=%2Fimages%2Frobert.png&w=256&q=75 1x, https://forge-robotics.com/_next/image?url=%2Fimages%2Frobert.png&w=640&q=75 2x"
                  src="https://forge-robotics.com/_next/image?url=%2Fimages%2Frobert.png&w=640&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center px-4 mt-8">
            <div
              className="text-white font-mono text-base md:text-lg opacity-90 text-center"
              style={{
                fontFamily: '"Courier New", monospace',
                letterSpacing: "0.1em"
              }}
            >
              <div className="text-gray-400">// Backed by</div>
              <div className="mt-4">
                <a
                  href="https://www.ycombinator.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    alt="Y Combinator"
                    loading="lazy"
                    width={200}
                    height={100}
                    decoding="async"
                    data-nimg={1}
                    className="object-contain"
                    srcSet="https://forge-robotics.com/_next/image?url=%2FYC.png&w=256&q=75 1x, https://forge-robotics.com/_next/image?url=%2FYC.png&w=640&q=75 2x"
                    src="https://forge-robotics.com/_next/image?url=%2FYC.png&w=640&q=75"
                    style={{ color: "transparent" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center px-4 mt-8">
            <div
              className="text-white font-mono text-base md:text-lg opacity-90 text-center"
              style={{
                fontFamily: '"Courier New", monospace',
                letterSpacing: "0.1em"
              }}
            >
              <div className="text-gray-400">// Location</div>
              <div className="mt-2">San Francisco, CA</div>
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}

export default App