import SlideUp from "./SlideUp";

const ViewingSection = () => {
  return (
    
      <section
        id="viewing"
        className="bg-zinc-400 mt-32 rounded-xl mx-auto max-w-7xl"
      >
        <h1 className="pt-14 text-center font-bold text-4xl">
          Virtual Viewing
        </h1>
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        <SlideUp offset="-300px 0px -300px 0px">
        <div className="pb-28 flex flex-col space-y-10 items-center justify-evenly mt-16 md:flex-row md:space-y-0">
          <video
            className="rounded-xl shadow-2xl animate-slideUpCubiBezier animation-delay-2"
            muted
            width={250}
            height={250}
            controls
            src="/videos/231108.mp4"
          ></video>
          <video
            className="rounded-xl shadow-2xl animate-slideUpCubiBezier animation-delay-2"
            muted
            width={250}
            height={250}
            controls
            src="/videos/231108.mp4"
          ></video>
          <video
            className="rounded-xl shadow-2xl animate-slideUpCubiBezier animation-delay-2"
            muted
            width={250}
            height={250}
            controls
            src="/videos/231108.mp4"
          ></video>
        </div>
        </SlideUp>
      </section>
  );
};

export default ViewingSection;
