import SlideUp from "./SlideUp";

const ViewingSection = () => {
  return (
    <section id="viewing" className="mx-auto max-w-6xl mt-10 text-center">
      <h1 className="pt-6 md:pt-14 font-bold text-4xl md:text-5xl">VIDEO</h1>
      <SlideUp offset="-300px 0px -300px 0px">
        <p className="mx-5 animate-slideUpCubiBezier animation-delay-2 pt-12 text-l md:text-xl">
          Lawat galeri pameran hartanah pada bila-bila masa dan di mana sahaja,{" "}
          <span className="font-semibold text-teal-600">
            dari sudut yang baru!
          </span>
        </p>
        <div className="py-14 md:py-32 flex flex-col space-y-10 items-center justify-around md:flex-row md:space-y-0">
          <video
            className="rounded-xl shadow-2xl"
            autoPlay
            muted
            width={250}
            height={250}
            controls
            src="/videos/0E26360A.mp4"
          ></video>
          <video
            className="rounded-xl shadow-2xl"
            autoPlay
            muted
            width={250}
            height={250}
            controls
            src="/videos/7B4D87B0.mp4"
          ></video>
          <video
            className="rounded-xl shadow-2xl"
            autoPlay
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
