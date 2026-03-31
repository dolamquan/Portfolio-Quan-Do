import { Outlet } from 'react-router';
import { Navigation } from './Navigation';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 mb-2">
            © {new Date().getFullYear()} Quan Do. All rights reserved.
          </p>
          {/* <p className="text-gray-500 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p> */}
        </div>
      </footer>
    </div>
  );
}
