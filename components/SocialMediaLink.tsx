import { BaseComponentProps } from '@/types/components';

import Button from './Button';

type SocialMediaLinkProps = BaseComponentProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    icon: React.ReactElement<SVGElement>;
  };

export default function SocialMediaLink(props: SocialMediaLinkProps) {
  const { icon, ...rest } = props;
  return (
    <li role="listitem">
      <Button as="externalLink" variant="icon" {...rest}>
        {icon}
      </Button>
    </li>
  );
}
