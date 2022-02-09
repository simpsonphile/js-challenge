import ThemeContextProvider from 'themes/ThemeProvider';
import GlobalStyle from 'themes/GlobalStyle';
import ThemeContextConsumer from 'themes/ThemeConsumer';

type AppWrapperProps = {
  children: React.ReactElement;
};

export default function AppWrapper(props: AppWrapperProps): React.ReactElement {
  const { children } = props;

  return (
    <ThemeContextProvider>
      <ThemeContextConsumer>
        <>
          <GlobalStyle />

          {children}
        </>
      </ThemeContextConsumer>
    </ThemeContextProvider>
  );
}
