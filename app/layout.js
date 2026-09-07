import './globals.css';

export const metadata = {
  title: 'MediSeg | Smart Medical-Waste Collection & Segregation System',
  description: 'AI-Driven Medical-Waste Logistics & Segregation - Autodesk SIH 2026',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-isro-darker text-gray-100">
        {children}
      </body>
    </html>
  );
}