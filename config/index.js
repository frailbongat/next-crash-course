const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? 'http://localhost:3000'
  : 'http://next-crash-course-96wbu70jc-frailbongat.vercel.app';
