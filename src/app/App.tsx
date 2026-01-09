import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from '@/pages/HomePage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* Future routes can be added here:
          <Route path="/listing" element={<ListingPage />} />
          <Route path="/property/:id" element={<PropertyDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

