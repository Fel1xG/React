declare module 'react-scroll' {
  interface LinkProps {
    to: string | Element;
    smooth?: boolean;
    duration?: number;
  }

  export class Link extends React.Component<LinkProps> {}

  // Agrega aquí otros tipos si los utilizas en tu código
}
