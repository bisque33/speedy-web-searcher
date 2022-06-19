type SearchCondition = {
  label: string;
  favicon?: string; // Not Impl
  url: string;
  additionalText?: string;
  suggest?: 'google'; // Not Impl
}

export const conditions: SearchCondition[] = [
  {
    label: 'Google',
    url: 'https://www.google.com/search?q=',
    suggest: 'google',
  },
  {
    label: 'Google (Next.js)',
    url: 'https://www.google.com/search?q=',
    additionalText: 'site:nextjs.org',
    suggest: 'google',
  },
  {
    label: 'Google (Ruby)',
    url: 'https://www.google.com/search?q=',
    additionalText: 'site:ruby-lang.org',
    suggest: 'google',
  },
  {
    label: 'Google (MDN)',
    url: 'https://www.google.com/search?q=',
    additionalText: 'site:developer.mozilla.org',
    suggest: 'google',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/search?q=',
  },
  {
    label: 'Zenn',
    url: 'https://zenn.dev/search?q=',
  },
  {
    label: 'Google Cloud',
    url: 'https://cloud.google.com/s/results?q=',
  }
]