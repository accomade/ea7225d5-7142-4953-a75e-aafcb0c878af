// src/routes/+layout.server.ts
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url, locals: { lang } }) => {
  
  return {
    lang: lang ?? 'en',
  };
}