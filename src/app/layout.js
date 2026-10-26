import { Inter, Inter_Tight } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { THEME_STORAGE_KEY, DEFAULT_THEME_MODE } from '@/lib/theme';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
});

export const metadata = {
  title: 'Xterasystem',
  description: 'Create an Xterasystem account to explore curated opportunities across real assets and private markets, clearly labeled by structure, risk factors, and eligibility.',
};

export const viewport = {
  themeColor: '#070A09',
};

// Applies the saved theme before first paint so there is no flash of the wrong theme.
const themeScript = `(function(){try{var m=localStorage.getItem('${THEME_STORAGE_KEY}')||'${DEFAULT_THEME_MODE}';var d=m==='dark'||(m==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.setAttribute('data-theme',d?'dark':'light')}catch(e){}})()`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${interTight.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
