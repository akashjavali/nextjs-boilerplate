'use client';
import Homepage from '@/components/homepage';
import { ContextWrapper } from '@/utils';

export default function App() {
  return (
    <ContextWrapper>
      <Homepage />
    </ContextWrapper>
  );
}
