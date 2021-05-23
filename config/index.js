const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? 'http://localhost:3000'
  : 'https://next-crash-course-diz9xpb1k-frailbongat.vercel.app';
