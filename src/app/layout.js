import './globals.css';
import { Inter, Raleway } from 'next/font/google';

const inter = Raleway({ subsets: ['latin'] });

export const metadata = {
  title: 'AiWizards - AI Chatbots',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/assets/images/logo.svg"
          type="image/x-icon"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
