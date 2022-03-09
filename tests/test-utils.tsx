import { ReactElement } from 'react';

import { render, RenderOptions } from '@testing-library/react';

import AppWrapper, { AppWrapperProps } from 'components/AppWrapper';

const AllTheProviders = ({ children }: AppWrapperProps) => {
  return <AppWrapper>{children}</AppWrapper>;
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
