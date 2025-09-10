import { ReactNode } from 'react';

export function RTLProvider({ children }: { children: ReactNode }) {
  return (
    <div dir="rtl" className="rtl">
      {children}
    </div>
  );
}

export const rtlClasses = {
  textAlign: {
    left: 'text-right',
    right: 'text-left',
    center: 'text-center',
  },
  margin: {
    left: 'mr',
    right: 'ml',
  },
  padding: {
    left: 'pr',
    right: 'pl',
  },
  border: {
    left: 'border-r',
    right: 'border-l',
  },
  rounded: {
    left: 'rounded-r',
    right: 'rounded-l',
  },
  space: {
    left: 'space-x-reverse',
    right: 'space-x',
  },
  flex: {
    left: 'flex-row-reverse',
    right: 'flex-row',
  },
  grid: {
    left: 'grid-flow-col-dense',
    right: 'grid-flow-col',
  },
};

export function getRTLClass(property: keyof typeof rtlClasses, direction: 'left' | 'right' = 'left'): string {
  const propertyObj = rtlClasses[property] as Record<string, string>;
  return propertyObj[direction] || '';
}

export function getTextAlignClass(direction: 'left' | 'right' | 'center' = 'left'): string {
  return rtlClasses.textAlign[direction];
}
