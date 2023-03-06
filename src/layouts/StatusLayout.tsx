import { Outlet } from 'react-router-dom';

export function StatusLayout() {
  return (
    <main className="w-screen h-screen bg-violet-600 flex items-center justify-center">
      <div className="w-full h-full p-6 bg-[url('/fullGeometricBackground.svg')] bg-no-repeat bg-cover flex flex-col items-center justify-center gap-12 text-center">
        <Outlet />
      </div>
    </main>
  );
};
