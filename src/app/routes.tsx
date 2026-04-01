import { createBrowserRouter, Link } from 'react-router';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { About } from './pages/AboutPage';
import { Skills } from './pages/SkillsPage';
import { Experience } from './pages/ExperiencePage';
import { Projects } from './pages/ProjectsPage';
import { Contact } from './pages/ContactPage';
import { Chat } from './pages/ChatPage';

function NotFound() {
  return (
    <div className="min-h-[calc(100vh-73px)] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-block">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Layout,
      children: [
        { index: true, Component: Hero },
        { path: 'about', Component: About },
        { path: 'skills', Component: Skills },
        { path: 'experience', Component: Experience },
        { path: 'projects', Component: Projects },
        { path: 'contact', Component: Contact },
        { path: 'chat', Component: Chat },
        { path: '*', Component: NotFound }
      ]
    }
  ],
  {
    basename: '/Portfolio-Quan-Do'
  }
);
