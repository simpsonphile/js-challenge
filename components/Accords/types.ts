import { AccordProps } from 'components/Accord';

export type Items = Record<string, Omit<AccordProps, 'toggle'>>;
