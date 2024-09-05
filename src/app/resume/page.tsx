import dynamic from 'next/dynamic';

// Dynamically import Resume with SSR disabled
const Resume = dynamic(
  () => import('@/components/Resume/Resume').then(mod => mod.Resume),
  { ssr: false },
);

export default function ResumePage() {
  return <Resume />;
}
