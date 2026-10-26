'use client';

// Adapted from uiarc.dev's Accordion (Radix for semantics and ids, motion for height).
import { useState } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { ease } from '@/lib/motion';

const spring = { type: 'spring', stiffness: 260, damping: 32, mass: 0.9 };

const panel = {
  open: {
    height: 'auto',
    opacity: 1,
    visibility: 'visible',
    transition: { height: spring, opacity: { duration: 0.24, ease: ease.out } },
  },
  closed: {
    height: 0,
    opacity: 0,
    transitionEnd: { visibility: 'hidden' },
    transition: { height: spring, opacity: { duration: 0.15, ease: ease.out } },
  },
};

const still = {
  open: { height: 'auto', opacity: 1, visibility: 'visible', transition: { duration: 0 } },
  closed: { height: 0, opacity: 0, transitionEnd: { visibility: 'hidden' }, transition: { duration: 0 } },
};

export function Accordion({ items, defaultOpen = -1 }) {
  const [openValue, setOpenValue] = useState(defaultOpen >= 0 ? String(defaultOpen) : '');
  const reduced = useReducedMotion();

  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      value={openValue}
      onValueChange={setOpenValue}
      className="border-t border-border"
    >
      {items.map((item, index) => {
        const open = openValue === String(index);
        return (
          <AccordionPrimitive.Item key={item.title} value={String(index)} className="border-b border-border">
            <AccordionPrimitive.Header className="m-0">
              <AccordionPrimitive.Trigger className="group flex min-h-18 w-full cursor-pointer items-center justify-between gap-8 py-5 text-left font-display text-lg font-medium text-foreground transition-colors hover:text-accent">
                <span>{item.title}</span>
                <motion.span
                  className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors group-hover:border-accent group-hover:text-accent"
                  initial={false}
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={reduced ? { duration: 0 } : spring}
                >
                  <ChevronDown aria-hidden="true" className="size-4" />
                </motion.span>
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionPrimitive.Content forceMount asChild>
              <motion.div
                className="overflow-hidden"
                initial={false}
                animate={open ? 'open' : 'closed'}
                variants={reduced ? still : panel}
              >
                <p className="max-w-[62ch] pr-12 pb-6 text-muted">{item.content}</p>
              </motion.div>
            </AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        );
      })}
    </AccordionPrimitive.Root>
  );
}
