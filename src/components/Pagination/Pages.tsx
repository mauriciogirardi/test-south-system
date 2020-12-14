import React from 'react';

interface PageProps {
  page: number | string;
  onClick: (page: string | number) => void;
  style: {};
}

const Page: React.FC<PageProps> = ({ page, onClick, style }) => {
  const Component = typeof page === 'string' ? Dots : 'button';

  return (
    <Component onClick={() => onClick(page)} style={style}>
      {page}
    </Component>
  );
};

const Dots = () => <samp>...</samp>;

export default Page;
