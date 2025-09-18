import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Headers de seguridad
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');

  // Headers de caché para assets estáticos
  if (request.nextUrl.pathname.startsWith('/_next/static/')) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  }

  // Headers de caché para imágenes
  if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|ico|svg|webp|avif)$/)) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  }

  // Headers de caché para documentos PDF
  if (request.nextUrl.pathname.startsWith('/docs/')) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  }

  // Headers de caché para páginas HTML
  if (request.nextUrl.pathname.match(/\.(html|htm)$/) || 
      (!request.nextUrl.pathname.includes('.') && request.nextUrl.pathname !== '/api/')) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=3600, s-maxage=3600'
    );
  }

  // Headers de compresión
  const acceptEncoding = request.headers.get('accept-encoding');
  if (acceptEncoding?.includes('br')) {
    response.headers.set('Content-Encoding', 'br');
  } else if (acceptEncoding?.includes('gzip')) {
    response.headers.set('Content-Encoding', 'gzip');
  }

  // Headers para Core Web Vitals
  response.headers.set('Vary', 'Accept-Encoding');
  
  // Headers para CSP (Content Security Policy)
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests"
  ].join('; ');
  
  response.headers.set('Content-Security-Policy', csp);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
