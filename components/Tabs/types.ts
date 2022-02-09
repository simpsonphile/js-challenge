type Item =
  | {
      content: React.ReactNode;
      asLink?: never;
      href?: never;
    }
  | {
      asLink: true;
      href: string;
      content?: never;
    };

type Items = Record<string, Item>;

export type { Items };
