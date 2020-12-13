import React from 'react';

interface PageProps {
  page: number | string;
  pageLink?: string;
  onClick?: (page: string | number) => void;
  style: {};
}

const Page: React.FC<PageProps> = ({ page, pageLink, onClick, style }) => {
  const Component = typeof page === 'string' ? Dots : 'button';

  return (
    <Component
      href={typeof page === 'string' ? null : pageLink}
      onClick={() => onClick(page)}
      style={style}
    >
      {page}
    </Component>
  );
};

const Dots = () => <samp>...</samp>;

export default Page;
