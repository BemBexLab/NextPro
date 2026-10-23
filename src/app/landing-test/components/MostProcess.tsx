import Image from 'next/image'
import { FileText, MessageCircleMore, Rocket, Megaphone } from 'lucide-react'

const steps = [
  {
    title: 'Tell Us About Your Project',
    description: 'Share your goals and requirements using our quick form.',
    Icon: FileText,
  },
  {
    title: 'Get a Tailored Quote',
    description: "We'll review your needs and send a clear proposal with timeline.",
    Icon: MessageCircleMore,
  },
  {
    title: 'Design & Develop',
    description: 'We create your website with regular updates.',
    Icon: Rocket,
  },
  {
    title: 'Launch With Confidence',
    description: 'We deliver a website that helps your business grow.',
    Icon: Megaphone,
  },
]

const decorativeImages = [
  {
    src: '/Assets/High%20res/0dfaa056-ea22-4de3-97eb-261590f9d661.png',
    width: 1365,
    height: 1140,
    className:
      'left-[2%] top-8 w-20 -rotate-12 xl:block 2xl:left-[5%] 2xl:top-12 2xl:w-32',
  },
  {
    src: '/Assets/High%20res/90962928-d583-46b1-99eb-89a9013feaa2.png',
    width: 1000,
    height: 1150,
    className:
      'right-[2%] top-[16%] w-16 rotate-12 xl:block 2xl:right-[5%] 2xl:top-[20%] 2xl:w-28',
  },
  {
    src: '/Assets/High%20res/90962928-d583-46b1-99eb-89a9013feaa2.png',
    width: 1000,
    height: 1150,
    className:
      'bottom-8 left-[7%] hidden w-16 rotate-6 min-[1800px]:block 2xl:w-24',
  },
  {
    src: '/Assets/High%20res/0dfaa056-ea22-4de3-97eb-261590f9d661.png',
    width: 1365,
    height: 1140,
    className:
      'right-[8%] bottom-10 hidden w-20 -rotate-6 min-[1800px]:block 2xl:w-28',
  },
]

const MostProcess = () => {
  return (
    <section
      aria-labelledby="process-heading"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-4 py-12 text-[#101820] sm:px-6 sm:py-16 lg:px-10 lg:py-20"
    >
      {decorativeImages.map(({ src, width, height, className }, index) => (
        <Image
          key={`${src}-${index}`}
          src={src}
          alt=""
          aria-hidden="true"
          width={width}
          height={height}
          className={`process-decoration-float process-decoration-float-${index + 1} pointer-events-none absolute z-0 hidden object-contain select-none ${className}`}
        />
      ))}
      <div className="relative z-10 mx-auto max-w-7xl">
        <header className="text-center">
          <span className="inline-flex rounded-full bg-[#e90c14] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-white sm:text-xs">
            Most Process
          </span>
          <h2
            id="process-heading"
            className="mt-3 text-2xl font-black uppercase leading-tight tracking-[-0.035em] sm:text-3xl lg:text-[42px]"
          >
            A Simple Process. Great Results.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
            We make it easy to get your new website up and running.
          </p>
        </header>

        <ol className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:mt-12 min-[720px]:grid-cols-4 min-[720px]:gap-x-3 min-[720px]:gap-y-0 lg:mt-14 lg:gap-x-5">
          {steps.map(({ title, description, Icon }, index) => (
            <li key={title} className="relative flex min-w-0 flex-col items-center text-center">
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[calc(50%+38px)] top-[31px] hidden w-[calc(100%-76px)] border-t-2 border-dashed border-slate-300 min-[720px]:block"
                />
              )}
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#fde8e8] text-[#e31824] sm:h-[72px] sm:w-[72px]">
                <Icon aria-hidden="true" className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={2.5} />
                <span className="absolute bottom-0 -left-8 flex h-7 w-7 items-center justify-center rounded-full bg-[#e31824] text-xs font-extrabold text-white shadow-sm sm:-left-9 sm:h-8 sm:w-8 sm:text-sm">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-4 text-sm font-extrabold leading-snug min-[720px]:mt-5 min-[720px]:text-[13px] lg:text-base">
                {title}
              </h3>
              <p className="mt-1.5 max-w-[240px] text-[13px] leading-relaxed text-slate-600 min-[720px]:text-xs lg:mt-2 lg:text-sm">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default MostProcess
