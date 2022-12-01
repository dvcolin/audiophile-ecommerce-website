interface Styles {
  readonly [key: string]: string;
}

type Args = (string | { readonly [key: string]: boolean } | undefined)[];

export function classNames(styles: Styles, ...args: Args) {
  return args
    .reduce<string[]>((acc, cur) => {
      if (cur) {
        if (typeof cur === 'string') {
          acc.push(styles[cur] || cur);
        } else if (typeof cur === 'object') {
          for (const [className, val] of Object.entries(cur)) {
            if (val) acc.push(styles[className] || className);
          }
        }
      }
      return acc;
    }, [])
    .join(' ');
}
