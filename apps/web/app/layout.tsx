import type { ReactNode } from 'react';

export const metadata = {
  title: 'Support Triage: Review Queue',
  description: 'Review and approve AI-drafted support replies before they are sent.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 24 }}>
        {children}
      </body>
    </html>
  );
}
