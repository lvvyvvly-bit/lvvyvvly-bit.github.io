/**
 * Re-exports motion/react and provides runtime stubs for type-only imports
 * used by Circular_text.tsx (must not edit that file).
 */
export {
  motion,
  useAnimation,
  useMotionValue,
} from 'motion/react-original';

export type { MotionValue, Transition } from 'motion/react-original';

import type { MotionValue as MV, Transition as T } from 'motion/react-original';

/** @internal satisfies value import in Circular_text.tsx */
export const Transition = undefined as unknown as T;

/** @internal satisfies value import in Circular_text.tsx */
export const MotionValue = undefined as unknown as MV;
