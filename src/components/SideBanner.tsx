export function SideBanner() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-violet-500 text-violet-200">
      <div className="w-full h-full bg-[url('/halfGeometricBackground.svg')] bg-no-repeat bg-cover p-6 py-10 md:py-6 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-8">
          <img className="object-scale-down object-left w-[50%] md:w-full" src="/proffy.svg" alt="Logo do Proffy" draggable="false" />
          <span className='font-sans text-xl lg:text-3xl leading-relaxed text-center md:text-left'>Sua plataforma de <br /> estudos online.</span>
        </div>
      </div>
    </div>
  );
};
