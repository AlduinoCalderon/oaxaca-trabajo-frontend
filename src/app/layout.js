import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'] });

export const metadata = {
  title: 'Secretaría del Trabajo | Gobierno del Estado de Oaxaca',
  description: 'Portal oficial de la Secretaría del Trabajo del Estado de Oaxaca.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <div className="app-container">
          <Header />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
